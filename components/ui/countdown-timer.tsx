"use client";

import { useEffect, useState } from 'react';
import type { CountdownTimer } from '@/types';

interface CountdownProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<CountdownTimer>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 md:gap-4 justify-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl px-6 py-4 md:min-w-[100px] text-white border glass-card border-primary/20">
            <div className="text-lg md:text-6xl font-bold">{String(value).padStart(2, '0')}</div>
          
          </div>
          <div className="text-sm md:text-lg text-white uppercase mt-1">{key}</div>
        </div>
      ))}
    </div>
  );
}