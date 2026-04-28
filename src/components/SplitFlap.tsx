import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

interface SplitFlapProps {
  lines: string[];
}

const CHARS = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

const SplitFlap: React.FC<SplitFlapProps> = ({ lines }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      {lines.map((line, lineIndex) => {
        const characters = line.toUpperCase().split("");
        return (
          <div key={`${lineIndex}-${line}`} className="flex flex-wrap gap-1 md:gap-1.5">
            {characters.map((char, charIndex) => (
              <FlapSlot 
                key={`${lineIndex}-${charIndex}`} 
                targetChar={char} 
                delay={(lineIndex * 10 + charIndex) * 0.015} 
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

interface FlapSlotProps {
  targetChar: string;
  delay: number;
}

const FlapSlot: React.FC<FlapSlotProps> = ({ targetChar, delay }) => {
  const targetIndex = useMemo(() => CHARS.indexOf(targetChar), [targetChar]);
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayIndex(targetIndex);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [targetIndex, delay]);

  return (
    <div className="relative w-[5.5vw] h-[8vw] md:w-[3.5vw] md:h-[5vw] bg-[#161616] border border-white/5 rounded-[2px] overflow-hidden flex items-center justify-center shadow-inner">
      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/60 z-20" />
      
      <motion.div
        animate={{ y: `-${displayIndex * 100}%` }}
        transition={{ 
          type: "spring", 
          stiffness: 120, 
          damping: 20,
          mass: 0.8
        }}
        className="flex flex-col items-center"
        style={{ height: '100%' }}
      >
        {CHARS.map((char, i) => (
          <div 
            key={i} 
            className="h-full flex items-center justify-center shrink-0"
            style={{ height: '100%', minHeight: '100%' }}
          >
            <span className={`font-display font-bold text-[4.5vw] md:text-[3vw] text-white/90 leading-none ${char === " " ? "opacity-0" : "opacity-100"}`}>
              {char}
            </span>
          </div>
        ))}
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none z-10" />
      <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] pointer-events-none" />
    </div>
  );
};

export default SplitFlap;
