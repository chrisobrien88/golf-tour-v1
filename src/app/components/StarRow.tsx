import { Star } from './Star';

interface StarRowProps {
  starCount?: number;
  starColor?: string;
  className?: string;
}

export function StarRow({ 
  starCount = 5, 
  starColor = '#f1c40f',
  className = '' 
}: StarRowProps) {
  return (
    <div className={`mb-3 flex w-full items-center justify-between gap-2 ${className}`}>
      <div className="flex gap-2">
        {Array.from({ length: starCount }).map((_, i) => (
          <Star 
            key={`l-${i}`} 
            className="h-5 w-5 sm:h-6 sm:w-6" 
            style={{ fill: starColor }} 
          />
        ))}
      </div>
      <div className="flex gap-2">
        {Array.from({ length: starCount }).map((_, i) => (
          <Star 
            key={`r-${i}`} 
            className="h-5 w-5 sm:h-6 sm:w-6" 
            style={{ fill: starColor }} 
          />
        ))}
      </div>
    </div>
  );
}