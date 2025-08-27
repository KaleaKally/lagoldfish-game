import { useState } from 'react'
import './App.css'
import PowerOffScreen from './components/PowerOffScreen'
import BootSequence from './components/BootSequence'
import MemphisPartyScreen from './components/MemphisPartyScreen'
import Windows95Desktop from './components/Windows95Desktop'
import DialUpConnection from './components/DialUpConnection'
import SnakeGame from './components/SnakeGame'
import VoucherReveal from './components/VoucherReveal'

type GamePhase = 'memphis' | 'boot' | 'aquarium' | 'game' | 'reveal';

function App() {
  const [gamePhase, setGamePhase] = useState<GamePhase>('memphis');
  
  // Customize these values for your friend
  const birthdayName = "Laura"; // Change this to your friend's name
  const voucher1 = "Corso di Cucina presso Teatro7 - Milano"; // First voucher
  const voucher2 = "Corso di Cucina presso Teatro7 - Milano"; // Second voucher (for Matteo)
  const targetScore = 100; // Score needed to win (lower = easier/faster)

  const handleStartWindows = () => {
    setGamePhase('boot');
  };

  const handleBootComplete = () => {
    setGamePhase('aquarium');
  };

  const handlePressStart = () => {
    setGamePhase('game');
  };

  const handleGameWin = () => {
    setGamePhase('reveal');
  };

  const handleBackToMenu = () => {
    setGamePhase('aquarium');
  };

  return (
    <>
      {gamePhase === 'memphis' && (
        <MemphisPartyScreen 
          onStart={handleStartWindows}
          birthdayName={birthdayName}
        />
      )}
      
      {gamePhase === 'boot' && (
        <BootSequence 
          onComplete={handleBootComplete} 
          birthdayName={birthdayName} 
        />
      )}
      
      {gamePhase === 'aquarium' && (
        <PowerOffScreen onPowerOn={handlePressStart} />
      )}
      
      {gamePhase === 'game' && (
        <SnakeGame 
          onWin={handleGameWin} 
          onBack={handleBackToMenu}
          targetScore={targetScore}
        />
      )}
      
      {gamePhase === 'reveal' && (
        <VoucherReveal 
          voucher1={voucher1}
          voucher2={voucher2}
          birthdayName={birthdayName}
        />
      )}
    </>
  )
}

export default App