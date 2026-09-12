import { Check } from "lucide-react";

function CaptchaOption({
  option,
  selected,
  disabled,
  onClick,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onClick(option)}
      className={`
        group relative flex min-h-[58px] w-full items-center
        justify-between overflow-hidden rounded-xl border
        px-3 py-2.5 text-left
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-cyan-400/30
        sm:min-h-[62px] sm:px-3.5

        ${
          selected
            ? "border-cyan-300/80 bg-cyan-400/[0.10] shadow-[0_0_28px_rgba(34,211,238,0.14)]"
            : "border-white/[0.10] bg-[#08121e] hover:-translate-y-0.5 hover:border-blue-300/45 hover:bg-blue-400/[0.055] hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)]"
        }

        ${
          disabled && !selected
            ? "cursor-not-allowed opacity-45"
            : "cursor-pointer"
        }
      `}
    >
      {/* Selected glow */}
      {selected && (
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/[0.08] via-transparent to-blue-500/[0.06]" />
      )}

      {/* Option text */}
      <span
        className={`
          relative z-10 font-mono text-[12px] font-semibold
          tracking-wide transition-colors
          sm:text-sm
          ${
            selected
              ? "text-cyan-100"
              : "text-slate-200 group-hover:text-white"
          }
        `}
      >
        {option}
      </span>

      {/* Selected indicator */}
      {selected ? (
        <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/15 shadow-[0_0_12px_rgba(34,211,238,0.18)]">
          <Check
            size={14}
            strokeWidth={2.5}
            className="text-cyan-200"
          />
        </span>
      ) : (
        <span className="relative z-10 h-2.5 w-2.5 shrink-0 rounded-full border border-slate-600 transition-all duration-200 group-hover:border-blue-300 group-hover:bg-blue-300/10" />
      )}
    </button>
  );
}

export default CaptchaOption;