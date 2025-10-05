import Image from 'next/image';

interface PlayerData {
  src: string;
  alt: string;
  maskGradient?: string;
}

interface PlayerSilhouettesProps {
  leftPlayer: PlayerData;
  rightPlayer: PlayerData;
  opacity?: number;
  animationDelay?: number;
  animationDuration?: number;
}

export function PlayerSilhouettes({ 
  leftPlayer, 
  rightPlayer, 
  opacity = 0.75,
  animationDelay = 0.5,
  animationDuration = 1.5
}: PlayerSilhouettesProps) {
  const defaultMask = 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0) 95%)';
  
  return (
    <div
      className="pointer-events-none absolute top-[30px] left-1/2 z-10 flex -translate-x-1/2 items-end justify-center"
      style={{
        width: '120vw',
        opacity,
      }}
    >
      {/* Left player - slides in from left */}
      <div
        className="relative animate-slide-in-left"
        style={{
          width: 'clamp(46vw, 50vw, 60vw)',
          maxWidth: '520px',
          marginRight: 'clamp(-120px, -8vw, 20px)',
          animationDelay: `${animationDelay}s`,
          animationDuration: `${animationDuration}s`,
          animationFillMode: 'both'
        }}
      >
        <Image
          src={leftPlayer.src}
          alt={leftPlayer.alt}
          width={520}
          height={1040}
          sizes="(max-width: 768px) 60vw, 35vw"
          className="w-full h-auto object-contain grayscale contrast-150"
          style={{
            height: 'clamp(60vh, 75vh, 95vh)',
            maxHeight: 'calc(100vh - 40px)',
            WebkitMaskImage: leftPlayer.maskGradient || defaultMask,
            maskImage: leftPlayer.maskGradient || defaultMask,
          }}
          priority={false}
        />
      </div>

      {/* Right player - slides in from right */}
      <div
        className="relative animate-slide-in-right"
        style={{
          width: 'clamp(46vw, 50vw, 60vw)',
          maxWidth: '520px',
          marginLeft: 'clamp(-120px, -8vw, 20px)',
          animationDelay: `${animationDelay + 0.3}s`, // Slightly delayed from left player
          animationDuration: `${animationDuration}s`,
          animationFillMode: 'both'
        }}
      >
        <Image
          src={rightPlayer.src}
          alt={rightPlayer.alt}
          width={520}
          height={1040}
          sizes="(max-width: 768px) 60vw, 35vw"
          className="w-full h-auto object-contain grayscale contrast-150"
          style={{
            height: 'clamp(60vh, 75vh, 95vh)',
            maxHeight: 'calc(100vh - 40px)',
            WebkitMaskImage: rightPlayer.maskGradient || defaultMask,
            maskImage: rightPlayer.maskGradient || defaultMask,
          }}
          priority={false}
        />
      </div>
    </div>
  );
}