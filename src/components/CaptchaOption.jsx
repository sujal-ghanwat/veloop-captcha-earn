import { Check, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function CaptchaOption({
  option,
  selected,
  disabled,
  onClick,
}) {
  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={() => onClick(option)}
      whileHover={!disabled ? { y: -3 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`
        group relative min-h-[82px] w-full overflow-hidden rounded-2xl
        border px-5 py-4 text-left
        transition-all duration-200
        ${
          selected
            ? "border-slate-900 bg-slate-900 text-white shadow-xl shadow-slate-900/15"
            : "border-slate-200 bg-white text-slate-700 shadow-sm hover:border-slate-300 hover:shadow-lg"
        }
        ${
          disabled && !selected
            ? "cursor-not-allowed opacity-45"
            : "cursor-pointer"
        }
      `}
    >
      <div className="flex items-center justify-between gap-4">

        <div>
          <p
            className={`mb-1 text-[10px] font-bold uppercase tracking-[0.15em] ${
              selected
                ? "text-slate-400"
                : "text-slate-400"
            }`}
          >
            Option
          </p>

          <span
            className={`font-mono text-lg font-bold tracking-[0.12em] ${
              selected
                ? "text-white"
                : "text-slate-700"
            }`}
          >
            {option}
          </span>
        </div>

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all ${
            selected
              ? "bg-white/10"
              : "bg-slate-50 group-hover:bg-slate-100"
          }`}
        >
          {selected ? (
            <Check
              size={17}
              className="text-white"
            />
          ) : (
            <ArrowUpRight
              size={16}
              className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          )}
        </div>
      </div>

      {/* Bottom hover line */}
      {!disabled && !selected && (
        <div className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-slate-900 transition-transform duration-300 group-hover:scale-x-100" />
      )}
    </motion.button>
  );
}

export default CaptchaOption;