'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Countdown from './Countdown';
import { Star } from './Star';

const GOLD = '#f1c40f';

const usa = [
  'Harris (c)', 'Cottenden', 'Cracknell', 'Gravestock',
  'Griggs', 'Leech', 'Mackay', 'Sedcole'
];
const eur = [
  'Strickland (c)', 'Adams Jnr', 'Adams Snr', 'Allen',
  'Farkas', 'Lee', 'O’Brien', 'Wright'
];

export default function Hero() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) setPaused(true);
  }, []);

  return (
    // SCROLLABLE: no overflow-hidden; allow section to exceed viewport
    <section   className="relative min-h-screen w-full overflow-x-hidden text-white">
      {/* Background image fills section height (which can grow) */}
      <Image
        src="/vilamoura-sunset.jpg"
        alt="Vilamoura golf course at sunset"
        fill
        priority
        sizes="100vw"
        style={{ 
          objectFit: 'cover', 
          objectPosition: '50% 50%',
          filter: 'brightness(1.15) contrast(1.05)'
        }}
      />

      {/* PLAYERS (overlap allowed, grayscale, your fade, under overlays) */}
{/* PLAYERS (overlap allowed, centered correctly, grayscale + your fade) */}
<div
  className="pointer-events-none absolute top-[30px] left-1/2 z-10 flex -translate-x-1/2 items-end justify-center"
  style={{
    width: '120vw',                 // can be > 100vw, stays perfectly centered
    opacity: 0.75,
  }}
>
  {/* Left player (shift right to overlap) */}
  <div
    className="relative"
    style={{
      width: 'clamp(46vw, 50vw, 60vw)',
      maxWidth: '520px',
      marginRight: 'clamp(-120px, -8vw, 20px)', // negative margin creates overlap on narrow screens
    }}
  >
    <Image
      src="/usaPlayers/player-chopper.png"
      alt="USA player"
      width={520}
      height={1040}
      sizes="(max-width: 768px) 60vw, 35vw"
      className="w-full h-auto object-contain grayscale contrast-150"
      style={{
        height: 'clamp(60vh, 75vh, 95vh)',
        maxHeight: 'calc(100vh - 40px)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0) 95%)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0) 95%)',
      }}
      priority={false}
    />
  </div>

  {/* Right player (shift left to overlap) */}
  <div
    className="relative"
    style={{
      width: 'clamp(46vw, 50vw, 60vw)',
      maxWidth: '520px',
      marginLeft: 'clamp(-120px, -8vw, 20px)', // negative margin creates overlap on narrow screens
    }}
  >
    <Image
      src="/player-stricko.png"
      alt="Europe player"
      width={520}
      height={1040}
      sizes="(max-width: 768px) 60vw, 35vw"
      className="w-full h-auto object-contain grayscale contrast-150"
      style={{
        height: 'clamp(60vh, 75vh, 95vh)',
        maxHeight: 'calc(100vh - 40px)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.14) 75%, rgba(0, 0, 0, 0) 85%)',
        maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.09) 75%, rgba(0, 0, 0, 0) 100%)',
      }}
      priority={false}
    />
  </div>
</div>



      {/* STRONGER RED→BLUE overlay ABOVE players.
         Heavier ends with a narrower transparent center. */}
      <div
        className="absolute inset-0 z-20 mix-blend-multiply"
        style={{
          background:
            'linear-gradient(to right,' +
            'rgba(215, 45, 73, 0.92) 0%,' +         // stronger red
            'rgba(198, 61, 84, 0.75) 25%,' +        // extend red coverage
            'rgba(13, 71, 188, 0.75) 75%,' +         // extend blue coverage
            'rgba(4, 72, 208, 0.92) 100%)',         // stronger blue
        }}
      />
      {/* Subtle darken to help text/readability */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-black/28" />

      {/* CONTENT above overlays */}
      <div className="relative z-30 mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center px-4">
        {/* spacer to keep badge off the very top */}
        <div className="shrink-0 pt-8 sm:pt-10 md:pt-12" />

        {/* Stars row */}
        <div className="mb-3 flex w-full items-center justify-between gap-2">
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={`l-${i}`} className="h-5 w-5 sm:h-6 sm:w-6" style={{ fill: GOLD }} />
            ))}
          </div>
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={`r-${i}`} className="h-5 w-5 sm:h-6 sm:w-6" style={{ fill: GOLD }} />
            ))}
          </div>
        </div>

        <div className="relative drop-shadow-lg">
          <div className="mx-auto w-[40vw] max-w-[240px] md:w-[340px]">
            <Image
              src="/tour-badge.png"
              alt="Vilamoura 2026 badge"
              width={440}
              height={440}
              priority
              className="block w-full"
                style={{ opacity: 0.85 }}
            />
          </div>
          
        </div>
        <div className="mt-2" style={{ color: GOLD, textAlign: 'center', fontSize: '1.25rem', fontWeight: '600', textShadow: '0 0 5px rgba(0,0,0,0.7)' }}>
            <Countdown />
        </div>

        {/* Teams: 2 columns on mobile; collapse only when ultra narrow */}
        <div className="mt-8 grid w-full grid-cols-2 gap-6 max-[360px]:grid-cols-1 sm:gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-1xl sm:text-3xl font-semibold tracking-wide drop-shadow" style={{ color: GOLD }}>
              USA
            </h2>
            <ul className="mt-3 space-y-2 text-sm sm:text-base leading-6 drop-shadow" style={{ color: GOLD }}>
              {usa.map(n => <li key={n}>{n}</li>)}
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h2 className="text-1xl sm:text-3xl font-semibold tracking-wide drop-shadow" style={{ color: GOLD }}>
              EUROPE
            </h2>
            <ul className="mt-3 space-y-2 text-sm sm:text-base leading-6 drop-shadow" style={{ color: GOLD }}>
              {eur.map(n => <li key={n}>{n}</li>)}
            </ul>
          </div>
        </div>

        {/* Bottom spacer ensures page has scroll room so badge can disappear */}
        <div className="h-24 sm:h-32" />
      </div>

    </section>
  );
}
