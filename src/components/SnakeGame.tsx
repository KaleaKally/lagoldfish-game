import { useState, useEffect, useRef, useCallback } from 'react';
import './SnakeGame.css';

interface SnakeGameProps {
  onWin: () => void;
  onBack?: () => void;
  targetScore?: number;
}

const GRID_SIZE = 15;
const CELL_SIZE = 20;
const INITIAL_SPEED = 200;
const SPEED_INCREMENT = 5;

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const SnakeGame = ({ onWin, onBack, targetScore = 100 }: SnakeGameProps) => {
  const [snake, setSnake] = useState<Position[]>([{ x: 7, y: 7 }]);
  const [food, setFood] = useState<Position>({ x: 10, y: 10 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [isPaused, setIsPaused] = useState(true); // Start paused for countdown
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [countdown, setCountdown] = useState<number | null>(3); // Countdown state
  
  const gameLoopRef = useRef<NodeJS.Timeout>();
  const directionRef = useRef<Direction>(direction);

  // Remove emojis for Nokia style - just use a simple square for food
  // const foodEmojis = ['🎂', '🎁', '🎈', '🍰', '🎉', '🎊', '💝', '🎀'];
  // const [currentFoodEmoji, setCurrentFoodEmoji] = useState('🎂');

  const generateFood = useCallback((): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    
    // setCurrentFoodEmoji(foodEmojis[Math.floor(Math.random() * foodEmojis.length)]);
    return newFood;
  }, [snake]);

  const moveSnake = useCallback(() => {
    if (gameOver || gameWon || isPaused) return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };

      switch (directionRef.current) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }

      // Wall collision = game over!
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        return currentSnake;
      }

      // Self collision check (optional - can remove for easier game)
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        // Instead of game over, just don't move
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check if food eaten
      if (head.x === food.x && head.y === food.y) {
        setScore(prevScore => {
          const newScore = prevScore + 10;
          if (newScore >= targetScore) {
            setGameWon(true);
            setTimeout(onWin, 1500);
          }
          return newScore;
        });
        setFood(generateFood());
        setSpeed(prev => Math.max(50, prev - SPEED_INCREMENT));
        playEatSound();
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [food, gameOver, gameWon, isPaused, generateFood, targetScore, onWin]);

  const playEatSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRhwAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQgAAAAA');
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (gameOver || gameWon) return;

    const key = e.key;
    let newDirection = directionRef.current;

    switch (key) {
      case 'ArrowUp':
        if (directionRef.current !== 'DOWN') newDirection = 'UP';
        break;
      case 'ArrowDown':
        if (directionRef.current !== 'UP') newDirection = 'DOWN';
        break;
      case 'ArrowLeft':
        if (directionRef.current !== 'RIGHT') newDirection = 'LEFT';
        break;
      case 'ArrowRight':
        if (directionRef.current !== 'LEFT') newDirection = 'RIGHT';
        break;
      case ' ':
        setIsPaused(prev => !prev);
        break;
    }

    directionRef.current = newDirection;
    setDirection(newDirection);
  }, [gameOver, gameWon]);

  const handleTouchControl = (dir: Direction) => {
    if (gameOver || gameWon) return;

    if (
      (dir === 'UP' && directionRef.current !== 'DOWN') ||
      (dir === 'DOWN' && directionRef.current !== 'UP') ||
      (dir === 'LEFT' && directionRef.current !== 'RIGHT') ||
      (dir === 'RIGHT' && directionRef.current !== 'LEFT')
    ) {
      directionRef.current = dir;
      setDirection(dir);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Start countdown when component mounts
  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCountdown(null);
      setIsPaused(false);
    }
  }, [countdown]);

  useEffect(() => {
    gameLoopRef.current = setInterval(moveSnake, speed);
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [moveSnake, speed]);

  const resetGame = () => {
    setSnake([{ x: 7, y: 7 }]);
    setFood({ x: 10, y: 10 });
    setDirection('RIGHT');
    directionRef.current = 'RIGHT';
    setScore(0);
    setGameOver(false);
    setGameWon(false);
    setIsPaused(false);
    setSpeed(INITIAL_SPEED);
  };

  return (
    <div className="snake-container">
      {onBack && (
        <button className="back-arrow-btn" onClick={onBack} title="Back to Menu">
          ←
        </button>
      )}
      <div className="game-window">
        <div className="window-title">
          <span>Snake Game - Score: {score}/{targetScore}</span>
          <div className="window-controls">
            <button className="window-btn">_</button>
            <button className="window-btn">□</button>
            <button className="window-btn">×</button>
          </div>
        </div>
        <div className="game-content">
          <div className="score-bar">
            <span>Score: {score}</span>
            <span>Target: {targetScore}</span>
          </div>

          <div className="game-board">
            {Array.from({ length: GRID_SIZE }, (_, y) =>
              Array.from({ length: GRID_SIZE }, (_, x) => {
                const isSnakeHead = snake[0].x === x && snake[0].y === y;
                const isSnakeBody = snake.slice(1).some(segment => segment.x === x && segment.y === y);
                const isFood = food.x === x && food.y === y;

                return (
                  <div
                    key={`${x}-${y}`}
                    className={`cell ${isSnakeHead ? 'snake-head' : ''} ${isSnakeBody ? 'snake-body' : ''} ${isFood ? 'food' : ''}`}
                    style={{
                      left: `${x * CELL_SIZE}px`,
                      top: `${y * CELL_SIZE}px`,
                      width: `${CELL_SIZE}px`,
                      height: `${CELL_SIZE}px`
                    }}
                  />
                );
              })
            )}
            
            {/* Countdown Overlay - inside game board */}
            {countdown !== null && (
              <div className="countdown-overlay">
                <div className="countdown-content">
                  <div className="game-rules">
                    <h3>SNAKE GAME</h3>
                    <p>Reach {targetScore} points</p>
                    <p>to unlock your prize!</p>
                    <br />
                    <p>Use arrows to move</p>
                    <p>Don't hit the walls!</p>
                  </div>
                  <div className="countdown-number">
                    {countdown > 0 ? countdown : 'GO!'}
                  </div>
                </div>
              </div>
            )}

            {/* Game Won/Over Overlays - inside game board */}
            {gameWon && (
              <div className="game-overlay">
                <h2>YOU WIN!</h2>
                <p>Congratulations!</p>
                <p>Loading your surprise...</p>
              </div>
            )}

            {gameOver && (
              <div className="game-overlay">
                <h2>GAME OVER</h2>
                <p>Score: {score}</p>
                <button onClick={resetGame} className="retry-btn">Start Again</button>
              </div>
            )}
          </div>
        </div>
        
        {/* Control Buttons */}
        <div className="controls-container">
          <div className="controls-grid">
            <button className="control-btn up" onClick={() => handleTouchControl('UP')}>↑</button>
            <button className="control-btn left" onClick={() => handleTouchControl('LEFT')}>←</button>
            <button className="control-btn pause" onClick={() => setIsPaused(!isPaused)}>
              {isPaused ? '▶' : '❚❚'}
            </button>
            <button className="control-btn right" onClick={() => handleTouchControl('RIGHT')}>→</button>
            <button className="control-btn down" onClick={() => handleTouchControl('DOWN')}>↓</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SnakeGame;