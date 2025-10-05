interface Team {
  name: string;
  players: string[];
  alignment: 'left' | 'right';
}

interface TeamRosterProps {
  teams: Team[];
  textColor?: string;
  className?: string;
}

export function TeamRoster({ 
  teams, 
  textColor = '#f1c40f',
  className = '' 
}: TeamRosterProps) {
  return (
    <div className={`mt-8 grid w-full grid-cols-2 gap-6 max-[360px]:grid-cols-1 sm:gap-8 ${className}`}>
      {teams.map((team) => (
        <div 
          key={team.name}
          className={`text-center ${team.alignment === 'left' ? 'md:text-left' : 'md:text-right'}`}
        >
          <h2 
            className="text-1xl sm:text-3xl font-semibold tracking-wide drop-shadow" 
            style={{ color: textColor }}
          >
            {team.name}
          </h2>
          <ul 
            className="mt-3 space-y-2 text-sm sm:text-base leading-6 drop-shadow" 
            style={{ color: textColor }}
          >
            {team.players.map(player => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}