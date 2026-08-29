import { Check, LockKeyhole } from "lucide-react";

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
        group relative w-full overflow-hidden rounded-xl
        border p-4 text-left
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-400/30
        ${
          selected
            ? "border-cyan-400/50 bg-cyan-400/[0.08] shadow-[0_0_25px_rgba(34,211,238,0.08)]"
            : "border-white/[0.08] bg-white/[0.025] hover:border-blue-400/25 hover:bg-blue-400/[0.04]"
        }
        ${
          disabled && !selected
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }
      `}
    >

      <div className="flex items-center justify-between gap-3">

        <div className="flex items-center gap-3">

          <div
            className={`
              flex h-8 w-8 items-center justify-center
              rounded-lg border text-[10px] font-bold
              ${
                selected
                  ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                  : "border-white/[0.07] bg-white/[0.03] text-slate-500"
              }
            `}
          >
            <LockKeyhole size={13} />
          </div>

          <span
            className={`
              font-mono text-sm font-semibold tracking-wide
              ${
                selected
                  ? "text-cyan-200"
                  : "text-slate-300"
              }
            `}
          >
            {option}
          </span>

        </div>

        {selected && (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400/10">
            <Check
              size={15}
              className="text-cyan-300"
            />
          </div>
        )}

      </div>

      {/* hover accent */}
      {!disabled && !selected && (
        <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
      )}

    </button>
  );
}

export default CaptchaOption;