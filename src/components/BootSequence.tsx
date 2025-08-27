import { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
  birthdayName?: string;
}

const BootSequence = ({ onComplete, birthdayName = "Friend" }: BootSequenceProps) => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [modemPlaying, setModemPlaying] = useState(false);
  const [modemAudio, setModemAudio] = useState<HTMLAudioElement | null>(null);

  const loadingMessages = [
    'Loading vibes.dll...',
    'Yeeting bad energy.exe to trash...',
    'Downloading serotonin_boost.zip...',
    'Leo energy activated...',
    'Photogenic mode: always ON...',
    `Main character energy for ${birthdayName} loading...`,
    'BIRTHDAY.EXE is bussin...'
  ];

  useEffect(() => {
    // Play modem sound when loading starts
    if (messageIndex === 1 && !modemPlaying) {
      const audio = playModemSound();
      setModemAudio(audio);
      setModemPlaying(true);
    }

    const timer = setTimeout(() => {
      if (messageIndex < loadingMessages.length) {
        setCurrentMessage(loadingMessages[messageIndex]);
        setProgress((messageIndex + 1) * (100 / loadingMessages.length));
        setMessageIndex(messageIndex + 1);
      } else {
        // Stop modem sound before transitioning
        if (modemAudio) {
          modemAudio.pause();
          modemAudio.currentTime = 0;
        }
        playStartupSound();
        setTimeout(onComplete, 1000);
      }
    }, 1200); // Slightly faster than before

    return () => clearTimeout(timer);
  }, [messageIndex, loadingMessages.length, onComplete, modemPlaying, modemAudio]);

  const playModemSound = () => {
    // Play the actual 56k modem sound from the audio file, starting at second 9
    const audio = new Audio('/ssvid.net--Der-56k-Modem-Klang-The-56k-dialup-modem-sound.mp3');
    audio.currentTime = 9; // Start from second 9 to skip the phone dialing
    audio.volume = 0.3; // Adjust volume to be not too loud
    audio.play().catch((error) => {
      console.log('Could not play modem sound:', error);
    });
    return audio;
  };

  const playStartupSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRkwGAABXQVZFZm10IBAAAAABAAEAESsAABErAAACABAAZGF0YSgGAADx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb29vb39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/z8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  return (
    <div className="boot-screen scanlines crt-effect">
      <div className="loading-container">
        <div className="windows-logo">
          <div className="windows-flag">
            <div className="flag-piece"></div>
            <div className="flag-piece"></div>
            <div className="flag-piece"></div>
            <div className="flag-piece"></div>
          </div>
          <div className="windows-text">Windows<br/>95</div>
        </div>
        
        <div className="loading-message">
          {currentMessage}<span className="cursor"></span>
        </div>
        
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default BootSequence;