import {
  CheckCircle2,
  Gem,
  ShieldCheck,
  Sparkles,
  XCircle,
} from "lucide-react";

function ResultScreen({
  isCorrect,
  reward,
  balance,
  onClaim,
  onNoThanks,
}) {
  const rewardAmount = isCorrect ? 1 : 0.5;
  const previousBalance = Number(balance || 0);
  const newBalance = previousBalance + rewardAmount;

  return (
    <div className="w-full min-w-0 px-3 py-6 sm:px-5 sm:py-8">
      <div className="mx-auto w-full max-w-[340px]">

        {/* Result visual */}
        <div className="mb-6 flex justify-center">
          <div className="relative">

            {/* Outer glow */}
            <div
              className={`absolute inset-[-22px] rounded-full blur-3xl ${
                isCorrect
                  ? "bg-emerald-400/[0.10]"
                  : "bg-red-400/[0.08]"
              }`}
            />

            {/* Outer ring */}
            <div
              className={`absolute inset-[-10px] rounded-full border ${
                isCorrect
                  ? "border-emerald-400/[0.12]"
                  : "border-red-400/[0.12]"
              }`}
            />

            {/* Main circle */}
            <div
              className={`relative flex h-[86px] w-[86px] items-center justify-center rounded-full border ${
                isCorrect
                  ? "border-emerald-400/35 bg-gradient-to-br from-emerald-400/[0.14] to-emerald-400/[0.035] shadow-[0_0_45px_rgba(52,211,153,0.18)]"
                  : "border-red-400/35 bg-gradient-to-br from-red-400/[0.12] to-red-400/[0.025] shadow-[0_0_45px_rgba(248,113,113,0.16)]"
              }`}
            >
              {/* Inner ring */}
              <div
                className={`absolute inset-2 rounded-full border ${
                  isCorrect
                    ? "border-emerald-300/[0.10]"
                    : "border-red-300/[0.10]"
                }`}
              />

              {isCorrect ? (
                <CheckCircle2
                  size={44}
                  strokeWidth={1.5}
                  className="relative z-10 text-emerald-300 drop-shadow-[0_0_14px_rgba(52,211,153,0.5)]"
                />
              ) : (
                <XCircle
                  size={44}
                  strokeWidth={1.5}
                  className="relative z-10 text-red-300 drop-shadow-[0_0_14px_rgba(248,113,113,0.45)]"
                />
              )}
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center">
          <div
            className={`mx-auto inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 ${
              isCorrect
                ? "border-emerald-400/15 bg-emerald-400/[0.05]"
                : "border-red-400/15 bg-red-400/[0.04]"
            }`}
          >
            {isCorrect ? (
              <CheckCircle2
                size={10}
                className="text-emerald-400"
              />
            ) : (
              <XCircle
                size={10}
                className="text-red-400"
              />
            )}

            <span
              className={`text-[8px] font-bold uppercase tracking-[0.18em] ${
                isCorrect
                  ? "text-emerald-400"
                  : "text-red-400"
              }`}
            >
              {isCorrect
                ? "Verification Complete"
                : "Verification Failed"}
            </span>
          </div>

          <h2 className="mt-3 text-[26px] font-black tracking-tight text-white">
            {isCorrect ? "Great Job!" : "Not Quite!"}
          </h2>

          <p className="mx-auto mt-2 max-w-[270px] text-[10px] leading-relaxed text-slate-500">
            {isCorrect
              ? "Your CAPTCHA was verified successfully. Your reward is ready to claim."
              : "The selected CAPTCHA doesn't match. You still receive a participation reward."}
          </p>
        </div>

        {/* Reward card */}
        <div
          className={`group/reward relative mt-6 overflow-hidden rounded-2xl border ${
            isCorrect
              ? "border-amber-300/25 bg-gradient-to-br from-amber-300/[0.11] via-[#091827] to-[#050c15] shadow-[0_0_35px_rgba(251,191,36,0.055)]"
              : "border-amber-300/10 bg-gradient-to-br from-amber-300/[0.045] via-[#08131f] to-[#050b12]"
          }`}
        >
          {/* Gold glow */}
          <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-amber-400/[0.12] blur-3xl" />

          <div className="pointer-events-none absolute -left-[120%] top-0 h-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-all duration-1000 group-hover/reward:left-[140%]" />

          <div className="relative z-10 px-5 py-5">

            {/* Reward header */}
            <div className="flex items-start justify-between gap-3">

              <div>
                <div className="flex items-center gap-1.5">
                  <Sparkles
                    size={11}
                    className="text-amber-300"
                  />

                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-amber-200/55">
                    Reward Earned
                  </p>
                </div>

                <div className="mt-2.5 flex items-center gap-2.5">

                  {/* Gem */}
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-300/25 bg-amber-300/[0.10] shadow-[0_0_25px_rgba(251,191,36,0.12)]">
                    <div className="absolute inset-1.5 rounded-lg border border-amber-200/[0.10] animate-pulse" />

                    <Gem
                      size={22}
                      strokeWidth={1.7}
                      className="relative z-10 text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.55)]"
                    />
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[28px] font-black tracking-tight text-amber-200 drop-shadow-[0_0_12px_rgba(251,191,36,0.18)]">
                        +{rewardAmount}
                      </span>

                      <span className="text-[9px] font-semibold text-amber-200/50">
                        Gems
                      </span>
                    </div>

                    <p className="mt-0.5 text-[8px] text-slate-600">
                      Added to your reward wallet
                    </p>
                  </div>
                </div>
              </div>

              {/* Reward sparkle */}
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-amber-300/10 bg-amber-300/[0.045]">
                <Sparkles
                  size={13}
                  className="text-amber-300/70"
                />
              </div>
            </div>

            {/* Reward progress */}
            <div className="mt-5">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[7px] font-bold uppercase tracking-[0.14em] text-slate-600">
                  Reward Ready
                </span>

                <span className="text-[7px] font-bold uppercase tracking-[0.14em] text-amber-300/60">
                  {isCorrect ? "Verified" : "Participation"}
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className={`h-full rounded-full ${
                    isCorrect
                      ? "w-full bg-gradient-to-r from-amber-500/70 via-yellow-300/90 to-amber-200"
                      : "w-2/3 bg-gradient-to-r from-amber-500/50 to-yellow-300/70"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Balance preview */}
        <div className="relative mt-3 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.025]">

          <div className="flex items-center justify-between px-4 py-3.5">

            {/* Current */}
            <div>
              <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-slate-600">
                Current Balance
              </p>

              <p className="mt-1 text-[14px] font-black text-slate-200">
                {previousBalance}
                <span className="ml-1 text-[8px] font-semibold text-slate-500">
                  Gems
                </span>
              </p>
            </div>

            {/* Arrow */}
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025]">
              <span className="text-[10px] text-slate-600">
                →
              </span>
            </div>

            {/* After claim */}
            <div className="text-right">
              <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-slate-600">
                After Claim
              </p>

              <p className="mt-1 text-[14px] font-black text-amber-200">
                {newBalance}
                <span className="ml-1 text-[8px] font-semibold text-amber-200/50">
                  Gems
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Main action */}
        <button
          type="button"
          onClick={onClaim}
          className="
            group/button relative mt-4 flex w-full
            items-center justify-center gap-2
            overflow-hidden rounded-xl
            border border-amber-300/30
            bg-gradient-to-r from-amber-300/[0.13] via-yellow-300/[0.08] to-amber-300/[0.10]
            px-4 py-3.5
            text-[11px] font-bold text-amber-100
            shadow-[0_0_30px_rgba(251,191,36,0.08)]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:border-amber-300/45
            hover:shadow-[0_12px_35px_rgba(251,191,36,0.14)]
            active:scale-[0.98]
          "
        >
          <div className="pointer-events-none absolute inset-y-0 -left-full w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.10] to-transparent transition-all duration-700 group-hover/button:left-[130%]" />

          <Gem
            size={15}
            strokeWidth={1.9}
            className="relative z-10 text-amber-300"
          />

          <span className="relative z-10">
            Add {rewardAmount} Gem{rewardAmount === 1 ? "" : "s"} to Balance
          </span>
        </button>

        {/* Secondary action */}
        <button
          type="button"
          onClick={onNoThanks}
          className="
            mt-2 w-full rounded-xl px-4 py-2.5
            text-[9px] font-semibold text-slate-500
            transition-all duration-200
            hover:bg-white/[0.025]
            hover:text-slate-300
          "
        >
          {isCorrect ? "Maybe Later" : "Try Another CAPTCHA"}
        </button>

        {/* Security */}
        <div className="mt-4 flex items-center justify-center gap-1.5">
          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/10 bg-emerald-400/[0.035]">
            <ShieldCheck
              size={10}
              strokeWidth={1.8}
              className="text-emerald-400/80"
            />
          </div>

          <span className="text-[8px] font-medium text-slate-600">
            Secure reward processing
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResultScreen;