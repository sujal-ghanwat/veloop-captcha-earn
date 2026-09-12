import { Check, ChevronRight, Sparkles } from "lucide-react";

function CaptchaOption({ option, selected, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={() => onClick(option)}
      disabled={disabled}
      className={`
        group relative flex w-full min-w-0 items-center
        justify-between overflow-hidden rounded-xl
        border px-3.5 py-3.5 text-left
        transition-all duration-300
        active:scale-[0.97]

        ${
          selected
            ? `
              border-cyan-400/45
              bg-gradient-to-r from-cyan-400/[0.12] via-blue-400/[0.07] to-transparent
              shadow-[0_0_28px_rgba(34,211,238,0.14)]
            `
            : `
              border-white/[0.08]
              bg-white/[0.025]
              hover:-translate-y-[2px]
              hover:border-blue-400/30
              hover:bg-blue-400/[0.055]
              hover:shadow-[0_10px_30px_rgba(37,99,235,0.12)]
            `
        }

        ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}
      `}
    >
      {/* Selected background glow */}
      {selected && (
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-r
            from-cyan-400/[0.08]
            via-blue-400/[0.04]
            to-transparent
          "
        />
      )}

      {/* Animated left accent */}
      <div
        className={`
          pointer-events-none absolute left-0 top-1/2
          h-7 w-[2px] -translate-y-1/2
          rounded-r-full
          transition-all duration-300
          ${
            selected
              ? "bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
              : "h-0 bg-blue-400 group-hover:h-5"
          }
        `}
      />

      {/* Option text */}
      <div className="relative z-10 flex min-w-0 items-center gap-2">
        <span
          className={`
            min-w-0 truncate
            font-mono text-[16px] font-black
            tracking-[0.12em]
            transition-all duration-300
            sm:text-[18px]
            sm:tracking-[0.14em]

            ${
              selected
                ? `
                  text-cyan-100
                  drop-shadow-[0_0_9px_rgba(34,211,238,0.4)]
                `
                : `
                  text-slate-100
                  group-hover:text-white
                `
            }
          `}
        >
          {option}
        </span>

        {/* Selected indicator */}
        {selected && (
          <Sparkles
            size={11}
            className="shrink-0 animate-pulse text-cyan-300"
          />
        )}
      </div>

      {/* Action icon */}
      <div className="relative z-10 ml-2 shrink-0">
        {selected ? (
          <div
            className="
              flex h-7 w-7 items-center justify-center
              rounded-full
              border border-emerald-300/30
              bg-emerald-400/[0.12]
              text-emerald-300
              shadow-[0_0_18px_rgba(52,211,153,0.15)]
            "
          >
            <Check size={14} strokeWidth={2.5} />
          </div>
        ) : (
          <div
            className="
              flex h-7 w-7 items-center justify-center
              rounded-full
              border border-white/[0.07]
              bg-white/[0.025]
              text-slate-500
              transition-all duration-300
              group-hover:border-blue-300/25
              group-hover:bg-blue-300/[0.08]
              group-hover:text-blue-300
            "
          >
            <ChevronRight
              size={14}
              strokeWidth={1.8}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
              "
            />
          </div>
        )}
      </div>

      {/* Hover shine */}
      {!selected && (
        <div
          className="
            pointer-events-none absolute inset-y-0 left-[-100%]
            w-1/2 skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent via-white/[0.05] to-transparent
            transition-all duration-700
            group-hover:left-[120%]
          "
        />
      )}
    </button>
  );
}

export default CaptchaOption;