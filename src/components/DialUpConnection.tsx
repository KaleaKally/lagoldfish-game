import { useState } from 'react';
import './DialUpConnection.css';

interface DialUpProps {
  onConnected: () => void;
}

const DialUpConnection = ({ onConnected }: DialUpProps) => {
  const [status, setStatus] = useState('Initializing modem...');
  const [isConnecting, setIsConnecting] = useState(false);
  const [progress, setProgress] = useState(0);

  const statuses = [
    'Initializing modem...',
    'Dialing 555-ARCADE...',
    'Verifying username and password...',
    'Connecting to Birthday Server...',
    'Connected! Loading arcade...'
  ];

  const startConnection = () => {
    setIsConnecting(true);
    playModemSound();
    
    let currentStatus = 0;
    const interval = setInterval(() => {
      if (currentStatus < statuses.length) {
        setStatus(statuses[currentStatus]);
        setProgress((currentStatus + 1) * (100 / statuses.length));
        currentStatus++;
      } else {
        clearInterval(interval);
        setTimeout(onConnected, 500);
      }
    }, 1500);
  };

  const playModemSound = () => {
    // Create a simple modem sound effect
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const sounds = [
      { freq: 800, duration: 0.1 },
      { freq: 1200, duration: 0.1 },
      { freq: 2400, duration: 0.2 },
      { freq: 1800, duration: 0.1 },
      { freq: 2100, duration: 0.3 },
    ];
    
    let time = 0;
    sounds.forEach(sound => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = sound.freq;
      gainNode.gain.value = 0.1;
      
      oscillator.start(audioContext.currentTime + time);
      oscillator.stop(audioContext.currentTime + time + sound.duration);
      
      time += sound.duration + 0.1;
    });
  };

  return (
    <div className="dialup-window">
      <div className="window-titlebar">
        <span className="window-title">🌐 Connect to Birthday Arcade</span>
        <div className="window-controls">
          <button className="window-btn">_</button>
          <button className="window-btn">□</button>
          <button className="window-btn close">×</button>
        </div>
      </div>
      
      <div className="window-content">
        <div className="dialup-icon">☎️</div>
        
        {!isConnecting ? (
          <>
            <h3>Birthday Arcade Network</h3>
            <p>Click Connect to dial into the arcade server</p>
            
            <div className="connection-form">
              <div className="form-group">
                <label>Username:</label>
                <input type="text" value="birthday_user" readOnly />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" value="********" readOnly />
              </div>
            </div>
            
            <button className="connect-btn" onClick={startConnection}>
              Connect
            </button>
          </>
        ) : (
          <>
            <div className="connection-status">
              <p>{status}</p>
              <div className="modem-animation">
                <span className="modem-light"></span>
                <span className="modem-light"></span>
                <span className="modem-light"></span>
              </div>
            </div>
            
            <div className="dialup-progress">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            
            <p className="speed-text">Speed: 56.6k</p>
          </>
        )}
      </div>
    </div>
  );
};

export default DialUpConnection;