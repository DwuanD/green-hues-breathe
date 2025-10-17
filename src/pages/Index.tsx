import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BreathingAura } from "@/components/BreathingAura";
import { BreathingText } from "@/components/BreathingText";
import { CompletionPrompt } from "@/components/CompletionPrompt";
import { FinalMessage } from "@/components/FinalMessage";
import huuLogo from "@/assets/huu-logo.svg";

type AppState = "welcome" | "breathing" | "completion" | "finished";
type BreathPhase = "inhale" | "hold" | "exhale";

const TOTAL_CYCLES = 4;
const INHALE_DURATION = 4000; // 4 seconds
const HOLD_DURATION = 7000; // 7 seconds
const EXHALE_DURATION = 8000; // 8 seconds

const Index = () => {
  const [appState, setAppState] = useState<AppState>("welcome");
  const [phase, setPhase] = useState<BreathPhase>("inhale");
  const [counter, setCounter] = useState(1);
  const [currentCycle, setCurrentCycle] = useState(1);

  const startBreathing = () => {
    setAppState("breathing");
    setPhase("inhale");
    setCounter(4);
    setCurrentCycle(1);
  };

  const resetBreathing = () => {
    setAppState("breathing");
    setPhase("inhale");
    setCounter(4);
    setCurrentCycle(1);
  };

  useEffect(() => {
    if (appState !== "breathing") return;

    let timer: NodeJS.Timeout;

    if (phase === "inhale") {
      // Count down during inhale
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev <= 1) return 1;
          return prev - 1;
        });
      }, 1000);

      // After 4 seconds, move to hold
      timer = setTimeout(() => {
        clearInterval(interval);
        setPhase("hold");
        setCounter(7);
      }, INHALE_DURATION);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    } else if (phase === "hold") {
      // Count down during hold
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev <= 1) return 1;
          return prev - 1;
        });
      }, 1000);

      // After 7 seconds, move to exhale
      timer = setTimeout(() => {
        clearInterval(interval);
        setPhase("exhale");
        setCounter(8);
      }, HOLD_DURATION);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    } else if (phase === "exhale") {
      // Count down during exhale
      const interval = setInterval(() => {
        setCounter((prev) => {
          if (prev <= 1) return 1;
          return prev - 1;
        });
      }, 1000);

      // After 8 seconds, check if we need another cycle
      timer = setTimeout(() => {
        clearInterval(interval);
        
        if (currentCycle >= TOTAL_CYCLES) {
          // All cycles complete
          setAppState("completion");
        } else {
          // Start next cycle
          setCurrentCycle((prev) => prev + 1);
          setPhase("inhale");
          setCounter(4);
        }
      }, EXHALE_DURATION);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [appState, phase, currentCycle]);

  return (
    <main className="h-screen bg-gradient-radial overflow-hidden relative flex items-center justify-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/80 backdrop-blur-[40px]" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        {appState === "welcome" && (
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="font-cormorant text-[20px] text-foreground text-center px-8 max-w-md">
              You're safe here, just breathe with me
            </h1>
            <Button
              onClick={startBreathing}
              variant="secondary"
              className="px-12 py-6 text-base font-cormorant rounded-full"
            >
              Begin
            </Button>
          </div>
        )}

        {appState === "breathing" && (
          <>
            <BreathingAura phase={phase} counter={counter} />
            <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-20">
              <BreathingText 
                phase={phase} 
                counter={counter} 
                currentCycle={currentCycle} 
              />
            </div>
          </>
        )}

        {appState === "completion" && (
          <CompletionPrompt
            onRestart={resetBreathing}
            onFinish={() => setAppState("finished")}
          />
        )}

        {appState === "finished" && <FinalMessage />}
        
        {/* Fixed logo at bottom center - only show on welcome and finished states */}
        {(appState === "welcome" || appState === "finished") && (
          <img src={huuLogo} alt="HUU" className="fixed bottom-8 left-1/2 -translate-x-1/2 w-24 h-24 object-contain z-30" />
        )}
      </div>
    </main>
  );
};

export default Index;
