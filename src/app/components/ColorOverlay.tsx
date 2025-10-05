interface ColorOverlayProps {
  redColor?: string;
  blueColor?: string;
  redOpacity?: number;
  blueOpacity?: number;
  darkenOpacity?: number;
}

export function ColorOverlay({ 
  redColor = 'rgba(215, 45, 73, 0.92)',
  blueColor = 'rgba(4, 72, 208, 0.92)',
  redOpacity = 0.75,
  blueOpacity = 0.75,
  darkenOpacity = 0.28
}: ColorOverlayProps) {
  return (
    <>
      {/* Red-to-Blue gradient overlay */}
      <div
        className="absolute inset-0 z-20 mix-blend-multiply"
        style={{
          background: `linear-gradient(to right,
            ${redColor} 0%,
            ${redColor.replace(/[\d\.]+\)$/, `${redOpacity})`)} 25%,
            ${blueColor.replace(/[\d\.]+\)$/, `${blueOpacity})`)} 75%,
            ${blueColor} 100%)`
        }}
      />
      
      {/* Subtle darken overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-20" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${darkenOpacity})` }}
      />
    </>
  );
}