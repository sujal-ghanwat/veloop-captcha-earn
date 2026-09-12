import { Gem, ShieldCheck } from "lucide-react";

function Header({ balance }) {
  const formattedBalance = Number.isInteger(balance)
    ? balance
    : Number(balance).toFixed(1);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#020711]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/[0.06] shadow-[0_0_25px_rgba(251,191,36,0.05)]">
            <Gem
              size={18}
              strokeWidth={1.8}
              className="text-amber-300"
            />

            <div className="pointer-events-none absolute inset-0 rounded-xl bg-amber-300/10 blur-xl" />
          </div>

          <div>
            <p className="text-[14px] font-bold tracking-[0.14em] text-white">
              VELOOP
            </p>

            <p className="text-[7px] font-bold uppercase tracking-[0.24em] text-slate-500">
              Rewards
            </p>
          </div>
        </div>

        {/* Secure session */}
        <div className="hidden items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.035] px-3 py-1.5 sm:flex">
          <ShieldCheck
            size={13}
            strokeWidth={1.8}
            className="text-emerald-400"
          />

          <span className="text-[9px] font-semibold tracking-wide text-emerald-300">
            Secure Session
          </span>
        </div>

        {/* Balance */}
        <div className="flex items-center gap-2 rounded-full border border-amber-300/15 bg-amber-300/[0.045] px-3 py-1.5 shadow-[0_0_25px_rgba(251,191,36,0.035)]">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-300/[0.08]">
            <Gem
              size={14}
              strokeWidth={1.8}
              className="text-amber-300"
            />
          </div>

          <div>
            <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-slate-600">
              Balance
            </p>

            <p className="text-[12px] font-bold text-amber-200">
              {formattedBalance}
              <span className="ml-1 text-[8px] font-medium text-slate-500">
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