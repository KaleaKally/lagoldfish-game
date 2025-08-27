import { useState } from 'react';
import './Windows95Desktop.css';

interface DesktopProps {
  onOpenArcade: () => void;
}

const Windows95Desktop = ({ onOpenArcade }: DesktopProps) => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime] = useState(new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit' 
  }));

  const handleDesktopClick = () => {
    setShowStartMenu(false);
  };

  const handleArcadeClick = () => {
    onOpenArcade();
  };

  return (
    <div className="desktop" onClick={handleDesktopClick}>
      {/* Desktop Icons */}
      <div className="desktop-icons">
        <div className="desktop-icon" onDoubleClick={handleArcadeClick}>
          <div className="icon-image arcade-icon">🕹️</div>
          <div className="icon-label">Birthday Arcade</div>
        </div>
        
        <div className="desktop-icon">
          <div className="icon-image">💾</div>
          <div className="icon-label">My Computer</div>
        </div>
        
        <div className="desktop-icon">
          <div className="icon-image">🗑️</div>
          <div className="icon-label">Recycle Bin</div>
        </div>
        
        <div className="desktop-icon">
          <div className="icon-image">🌐</div>
          <div className="icon-label">Internet Explorer</div>
        </div>
      </div>

      {/* Taskbar */}
      <div className="taskbar">
        <button 
          className="start-button"
          onClick={(e) => {
            e.stopPropagation();
            setShowStartMenu(!showStartMenu);
          }}
        >
          <span className="start-icon">⊞</span>
          <span>Start</span>
        </button>
        
        <div className="taskbar-tasks">
          {/* Active tasks would go here */}
        </div>
        
        <div className="system-tray">
          <span className="tray-time">{currentTime}</span>
        </div>
      </div>

      {/* Start Menu */}
      {showStartMenu && (
        <div className="start-menu" onClick={(e) => e.stopPropagation()}>
          <div className="start-menu-header">
            <span>Windows</span> 95
          </div>
          <div className="start-menu-items">
            <div className="menu-item" onClick={handleArcadeClick}>
              <span className="menu-icon">🕹️</span>
              <span>Birthday Arcade</span>
            </div>
            <div className="menu-item">
              <span className="menu-icon">📝</span>
              <span>Programs</span>
            </div>
            <div className="menu-item">
              <span className="menu-icon">📁</span>
              <span>Documents</span>
            </div>
            <div className="menu-item">
              <span className="menu-icon">⚙️</span>
              <span>Settings</span>
            </div>
            <div className="menu-separator"></div>
            <div className="menu-item">
              <span className="menu-icon">🔌</span>
              <span>Shut Down...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Windows95Desktop;