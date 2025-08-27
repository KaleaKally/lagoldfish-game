import './NinetiesIcons.css';

export const VHSTape = () => <div className="vhs-tape" />;
export const FloppyDisk = () => <div className="floppy-disk" />;
export const CDDisc = () => <div className="cd-disc" />;
export const GameController = () => <div className="game-controller" />;
export const Boombox = () => <div className="boombox" />;
export const CRTTV = () => <div className="crt-tv" />;
export const Cassette = () => <div className="cassette" />;
export const Tamagotchi = () => <div className="tamagotchi" />;

interface IconWrapperProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const IconWrapper = ({ children, style, className = '' }: IconWrapperProps) => {
  return (
    <div 
      className={`nineties-icon-wrapper ${className}`}
      style={{
        position: 'absolute',
        animation: 'gentle-float 6s ease-in-out infinite',
        ...style
      }}
    >
      {children}
    </div>
  );
};