import huuLogo from "@/assets/huu-logo.svg";

export const FinalMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-8">
      <p className="font-cormorant text-[20px] text-foreground text-center leading-relaxed">
        I'm very proud of you.
      </p>
      <p className="font-cormorant text-[20px] text-foreground text-center leading-relaxed">
        Thank you for breathing with me : )
      </p>
      <div className="flex flex-col items-center gap-2 mt-16">
        <img src={huuLogo} alt="HUU" className="w-24 h-24 object-contain" />
        <p className="font-jakarta text-xs text-foreground/70">Design by Duan</p>
      </div>
    </div>
  );
};
