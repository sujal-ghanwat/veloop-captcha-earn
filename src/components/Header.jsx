import { Gem, ShieldCheck, Sparkles } from "lucide-react";

function Header({ balance }) {
  const formattedBalance = Number.isInteger(balance)
    ? balance
    : Number(balance).toFixed(1);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#020711]/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <div className="group flex items-center gap-2.5">
          {/* Gem logo */}
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-300/25 bg-gradient-to-br from-amber-300/[0.13] to-yellow-400/[0.035] shadow-[0_0_25px_rgba(251,191,36,0.07)] transition-all duration-300 group-hover:border-amber-300/40 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.13)]">

            <div className="absolute inset-1.5 rounded-lg border border-amber-200/[0.08]" />

            <Gem
              size={18}
              strokeWidth={1.8}
              className="relative z-10 text-amber-300 drop-shadow-[0_0_7px_rgba(251,191,36,0.45)] transition-transform duration-300 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 rounded-xl bg-amber-300/10 blur-xl" />

            <Sparkles
              size={8}
              className="absolute -right-1 -top-1 text-yellow-200 opacity-70"
            />
          </div>

          {/* Brand text */}
          <div className="leading-none">
            <p className="text-[14px] font-black tracking-[0.16em] text-white">
              VELOOP
            </p>

            <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.25em] text-slate-500">
              Rewards
            </p>
          </div>
        </div>

        {/* Secure session */}
        <div className="hidden items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.045] px-3.5 py-1.5 shadow-[0_0_18px_rgba(16,185,129,0.025)] sm:flex">
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-emerald-400/10 animate-pulse" />

            <ShieldCheck
              size={13}
              strokeWidth={1.8}
              className="relative z-10 text-emerald-400"
            />
          </span>

          <span className="text-[9px] font-semibold tracking-wide text-emerald-300">
            Secure Session
          </span>
        </div>

        {/* Balance */}
        <div className="group relative overflow-hidden rounded-full border border-amber-300/20 bg-gradient-to-r from-amber-300/[0.09] via-yellow-300/[0.045] to-transparent px-2 py-1.5 shadow-[0_0_28px_rgba(251,191,36,0.045)] transition-all duration-300 hover:border-amber-300/35 hover:shadow-[0_0_35px_rgba(251,191,36,0.09)]">

          {/* Hover shine */}
          <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-all duration-700 group-hover:left-[130%]" />

          <div className="relative z-10 flex items-center gap-2">

            {/* Gem icon */}
            <div className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-amber-300/15 bg-amber-300/[0.09] shadow-[0_0_18px_rgba(251,191,36,0.08)]">
              <div className="absolute inset-1 rounded-full border border-amber-200/[0.08] animate-pulse" />

              <Gem
                size={14}
                strokeWidth={1.8}
                className="relative z-10 text-amber-300 drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]"
              />
            </div>

            {/* Balance text */}
            <div className="pr-1">
              <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-slate-500">
                Balance
              </p>

              <p className="mt-0.5 text-[12px] font-black tracking-tight text-amber-200">
                {formattedBalance}
                <span className="ml-1 text-[8px] font-semibold text-amber-200/50">
                  Gems
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;