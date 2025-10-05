'use client';

import { BackgroundImage } from './BackgroundImage';
import { PlayerSilhouettes } from './PlayerSilhouettes';
import { ColorOverlay } from './ColorOverlay';
import { StarRow } from './StarRow';
import { TournamentBadge } from './TournamentBadge';
import { TeamRoster } from './TeamRoster';
import { ComingSoonBanner } from './ComingSoonBanner';

const GOLD = '#f1c40f';

const teamData = [
  {
    name: 'USA',
    alignment: 'left' as const,
    players: ['Harris (c)', 'Cottenden', 'Cracknell', 'Gravestock', 'Griggs', 'Leech', 'Mackay', 'Sedcole']
  },
  {
    name: 'EUROPE', 
    alignment: 'right' as const,
    players: ['Strickland (c)', 'Adams Jnr', 'Adams Snr', 'Allen', 'Farkas', 'Lee', 'O\'Brien', 'Wright']
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden text-white">
      {/* Background */}
      <BackgroundImage 
        src="/vilamoura-sunset.jpg"
        alt="Vilamoura golf course at sunset"
        brightness={1.15}
        contrast={1.05}
      />

      {/* Player silhouettes */}
      <PlayerSilhouettes 
        leftPlayer={{
          src: "/usaPlayers/player-chopper.png",
          alt: "USA player",
          maskGradient: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0) 95%)'
        }}
        rightPlayer={{
          src: "/player-stricko.png", 
          alt: "Europe player",
          maskGradient: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0.09) 75%, rgba(0, 0, 0, 0) 100%)'
        }}
        opacity={0.75}
      />

      {/* Color overlays */}
      <ColorOverlay />

      {/* Main content */}
      <div className="relative z-30 mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center px-4">
        {/* Top spacer */}
        <div className="shrink-0 pt-8 sm:pt-10 md:pt-12" />

        {/* Stars */}
        <StarRow starColor={GOLD} />

        {/* Tournament badge with countdown */}
        <TournamentBadge 
          src="/tour-badge.png"
          alt="Vilamoura 2026 badge"
          textColor={GOLD}
        />

        {/* Team rosters */}
        <TeamRoster teams={teamData} textColor={GOLD} />

        {/* Bottom spacer */}
        <div className="h-24 sm:h-32" />
      </div>

      {/* Coming Soon Banner */}
      <ComingSoonBanner />
    </section>
  );
}
