import { Button } from "@/components/ui/button";

interface CompletionPromptProps {
  onRestart: () => void;
  onFinish: () => void;
}

export const CompletionPrompt = ({ onRestart, onFinish }: CompletionPromptProps) => {
  return (
    <div className="flex flex-col items-center gap-6 animate-fade-in">
      <h2 className="font-cormorant text-[30px] text-foreground text-center px-8">
        How are you feeling now?
      </h2>
      
      <div className="flex flex-col gap-4 w-full max-w-xs px-8">
        <Button
          onClick={onFinish}
          variant="secondary"
          className="w-full font-cormorant text-base py-6 rounded-full"
        >
          I'm feeling good
        </Button>
        
        <Button
          onClick={onRestart}
          variant="default"
          className="w-full font-cormorant text-base py-6 rounded-full bg-accent hover:bg-accent/90 border-0"
        >
          I'm not quite ready yet
        </Button>
      </div>
    </div>
  );
};
