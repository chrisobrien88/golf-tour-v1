'use client';
import { useEffect, useState } from 'react';

const TARGET = new Date('2026-09-17T14:00:00Z').getTime(); // 2pm Sept 17, 2026 UTC
const beforeCountdownMessage = ["1st tee nerves in", "Crackers' next round of golf in", "\"Euuurrrrooooooppppeee\" in", "Bagels are coming in"];

export default function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // Message rotation effect
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % beforeCountdownMessage.length);
        setIsTransitioning(false);
      }, 250); // Half the transition duration
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(messageInterval);
  }, []);

  // Render a stable, invisible placeholder during SSR to avoid mismatches
  if (now === null) {
    return (
      <div className="mt-3 text-sm opacity-0" aria-hidden>
        0d 0h 0m 0s
      </div>
    );
  }

  const diff = Math.max(0, TARGET - now);
  const s = Math.floor(diff / 1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;

  return (
    <div className="mt-3 text-sm">
      {/* Message carousel container */}
      <div className="relative overflow-hidden h-6 mb-2 w-64 mx-auto">
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
            isTransitioning 
              ? 'transform translate-x-full opacity-0' 
              : 'transform translate-x-0 opacity-100'
          }`}
        >
          <span className="text-center whitespace-nowrap text-xs italic">
            {beforeCountdownMessage[currentMessageIndex]}
          </span>
        </div>
        
        {/* Incoming message */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
            isTransitioning 
              ? 'transform translate-x-0 opacity-100' 
              : 'transform -translate-x-full opacity-0'
          }`}
        >
          <span className="text-center whitespace-nowrap text-xs italic">
            {beforeCountdownMessage[(currentMessageIndex + 1) % beforeCountdownMessage.length]}
          </span>
        </div>
      </div>

      {/* Countdown */}
      <span aria-live="polite" suppressHydrationWarning className="block text-center">
        {days}d {hours}h {mins}m {secs}s
      </span>
    </div>
  );
}
