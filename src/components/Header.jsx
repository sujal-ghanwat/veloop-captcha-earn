import { Gem, ShieldCheck } from "lucide-react";

function Header({ balance }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#050a12]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-6xl items-center justify-between px-5 sm:px-8">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10">
            <Gem
              size={19}
              strokeWidth={1.8}
              className="text-amber-300"
            />

            <div className="absolute inset-0 rounded-xl bg-amber-400/10 blur-xl" />
          </div>

          <div>
            <h1 className="text-[16px] font-bold tracking-[0.12em] text-white">
              VELOOP
            </h1>

            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Rewards
            </p>
          </div>
        </div>

        {/* Security */}
        <div className="hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-1.5 sm:flex">
          <ShieldCheck
            size={13}
            className="text-emerald-400"
          />

          <span className="text-[10px] font-semibold tracking-wide text-emerald-300">
            Secure session
          </span>
        </div>

        {/* Balance */}
        <div className="flex items-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.035] px-3 py-2">

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/10">
            <Gem
              size={15}
              className="text-amber-300"
            />
          </div>

          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-slate-500">
              Balance
            </p>

            <p className="text-sm font-bold text-white">
              {Number.isInteger(balance)
                ? balance
                : balance.toFixed(1)}

              <span className="ml-1 text-[11px] font-medium text-slate-500">
                Gems
              </span>
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;