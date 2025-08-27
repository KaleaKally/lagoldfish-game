import './MemphisPartyScreen.css';
import './WordArt.css';

interface MemphisPartyScreenProps {
  onStart: () => void;
  birthdayName: string;
}

const MemphisPartyScreen = ({ onStart, birthdayName }: MemphisPartyScreenProps) => {
  return (
    <div className="start-screen-90s">
      <div className="memphis-bg"></div>
      <div className="zigzag-pattern"></div>
      
      <div className="nineties-items">
        {/* Memphis-style arranged icons */}
        <img 
          src="/90s-vibe/stereo.png" 
          alt="Stereo" 
          className="memphis-icon rotate-slow"
          style={{ top: '12%', left: '8%' }}
        />
        
        <img 
          src="/90s-vibe/stella.png" 
          alt="Star" 
          className="memphis-icon-small pulse"
          style={{ top: '8%', right: '25%' }}
        />
        
        <img 
          src="/90s-vibe/pattino.png" 
          alt="Rollerblade" 
          className="memphis-icon wiggle"
          style={{ top: '35%', right: '5%' }}
        />
        
        <img 
          src="/90s-vibe/cassette.png" 
          alt="Cassette" 
          className="memphis-icon bounce-gentle"
          style={{ bottom: '20%', right: '10%' }}
        />
        
        <img 
          src="/90s-vibe/leccalecca.png" 
          alt="Lollipop" 
          className="memphis-icon rotate-slow"
          style={{ bottom: '10%', left: '20%' }}
        />
        
        <img 
          src="/90s-vibe/floppydisk.png" 
          alt="Floppy Disk" 
          className="memphis-icon wiggle"
          style={{ top: '45%', left: '3%' }}
        />
        
        <img 
          src="/90s-vibe/saetta.png" 
          alt="Lightning" 
          className="memphis-icon-small pulse"
          style={{ bottom: '35%', left: '12%' }}
        />
        
        <img 
          src="/90s-vibe/stella.png" 
          alt="Star" 
          className="memphis-icon-small pulse"
          style={{ top: '25%', left: '18%' }}
        />
        
        {/* Add more icons on the right side for balance */}
        <img 
          src="/90s-vibe/stereo.png" 
          alt="Stereo" 
          className="memphis-icon wiggle"
          style={{ top: '55%', right: '15%' }}
        />
        
        <img 
          src="/90s-vibe/leccalecca.png" 
          alt="Lollipop" 
          className="memphis-icon-small bounce-gentle"
          style={{ top: '18%', right: '12%' }}
        />
        
        <img 
          src="/90s-vibe/cassette.png" 
          alt="Cassette" 
          className="memphis-icon rotate-slow"
          style={{ bottom: '40%', right: '25%' }}
        />
        
        <img 
          src="/90s-vibe/floppydisk.png" 
          alt="Floppy" 
          className="memphis-icon-small pulse"
          style={{ top: '75%', right: '8%' }}
        />
        
        <img 
          src="/90s-vibe/saetta.png" 
          alt="Lightning" 
          className="memphis-icon-small wiggle"
          style={{ bottom: '15%', right: '35%' }}
        />
        
        {/* Memphis geometric shapes */}
        <div className="memphis-triangle" style={{ top: '60%', right: '30%' }}></div>
        <div className="memphis-circle" style={{ top: '15%', left: '45%' }}></div>
        <div className="memphis-square" style={{ bottom: '25%', left: '40%' }}></div>
        <div className="memphis-zigzag" style={{ top: '70%', left: '60%' }}></div>
      </div>
      
      <div className="memphis-content-wrapper">
        <div className="title-container-90s">
          <h1 className="title-90s">Happy Birthday<br/>{birthdayName}</h1>
        </div>
        
        <p className="subtitle-90s">★ From Gabree, Gloria, Fra, Chiara e Illy ★</p>
        
        <button className="win95-start-button" onClick={onStart}>
          <span className="win95-flag-small">
            <span className="flag-square-small flag-red"></span>
            <span className="flag-square-small flag-green"></span>
            <span className="flag-square-small flag-blue"></span>
            <span className="flag-square-small flag-yellow"></span>
          </span>
          <span className="wordart-wave button-wordart-text">Start Windows 95</span>
        </button>
      </div>
    </div>
  );
};

export default MemphisPartyScreen;