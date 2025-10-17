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
        {/* Layer 1 - Innermost core */}
        <div className="absolute inset-0 rounded-full bg-aura-core opacity-95 blur-lg" />
        
        {/* Layer 2 */}
        <div className="absolute inset-0 rounded-full bg-aura-core opacity-90 blur-xl scale-[1.05]" />
        
        {/* Layer 3 */}
        <div className="absolute inset-0 rounded-full bg-aura-core opacity-85 blur-2xl scale-[1.1]" />
        
        {/* Layer 4 */}
        <div className="absolute inset-0 rounded-full bg-aura-glow opacity-75 blur-[40px] scale-[1.15]" />
        
        {/* Layer 5 */}
        <div className="absolute inset-0 rounded-full bg-aura-glow opacity-65 blur-[50px] scale-[1.2]" />
        
        {/* Layer 6 */}
        <div className="absolute inset-0 rounded-full bg-primary opacity-55 blur-[60px] scale-[1.25]" />
        
        {/* Layer 7 */}
        <div className="absolute inset-0 rounded-full bg-primary opacity-45 blur-[70px] scale-[1.3]" />
        
        {/* Layer 8 */}
        <div className="absolute inset-0 rounded-full bg-primary opacity-35 blur-[80px] scale-[1.35]" />
        
        {/* Layer 9 */}
        <div className="absolute inset-0 rounded-full bg-primary opacity-25 blur-[90px] scale-[1.4]" />
        
        {/* Layer 10 - Outermost soft diffusion */}
        <div className="absolute inset-0 rounded-full bg-primary opacity-15 blur-[100px] scale-[1.5]" />
      </div>
    </div>
  );
};
