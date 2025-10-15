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
    phase === "inhale" ? "4s" : 
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
        {/* Core glow */}
        <div className="absolute inset-0 rounded-full bg-aura-core opacity-90 blur-2xl" />
        
        {/* Middle layer */}
        <div className="absolute inset-0 rounded-full bg-aura-glow opacity-60 blur-3xl scale-110" />
        
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-primary opacity-30 blur-[80px] scale-125" />
      </div>
    </div>
  );
};
