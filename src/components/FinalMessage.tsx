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
      <img src={huuLogo} alt="HUU" className="w-24 h-24 object-contain mt-16" />
    </div>
  );
};
