interface ComingSoonBannerProps {
  message?: string;
  fontSize?: string;
  angle?: number;
  bannerColor?: string;
  textColor?: string;
  overlayOpacity?: number;
  overlayColor?: string;
}

export function ComingSoonBanner({
  message = "coming soon",
  fontSize = "16px",
  angle = -30, // Negative angle for upward left-to-right
  bannerColor = "white",
  textColor = "black",
  overlayOpacity = 0.2,
  overlayColor = "gray"
}: ComingSoonBannerProps) {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Semi-transparent overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: overlayColor,
          opacity: overlayOpacity
        }}
      />
      
      {/* Angled banner extending beyond screen edges */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          transform: `rotate(${angle}deg)`,
          transformOrigin: "center center",
          left: "-50%",
          right: "-50%", 
          top: "50%",
          width: "200vw", // Much wider to extend past screen edges
          height: "80px", // Fixed height for the banner
          marginTop: "-40px", // Center vertically
          opacity: 0.9
        }}
      >
        <div
          className="px-8 py-4 shadow-lg w-full"
          style={{
            backgroundColor: bannerColor,
            color: textColor,
            fontSize: fontSize,
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {message}
        </div>
      </div>
    </div>
  );
}