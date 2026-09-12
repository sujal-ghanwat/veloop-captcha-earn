import { Gem } from "lucide-react";

function GemIcon({ size = 24 }) {
  return (
    <div
      className="
        relative flex items-center justify-center
        rounded-full
        border border-amber-300/25
        bg-gradient-to-br from-amber-200/[0.16] via-amber-400/[0.08] to-transparent
        shadow-[0_0_28px_rgba(251,191,36,0.16)]
        transition-all duration-300
        hover:scale-110
        hover:shadow-[0_0_38px_rgba(251,191,36,0.28)]
      "
      style={{
        width: size + 22,
        height: size + 22,
      }}
    >
      {/* Outer glow */}
      <div
        className="
          pointer-events-none absolute inset-[-5px]
          rounded-full
          bg-amber-300/[0.08]
          blur-xl
        "
      />

      {/* Inner shine */}
      <div
        className="
          pointer-events-none absolute inset-1
          rounded-full
          border border-amber-200/[0.08]
        "
      />

      <Gem
        size={size}
        strokeWidth={1.8}
        className="
          relative z-10
          text-amber-300
          drop-shadow-[0_0_10px_rgba(251,191,36,0.55)]
          transition-transform duration-300
        "
      />
    </div>
  );
}

export default GemIcon;