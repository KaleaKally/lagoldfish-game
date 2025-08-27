import './PowerOffScreen.css';
import './WordArt.css';

interface PowerOffScreenProps {
  onPowerOn: () => void;
}

const PowerOffScreen = ({ onPowerOn }: PowerOffScreenProps) => {
  return (
    <div className="power-off-screen aquarium-theme">
      {/* SVG Fish with perfect transparency - swimming forward */}
      <svg className="goldfish goldfish-1" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="25" ry="15" fill="#ff6b35" stroke="#ff4500" strokeWidth="2"/>
        <polygon points="45,30 30,20 30,40" fill="#ff6b35" stroke="#ff4500" strokeWidth="2"/>
        <polygon points="90,30 100,25 100,35" fill="#ff8c42" stroke="#ff4500" strokeWidth="1"/>
        <circle cx="75" cy="28" r="5" fill="white"/>
        <circle cx="75" cy="28" r="3" fill="black"/>
        <path d="M 60 20 Q 65 15 70 20" fill="#ff8c42" stroke="#ff4500" strokeWidth="1.5"/>
      </svg>
      
      <svg className="goldfish goldfish-2" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="25" ry="15" fill="#ffa500" stroke="#ff8c00" strokeWidth="2"/>
        <polygon points="45,30 30,22 30,38" fill="#ffa500" stroke="#ff8c00" strokeWidth="2"/>
        <polygon points="90,30 100,26 100,34" fill="#ffb733" stroke="#ff8c00" strokeWidth="1"/>
        <circle cx="75" cy="28" r="5" fill="white"/>
        <circle cx="75" cy="28" r="3" fill="black"/>
        <path d="M 60 20 Q 65 15 70 20" fill="#ffb733" stroke="#ff8c00" strokeWidth="1.5"/>
      </svg>
      
      <svg className="goldfish goldfish-3" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="25" ry="15" fill="#ff7f50" stroke="#ff6347" strokeWidth="2"/>
        <polygon points="45,30 32,21 32,39" fill="#ff7f50" stroke="#ff6347" strokeWidth="2"/>
        <polygon points="90,30 98,25 98,35" fill="#ff9966" stroke="#ff6347" strokeWidth="1"/>
        <circle cx="75" cy="28" r="5" fill="white"/>
        <circle cx="75" cy="28" r="3" fill="black"/>
        <path d="M 60 20 Q 65 15 70 20" fill="#ff9966" stroke="#ff6347" strokeWidth="1.5"/>
      </svg>
      
      <svg className="goldfish goldfish-4" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="25" ry="15" fill="#ffb347" stroke="#ffa500" strokeWidth="2"/>
        <polygon points="45,30 30,23 30,37" fill="#ffb347" stroke="#ffa500" strokeWidth="2"/>
        <polygon points="90,30 100,27 100,33" fill="#ffc966" stroke="#ffa500" strokeWidth="1"/>
        <circle cx="75" cy="28" r="5" fill="white"/>
        <circle cx="75" cy="28" r="3" fill="black"/>
        <path d="M 60 20 Q 65 15 70 20" fill="#ffc966" stroke="#ffa500" strokeWidth="1.5"/>
      </svg>
      
      <svg className="goldfish goldfish-special" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="28" ry="18" fill="url(#goldGradient)" stroke="#ffd700" strokeWidth="2.5"/>
        <polygon points="42,30 25,20 25,40" fill="url(#goldGradient)" stroke="#ffd700" strokeWidth="2.5"/>
        <polygon points="92,30 105,24 105,36" fill="#ffed4e" stroke="#ffd700" strokeWidth="1.5"/>
        <circle cx="75" cy="28" r="6" fill="white"/>
        <circle cx="75" cy="28" r="4" fill="black"/>
        <circle cx="73" cy="26" r="1.5" fill="white"/>
        <path d="M 58 18 Q 65 12 72 18" fill="#ffed4e" stroke="#ffd700" strokeWidth="2"/>
        <path d="M 60 42 Q 65 47 70 42" fill="#ffed4e" stroke="#ffd700" strokeWidth="1.5"/>
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd700"/>
            <stop offset="50%" stopColor="#ffed4e"/>
            <stop offset="100%" stopColor="#ffd700"/>
          </linearGradient>
        </defs>
      </svg>
      
      {/* Additional fish */}
      <svg className="goldfish goldfish-5" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="25" ry="15" fill="#ff9966" stroke="#ff6600" strokeWidth="2"/>
        <polygon points="45,30 30,20 30,40" fill="#ff9966" stroke="#ff6600" strokeWidth="2"/>
        <polygon points="90,30 100,25 100,35" fill="#ffb380" stroke="#ff6600" strokeWidth="1"/>
        <circle cx="75" cy="28" r="5" fill="white"/>
        <circle cx="75" cy="28" r="3" fill="black"/>
        <path d="M 60 20 Q 65 15 70 20" fill="#ffb380" stroke="#ff6600" strokeWidth="1.5"/>
      </svg>
      
      <svg className="goldfish goldfish-6" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="25" ry="15" fill="#ffd966" stroke="#ffcc00" strokeWidth="2"/>
        <polygon points="45,30 30,22 30,38" fill="#ffd966" stroke="#ffcc00" strokeWidth="2"/>
        <polygon points="90,30 100,26 100,34" fill="#ffe680" stroke="#ffcc00" strokeWidth="1"/>
        <circle cx="75" cy="28" r="5" fill="white"/>
        <circle cx="75" cy="28" r="3" fill="black"/>
        <path d="M 60 20 Q 65 15 70 20" fill="#ffe680" stroke="#ffcc00" strokeWidth="1.5"/>
      </svg>
      
      <svg className="goldfish goldfish-7" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="25" ry="15" fill="#ff8c66" stroke="#ff6633" strokeWidth="2"/>
        <polygon points="45,30 32,21 32,39" fill="#ff8c66" stroke="#ff6633" strokeWidth="2"/>
        <polygon points="90,30 98,25 98,35" fill="#ffa380" stroke="#ff6633" strokeWidth="1"/>
        <circle cx="75" cy="28" r="5" fill="white"/>
        <circle cx="75" cy="28" r="3" fill="black"/>
        <path d="M 60 20 Q 65 15 70 20" fill="#ffa380" stroke="#ff6633" strokeWidth="1.5"/>
      </svg>
      
      <svg className="goldfish goldfish-8" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="25" ry="15" fill="#ffcc66" stroke="#ffb300" strokeWidth="2"/>
        <polygon points="45,30 30,23 30,37" fill="#ffcc66" stroke="#ffb300" strokeWidth="2"/>
        <polygon points="90,30 100,27 100,33" fill="#ffdd80" stroke="#ffb300" strokeWidth="1"/>
        <circle cx="75" cy="28" r="5" fill="white"/>
        <circle cx="75" cy="28" r="3" fill="black"/>
        <path d="M 60 20 Q 65 15 70 20" fill="#ffdd80" stroke="#ffb300" strokeWidth="1.5"/>
      </svg>
      
      {/* More fish for lower area */}
      <svg className="goldfish goldfish-9" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="23" ry="14" fill="#ff9955" stroke="#ff7733" strokeWidth="2"/>
        <polygon points="45,30 32,22 32,38" fill="#ff9955" stroke="#ff7733" strokeWidth="2"/>
        <polygon points="88,30 98,26 98,34" fill="#ffaa66" stroke="#ff7733" strokeWidth="1"/>
        <circle cx="75" cy="28" r="5" fill="white"/>
        <circle cx="75" cy="28" r="3" fill="black"/>
        <path d="M 60 20 Q 65 15 70 20" fill="#ffaa66" stroke="#ff7733" strokeWidth="1.5"/>
      </svg>
      
      <svg className="goldfish goldfish-10" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="24" ry="14" fill="#ffbb44" stroke="#ff9922" strokeWidth="2"/>
        <polygon points="45,30 31,21 31,39" fill="#ffbb44" stroke="#ff9922" strokeWidth="2"/>
        <polygon points="89,30 99,25 99,35" fill="#ffcc55" stroke="#ff9922" strokeWidth="1"/>
        <circle cx="75" cy="28" r="5" fill="white"/>
        <circle cx="75" cy="28" r="3" fill="black"/>
        <path d="M 60 20 Q 65 15 70 20" fill="#ffcc55" stroke="#ff9922" strokeWidth="1.5"/>
      </svg>
      
      <svg className="goldfish goldfish-11" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="22" ry="13" fill="#ff8855" stroke="#ff6633" strokeWidth="2"/>
        <polygon points="45,30 33,23 33,37" fill="#ff8855" stroke="#ff6633" strokeWidth="2"/>
        <polygon points="87,30 97,27 97,33" fill="#ff9966" stroke="#ff6633" strokeWidth="1"/>
        <circle cx="75" cy="28" r="5" fill="white"/>
        <circle cx="75" cy="28" r="3" fill="black"/>
        <path d="M 60 20 Q 65 15 70 20" fill="#ff9966" stroke="#ff6633" strokeWidth="1.5"/>
      </svg>
      
      <svg className="goldfish goldfish-12" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="65" cy="30" rx="26" ry="15" fill="#ffaa33" stroke="#ff8811" strokeWidth="2"/>
        <polygon points="45,30 29,20 29,40" fill="#ffaa33" stroke="#ff8811" strokeWidth="2"/>
        <polygon points="91,30 101,24 101,36" fill="#ffbb44" stroke="#ff8811" strokeWidth="1"/>
        <circle cx="75" cy="28" r="5" fill="white"/>
        <circle cx="75" cy="28" r="3" fill="black"/>
        <path d="M 60 20 Q 65 15 70 20" fill="#ffbb44" stroke="#ff8811" strokeWidth="1.5"/>
      </svg>
      
      {/* Bubbles - lots more! */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      <div className="bubble bubble-5"></div>
      <div className="bubble bubble-6"></div>
      <div className="bubble bubble-7"></div>
      <div className="bubble bubble-8"></div>
      <div className="bubble bubble-9"></div>
      <div className="bubble bubble-10"></div>
      <div className="bubble bubble-11"></div>
      <div className="bubble bubble-12"></div>
      
      {/* Seaweed - more algae! */}
      <div className="css-seaweed seaweed-1"></div>
      <div className="css-seaweed seaweed-2"></div>
      <div className="css-seaweed seaweed-3"></div>
      <div className="css-seaweed seaweed-4"></div>
      <div className="css-seaweed seaweed-5"></div>
      <div className="css-seaweed seaweed-6"></div>
      <div className="css-seaweed seaweed-7"></div>
      
      <div className="power-content">
        <div className="intro-text">
          <h1 className="goldfish-title">LAGOLDFISH GAME</h1>
          <p className="intro-message">
            30 years of pure eleganza! We wanted to create something as unique and fabulous as you are to reveal your gift. 
            <br /><br />
            Because honey, you bring the charisma, uniqueness, nerve, and talent every single day. 
            <br /><br />
            But first, you'll need to complete a little challenge to unlock your prize!
          </p>
        </div>
        
        <button className="aquarium-button" onClick={onPowerOn}>
          <span className="aqua-text">▶ PRESS START ◀</span>
          <span className="bubble-decoration bubble-btn-1"></span>
          <span className="bubble-decoration bubble-btn-2"></span>
          <span className="bubble-decoration bubble-btn-3"></span>
        </button>
        
        <p className="hint-text">Can I get an amen? Now sashay this way...</p>
      </div>
    </div>
  );
};

export default PowerOffScreen;