import { useEffect, useState } from "react";

type BreathPhase = "inhale" | "hold" | "exhale";

interface BreathingTextProps {
  phase: BreathPhase;
  counter: number;
  currentCycle: number;
}

export const BreathingText = ({ phase, counter, currentCycle }: BreathingTextProps) => {
  const [text, setText] = useState("");
  const [isExhale, setIsExhale] = useState(false);

  useEffect(() => {
    setIsExhale(phase === "exhale");
    
    if (phase === "inhale") {
      if (counter <= 2) {
        setText("Breathe in");
      } else {
        setText("A little more");
      }
    } else if (phase === "hold") {
      setText("Hold");
    } else if (phase === "exhale") {
      setText("Now, exhale");
    }
  }, [phase, counter]);

  return (
    <div className="flex flex-col items-center gap-2 animate-fade-in">
      {/* Counter */}
      <div className="font-jakarta font-light text-foreground text-4xl mb-4">
        {counter}
      </div>
      
      {/* Main text */}
      <div 
        className={`${
          isExhale 
            ? "font-cormorant text-[30px]" 
            : "font-jakarta font-light text-2xl"
        } text-foreground transition-all duration-300`}
      >
        {text}
      </div>
      
      {/* Cycle counter */}
      <div className="font-jakarta text-[10px] text-muted-foreground mt-8 opacity-60">
        Cycle {currentCycle} of 4
      </div>
    </div>
  );
};
