import { useEffect, useState } from "react";

type BreathPhase = "inhale" | "hold" | "exhale";

interface BreathingTextProps {
  phase: BreathPhase;
  counter: number;
  currentCycle: number;
}

export const BreathingText = ({ phase, counter, currentCycle }: BreathingTextProps) => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fade out before changing text
    setIsVisible(false);
    
    const timer = setTimeout(() => {
      if (phase === "inhale") {
        if (counter >= 3) {
          setText("Breathe in");
        } else {
          setText("A little more");
        }
      } else if (phase === "hold") {
        setText("Hold");
      } else if (phase === "exhale") {
        setText("Now, exhale");
      }
      
      // Fade in with new text
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, [phase, counter]);

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Counter */}
      <div 
        className={`font-cormorant text-4xl mb-4 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {counter}
      </div>
      
      {/* Main text */}
      <div 
        className={`font-cormorant text-[30px] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </div>
      
      {/* Cycle counter */}
      <div className="font-cormorant text-[10px] text-muted-foreground mt-8 opacity-60">
        Cycle {currentCycle} of 4
      </div>
    </div>
  );
};
