import { Button } from "@/components/ui/button";

interface CompletionPromptProps {
  onRestart: () => void;
  onFinish: () => void;
}

export const CompletionPrompt = ({ onRestart, onFinish }: CompletionPromptProps) => {
  return (
    <div className="flex flex-col items-center gap-6 animate-fade-in">
      <h2 className="font-jakarta font-light text-2xl text-foreground text-center px-8">
        How are you feeling now?
      </h2>
      
      <div className="flex flex-col gap-4 w-full max-w-xs px-8">
        <Button
          onClick={onFinish}
          variant="secondary"
          className="w-full font-jakarta text-base py-6 rounded-full"
        >
          I'm feeling good
        </Button>
        
        <Button
          onClick={onRestart}
          variant="outline"
          className="w-full font-jakarta text-base py-6 rounded-full border-2 bg-accent hover:bg-accent/90"
        >
          I'm not quite ready yet
        </Button>
      </div>
    </div>
  );
};
