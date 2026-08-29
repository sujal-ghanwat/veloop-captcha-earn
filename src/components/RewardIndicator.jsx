import { Gem, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function RewardIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.3,
      }}
      className="mx-auto flex w-fit items-center gap-3 rounded-2xl border border-amber-100 bg-white px-4 py-3 shadow-sm"
    >
      <motion.div
        animate={{
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50"
      >
        <Gem
          size={19}
          className="text-amber-500"
        />
      </motion.div>

      <div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-slate-900">
            +1 Gem
          </span>

          <Sparkles
            size={12}
            className="text-amber-500"
          />
        </div>

        <p className="text-xs text-slate-400">
          Reward for a correct answer
        </p>
      </div>
    </motion.div>
  );
}

export default RewardIndicator;