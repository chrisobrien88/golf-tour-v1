import Image from 'next/image';

interface BackgroundImageProps {
  src: string;
  alt: string;
  brightness?: number;
  contrast?: number;
}

export function BackgroundImage({ 
  src, 
  alt, 
  brightness = 1.15, 
  contrast = 1.05 
}: BackgroundImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="100vw"
      style={{ 
        objectFit: 'cover', 
        objectPosition: '50% 50%',
        filter: `brightness(${brightness}) contrast(${contrast})`
      }}
    />
  );
}