import { useEffect, useState } from "react";

type BreathPhase = "inhale" | "hold" | "exhale";

interface BreathingAuraProps {
  phase: BreathPhase;
  counter: number;
}

export const BreathingAura = ({ phase, counter }: BreathingAuraProps) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Smooth scale transitions based on phase
    switch (phase) {
      case "inhale":
        setScale(2.5); // Large expansion
        break;
      case "hold":
        setScale(2.5); // Stay expanded
        break;
      case "exhale":
        setScale(1); // Contract to small
        break;
    }
  }, [phase]);

  // Transition durations based on phase
  const transitionDuration = 
    phase === "inhale" ? "6s" : // Slower inhale animation
    phase === "hold" ? "0.5s" : 
    "8s";

  return (
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="relative w-32 h-32"
        style={{
          transform: `scale(${scale})`,
          transition: `transform ${transitionDuration} cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      >
        {/* Innermost core - brightest */}
        <div className="absolute inset-0 rounded-full bg-aura-core opacity-95 blur-xl" />
        
        {/* Core glow layer */}
        <div className="absolute inset-0 rounded-full bg-aura-core opacity-80 blur-2xl scale-105" />
        
        {/* Middle transition layer */}
        <div className="absolute inset-0 rounded-full bg-aura-glow opacity-70 blur-3xl scale-115" />
        
        {/* Outer glow layer */}
        <div className="absolute inset-0 rounded-full bg-primary opacity-50 blur-[60px] scale-125" />
        
        {/* Outermost soft diffusion */}
        <div className="absolute inset-0 rounded-full bg-primary opacity-25 blur-[100px] scale-150" />
      </div>
    </div>
  );
};
