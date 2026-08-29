import {
  ArrowRight,
  Check,
  Gem,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";

function ResultScreen({
  isCorrect,
  reward,
  onClaim,
  onNoThanks,
}) {
  return (
    <div className="flex min-h-[calc(100vh-74px)] items-center justify-center px-5 py-10">

      <div className="w-full max-w-lg">

        {/* Result card */}
        <div
          className={`
            relative overflow-hidden rounded-3xl border
            bg-[#09111d] p-7 text-center
            shadow-[0_25px_90px_rgba(0,0,0,0.4)]
            sm:p-10
            ${
              isCorrect
                ? "border-emerald-400/15"
                : "border-red-400/15"
            }
          `}
        >

          {/* Ambient glow */}
          <div
            className={`
              pointer-events-none absolute left-1/2 top-0
              h-48 w-64 -translate-x-1/2 -translate-y-1/2
              rounded-full blur-3xl
              ${
                isCorrect
                  ? "bg-emerald-400/[0.08]"
                  : "bg-red-400/[0.07]"
              }
            `}
          />

          <div className="relative">

            {/* Status icon */}
            <div
              className={`
                relative mx-auto flex h-24 w-24
                items-center justify-center rounded-full
                border
                ${
                  isCorrect
                    ? "border-emerald-400/20 bg-emerald-400/[0.06]"
                    : "border-red-400/20 bg-red-400/[0.06]"
                }
              `}
            >

              <div
                className={`
                  absolute inset-2 rounded-full border
                  ${
                    isCorrect
                      ? "border-emerald-400/10"
                      : "border-red-400/10"
                  }
                `}
              />

              {isCorrect ? (
                <Check
                  size={42}
                  strokeWidth={2.5}
                  className="text-emerald-300"
                />
              ) : (
                <X
                  size={42}
                  strokeWidth={2.5}
                  className="text-red-300"
                />
              )}

            </div>

            {/* Heading */}
            <h2
              className={`
                mt-7 text-2xl font-extrabold tracking-tight sm:text-3xl
                ${
                  isCorrect
                    ? "text-emerald-300"
                    : "text-red-300"
                }
              `}
            >
              {isCorrect
                ? "Verification complete"
                : "Verification unsuccessful"}
            </h2>

            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
              {isCorrect
                ? "Your response matched the challenge. Your reward has been successfully generated."
                : "The selected option didn't match the challenge. Try again with a fresh code."}
            </p>

            {/* Reward */}
            {isCorrect && (
              <div className="mx-auto mt-7 max-w-xs rounded-2xl border border-amber-300/10 bg-amber-300/[0.035] p-5">

                <div className="flex items-center justify-center gap-2">

                  <Gem
                    size={22}
                    className="text-amber-300"
                  />

                  <span className="text-2xl font-extrabold text-amber-300">
                    +{reward} Gem
                  </span>

                </div>

                <div className="mt-2 flex items-center justify-center gap-1.5">

                  <Sparkles
                    size={11}
                    className="text-amber-300/60"
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Reward earned
                  </span>

                </div>

              </div>
            )}

            {/* Actions */}
            <div className="mt-7 space-y-3">

              {isCorrect ? (
                <>
                  <button
                    type="button"
                    onClick={onClaim}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-[0_10px_30px_rgba(16,185,129,0.12)] transition-all hover:brightness-110 active:scale-[0.98]"
                  >
                    Add reward to balance

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={onNoThanks}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-3.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.05] active:scale-[0.98]"
                  >
                    Maybe later
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={onNoThanks}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-400 px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(239,68,68,0.1)] transition-all hover:brightness-110 active:scale-[0.98]"
                  >
                    <RotateCcw size={15} />

                    Try again
                  </button>

                  <button
                    type="button"
                    onClick={onNoThanks}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-5 py-3.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.05] active:scale-[0.98]"
                  >
                    <RotateCcw size={14} />

                    Get a new challenge
                  </button>
                </>
              )}

            </div>

            {/* Footer */}
            <div className="mt-7 border-t border-white/[0.06] pt-5">

              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
                {isCorrect
                  ? "Reward generated successfully"
                  : "Security verification keeps your account protected"}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ResultScreen;