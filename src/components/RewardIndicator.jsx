import { Gem, Sparkles } from "lucide-react";

function RewardIndicator() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-amber-300/10 bg-[#0b121d]">

      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/[0.06] blur-3xl" />

      <div className="relative flex items-center justify-between gap-4 px-5 py-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/10 bg-amber-300/[0.05]">
            <Gem
              size={19}
              className="text-amber-300"
            />
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Completion reward
            </p>

            <p className="mt-0.5 text-sm font-bold text-white">
              Earn{" "}
              <span className="text-amber-300">
                +1 Gem
              </span>
            </p>
          </div>

        </div>

        <div className="hidden items-center gap-1.5 rounded-full border border-amber-300/10 bg-amber-300/[0.035] px-3 py-1.5 sm:flex">
          <Sparkles
            size={11}
            className="text-amber-300"
          />

          <span className="text-[9px] font-bold uppercase tracking-wider text-amber-200/70">
            Reward available
          </span>
        </div>

      </div>
    </div>
  );
}

export default RewardIndicator;