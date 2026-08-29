import { Gem, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Header({ balance }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 shadow-sm">
            <Gem
              size={19}
              strokeWidth={2}
              className="text-white"
            />
          </div>

          <div>
            <h1 className="text-[17px] font-extrabold tracking-tight text-slate-900">
              VELoop
            </h1>

            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Rewards dashboard
            </p>
          </div>
        </div>

        {/* Balance */}
        <motion.div
          key={balance}
          initial={{ scale: 0.96, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50">
            <Gem
              size={16}
              className="text-amber-500"
            />
          </div>

          <div className="hidden sm:block">
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Your balance
            </p>

            <p className="text-sm font-extrabold text-slate-900">
              {balance % 1 === 0
                ? balance
                : balance.toFixed(1)}{" "}
              <span className="font-semibold text-slate-500">
                Gems
              </span>
            </p>
          </div>

          <div className="sm:hidden">
            <p className="text-sm font-extrabold text-slate-900">
              {balance % 1 === 0
                ? balance
                : balance.toFixed(1)}
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;