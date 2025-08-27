import { useState, useEffect } from 'react';
import './VoucherReveal.css';

interface VoucherRevealProps {
  voucher1: string;
  voucher2: string;
  birthdayName?: string;
}

const VoucherReveal = ({ birthdayName = "Friend" }: VoucherRevealProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(true);
      playWinSound();
    }, 500);
    
    setTimeout(() => {
      setRevealed(true);
    }, 1500);
  }, []);

  const playWinSound = () => {
    // Victory fanfare sound
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const notes = [523, 659, 784, 1047]; // C, E, G, High C
    
    notes.forEach((freq, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = freq;
      gainNode.gain.value = 0.3;
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime + index * 0.1);
      oscillator.stop(audioContext.currentTime + index * 0.1 + 0.5);
    });
  };

  const createConfetti = () => {
    const confettiColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className="confetti"
        style={{
          left: `${Math.random() * 100}%`,
          backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }}
      />
    ));
  };

  return (
    <div className="voucher-reveal">
      {showConfetti && <div className="confetti-container">{createConfetti()}</div>}
      
      <div className={`reveal-content ${revealed ? 'revealed' : ''}`}>
        <h1 className="birthday-title">
          🎉 HAPPY BIRTHDAY {birthdayName.toUpperCase()}! 🎉
        </h1>
        
        <div className="teatro7-container">
          <img src="/LOGO-TEATRO7.svg" alt="Teatro7" className="teatro7-logo" />
        </div>
        
        <div className="vouchers-container">
          <div className="voucher-card single-voucher">
            <div className="voucher-header">
              <span className="voucher-icon">🎁👩‍🍳</span>
              <h3>COOKING COURSE</h3>
            </div>
            <div className="voucher-content">
              <p className="voucher-main-text">2 Vouchers for a course @ Teatro7</p>
              <div className="voucher-info">
                <p className="voucher-description">
                  We already know you're great at cooking (and tonight is further proof!) but why not expand your culinary horizons by exploring new cuisines?
                </p>
                <p className="voucher-options">
                  You can use them however you prefer:
                </p>
                <ul className="voucher-list">
                  <li>👫 Take a class with Matteo, grandma, or whoever you want!</li>
                  <li>👩‍🍳 Take two different courses yourself</li>
                </ul>
              </div>
              <div className="voucher-details">
                <p>📍 Via Genova Thaon di Revel, Milan</p>
                <p>📧 More details by email</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="retro-decoration">
          <div className="marquee-text">★ ☆ ★ BUON COMPLEANNO! ★ ☆ ★ COOKING TIME AT TEATRO7! ★ ☆ ★</div>
        </div>
      </div>
    </div>
  );
};

export default VoucherReveal;