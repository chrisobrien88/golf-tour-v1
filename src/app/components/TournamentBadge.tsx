import Image from 'next/image';
import Countdown from './Countdown';

interface TournamentBadgeProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  opacity?: number;
  textColor?: string;
  className?: string;
}

export function TournamentBadge({ 
  src,
  alt,
  width = 440,
  height = 440,
  opacity = 0.85,
  textColor = '#f1c40f',
  className = ''
}: TournamentBadgeProps) {
  return (
    <div className={`relative drop-shadow-lg ${className}`}>
      <div className="mx-auto w-[40vw] max-w-[240px] md:w-[340px]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          className="block w-full"
          style={{ opacity }}
        />
      </div>
      
      <div 
        className="mt-2" 
        style={{ 
          color: textColor, 
          textAlign: 'center', 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          textShadow: '0 0 5px rgba(0,0,0,0.7)' 
        }}
      >
        <Countdown />
      </div>
    </div>
  );
}