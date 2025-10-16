import { useEffect, useState } from "react";

type BreathPhase = "inhale" | "hold" | "exhale";

interface BreathingTextProps {
  phase: BreathPhase;
  counter: number;
  currentCycle: number;
}

export const BreathingText = ({ phase, counter, currentCycle }: BreathingTextProps) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (phase === "inhale") {
      setText("Breathe in");
    } else if (phase === "hold") {
      setText("Hold");
    } else if (phase === "exhale") {
      setText("Now, exhale");
    }
  }, [phase, counter]);

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Counter */}
      <div className="font-jakarta font-light text-[20px] mb-4">
        {counter}
      </div>
      
      {/* Main text */}
      <div className="font-cormorant text-[30px]">
        {text}
      </div>
      
      {/* Cycle counter */}
      <div className="font-jakarta text-[10px] text-muted-foreground mt-8 opacity-60">
        Cycle {currentCycle} of 4
      </div>
    </div>
  );
};
