import {
  ArrowRight,
  Check,
  Gem,
  RefreshCw,
  ShieldCheck,
  X,
} from "lucide-react";

export default function ResultScreen({
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
    <div className="w-full px-3 py-4 sm:px-5 sm:py-6">
      <div className="mx-auto w-full max-w-[390px]">
        <div
          className={`relative overflow-hidden rounded-[28px] border bg-[#06101c] shadow-[0_25px_80px_rgba(0,0,0,0.5)] ${
            isCorrect
              ? "border-emerald-400/20"
              : "border-red-400/20"
          }`}
        >
          {/* Background glow */}
          <div
            className={`pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl ${
              isCorrect
                ? "bg-emerald-500/[0.08]"
                : "bg-red-500/[0.08]"
            }`}
          />

          <div className="relative px-5 py-7 sm:px-7 sm:py-8">

            {/* ================= STATUS ICON ================= */}
            <div className="flex justify-center">
              <div
                className={`relative flex h-28 w-28 items-center justify-center rounded-full border ${
                  isCorrect
                    ? "border-emerald-400/20 bg-emerald-400/[0.05]"
                    : "border-red-400/20 bg-red-400/[0.05]"
                }`}
              >
                {/* Animated ring */}
                <div
                  className={`absolute inset-1 rounded-full border ${
                    isCorrect
                      ? "border-emerald-400/30 border-t-emerald-300 animate-[spin_3s_linear_infinite]"
                      : "border-red-400/30 border-t-red-300 animate-[spin_3s_linear_infinite]"
                  }`}
                />

                <div
                  className={`absolute inset-5 rounded-full blur-xl ${
                    isCorrect
                      ? "bg-emerald-400/10"
                      : "bg-red-400/10"
                  }`}
                />

                {/* Center */}
                <div
                  className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full ${
                    isCorrect
                      ? "bg-emerald-400/10 shadow-[0_0_35px_rgba(16,185,129,0.16)]"
                      : "bg-red-400/10 shadow-[0_0_35px_rgba(239,68,68,0.16)]"
                  }`}
                >
                  {isCorrect ? (
                    <Check
                      size={32}
                      strokeWidth={2.5}
                      className="text-emerald-300"
                    />
                  ) : (
                    <X
                      size={32}
                      strokeWidth={2.5}
                      className="text-red-300"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* ================= TITLE ================= */}
            <div className="mt-6 text-center">
              <p
                className={`text-[9px] font-bold uppercase tracking-[0.25em] ${
                  isCorrect
                    ? "text-emerald-400/80"
                    : "text-red-400/80"
                }`}
              >
                {isCorrect ? "SUCCESS" : "VERIFICATION"}
              </p>

              <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                {isCorrect
                  ? "Verification Complete!"
                  : "Verification Unsuccessful"}
              </h2>

              <p className="mx-auto mt-2 max-w-[280px] text-[11px] leading-5 text-slate-500">
                {isCorrect
                  ? "Your CAPTCHA was verified successfully. Your reward is ready to claim."
                  : "The selected answer was incorrect, but you still earned a verification reward."}
              </p>
            </div>

            {/* ================= REWARD ================= */}
            <div
              className={`relative mt-7 overflow-hidden rounded-2xl border p-5 ${
                isCorrect
                  ? "border-emerald-400/20 bg-emerald-400/[0.05]"
                  : "border-red-400/15 bg-red-400/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between gap-3">

                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      isCorrect
                        ? "bg-emerald-400/10"
                        : "bg-red-400/10"
                    }`}
                  >
                    <Gem
                      size={21}
                      className={
                        isCorrect
                          ? "text-emerald-300"
                          : "text-amber-300"
                      }
                    />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Reward Earned
                    </p>

                    <p
                      className={`mt-1 text-2xl font-bold ${
                        isCorrect
                          ? "text-emerald-300"
                          : "text-amber-300"
                      }`}
                    >
                      +{rewardAmount}
                      <span className="ml-1 text-xs font-semibold">
                        Gem
                      </span>
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[8px] uppercase tracking-wider text-slate-600">
                    Current
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    {previousBalance.toFixed(1)}
                  </p>
                </div>
              </div>
            </div>

            {/* ================= BALANCE CHANGE ================= */}
            <div className="mt-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5">
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[8px] uppercase tracking-[0.16em] text-slate-600">
                    Balance after claim
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Previous balance + reward
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <Gem size={14} className="text-amber-300" />

                  <span className="text-lg font-bold text-white">
                    {newBalance.toFixed(1)}
                  </span>

                  <span className="text-[9px] text-slate-600">
                    Gems
                  </span>
                </div>

              </div>
            </div>

            {/* ================= CLAIM ================= */}
            <button
              type="button"
              onClick={onClaim}
              className={`mt-5 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 active:scale-[0.97] ${
                isCorrect
                  ? "bg-emerald-500/90 shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:bg-emerald-500 hover:shadow-[0_8px_35px_rgba(16,185,129,0.22)]"
                  : "bg-amber-500/90 shadow-[0_8px_30px_rgba(245,158,11,0.12)] hover:bg-amber-500 hover:shadow-[0_8px_35px_rgba(245,158,11,0.20)]"
              }`}
            >
              <Gem size={17} />

              {isCorrect
                ? "Add 1 Gem to Balance"
                : "Add 0.5 Gem to Balance"}

              <ArrowRight size={17} />
            </button>

            {/* ================= SECONDARY ================= */}
            <button
              type="button"
              onClick={onNoThanks}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-xs font-semibold text-slate-400 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white active:scale-[0.97]"
            >
              <RefreshCw size={14} />

              {isCorrect
                ? "Maybe Later"
                : "Try Another CAPTCHA"}
            </button>

            {/* ================= SECURITY ================= */}
            <div className="mt-6 border-t border-white/[0.06] pt-5">
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.06]">
                  <ShieldCheck
                    size={18}
                    strokeWidth={1.8}
                    className="text-blue-300"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-300">
                    Secure Verification
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-slate-600">
                    Your verification result is processed securely.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom status */}
            <div className="mt-5 flex items-center justify-center gap-2">
              <span
                className={`h-1.5 w-1.5 rounded-full animate-pulse ${
                  isCorrect
                    ? "bg-emerald-400"
                    : "bg-red-400"
                }`}
              />

              <span className="text-[8px] tracking-wide text-slate-600">
                {isCorrect
                  ? "Verification completed successfully"
                  : "Verification completed"}
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}