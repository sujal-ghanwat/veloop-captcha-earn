import { motion } from "framer-motion";
import {
  CheckCircle2,
  CircleAlert,
  Gem,
  ArrowRight,
  Sparkles,
  RotateCcw,
} from "lucide-react";

function ResultScreen({
  isCorrect,
  reward,
  onClaim,
  onNoThanks,
}) {
  return (
    <div className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-5 py-10">

      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.8 }}
        className={`pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
          isCorrect
            ? "bg-emerald-100"
            : "bg-amber-100"
        }`}
      />

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="relative w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-7 text-center shadow-[0_30px_90px_rgba(15,23,42,0.10)] sm:p-10"
      >

        {/* Result icon */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 220,
            damping: 15,
            delay: 0.15,
          }}
          className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full ${
            isCorrect
              ? "bg-emerald-50"
              : "bg-amber-50"
          }`}
        >
          {isCorrect ? (
            <CheckCircle2
              size={48}
              strokeWidth={1.7}
              className="text-emerald-600"
            />
          ) : (
            <CircleAlert
              size={48}
              strokeWidth={1.7}
              className="text-amber-600"
            />
          )}
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-6"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Verification complete
          </p>

          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
            {isCorrect
              ? "Great job!"
              : "Almost there!"}
          </h2>

          <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
            {isCorrect
              ? "Your CAPTCHA was verified successfully."
              : "Your answer wasn't an exact match, but you've still earned a reward."}
          </p>
        </motion.div>

        {/* Reward card */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 15,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            type: "spring",
            stiffness: 170,
            damping: 14,
          }}
          className="relative mx-auto mt-8 w-fit"
        >
          {/* Sparkles */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -inset-4"
          >
            <Sparkles
              size={16}
              className="absolute left-0 top-2 text-amber-400"
            />

            <Sparkles
              size={12}
              className="absolute right-0 bottom-2 text-amber-400"
            />
          </motion.div>

          <div className="flex items-center gap-4 rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white px-6 py-5 shadow-sm">
            <motion.div
              animate={{
                y: [0, -4, 0],
                rotate: [0, 4, -4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm"
            >
              <Gem
                size={28}
                strokeWidth={1.8}
                className="text-amber-500"
              />
            </motion.div>

            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-600">
                Reward earned
              </p>

              <p className="mt-0.5 text-2xl font-black text-slate-900">
                +{reward}{" "}
                <span className="text-base font-bold text-slate-500">
                  Gems
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 space-y-3"
        >
          <button
            type="button"
            onClick={onClaim}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 active:translate-y-0"
          >
            Claim reward

            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>

          <button
            type="button"
            onClick={onNoThanks}
            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
          >
            <RotateCcw
              size={15}
              className="transition-transform group-hover:-rotate-45"
            />

            No Thanks
          </button>
        </motion.div>

        {/* Footer */}
        <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-300">
          VELoop Rewards
        </p>
      </motion.div>
    </div>
  );
}

export default ResultScreen;