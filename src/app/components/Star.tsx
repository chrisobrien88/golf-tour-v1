// app/components/Star.tsx
import { CSSProperties } from 'react';

export function Star({ 
  className = '', 
  style 
}: { 
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      style={style}
      role="img"
      focusable="false"
    >
      <path d="M12 2l2.9 6.6 7.1.6-5.3 4.6 1.6 7-6.3-3.7-6.3 3.7 1.6-7L2 9.2l7.1-.6L12 2z" />
    </svg>
  );
}
