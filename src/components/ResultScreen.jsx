import {
  ArrowRight,
  Check,
  Gem,
  RefreshCw,
  ShieldCheck,
  X,
} from "lucide-react";

function ResultScreen({
  isCorrect,
  reward,
  balance,
  onClaim,
  onNoThanks,
}) {
  const rewardAmount = isCorrect ? 1 : 0.5;

  const previousBalance = balance;

  const newBalance =
    previousBalance + rewardAmount;

  return (
    <main className="relative w-full overflow-x-hidden bg-[#020711]">

      {/* Background glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 -translate-y-0 rounded-full blur-3xl sm:top-24 sm:h-96 sm:w-96 ${
          isCorrect
            ? "bg-emerald-500/[0.035]"
            : "bg-red-500/[0.035]"
        }`}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-3 py-5 sm:px-6 sm:py-8 lg:px-8">

        {/* ==========================================
            PAGE BRANDING
        ========================================== */}
        <div className="mb-5 w-full text-center sm:mb-7">

          <div className="mb-2 flex items-center justify-center gap-2">
            <Gem
              size={19}
              strokeWidth={2}
              className="shrink-0 text-amber-300"
            />

            <span className="text-[10px] font-bold tracking-[0.2em] text-white sm:text-sm sm:tracking-[0.24em]">
              VELOOP REWARDS
            </span>
          </div>

          <h1 className="text-[27px] font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            CAPTCHA{" "}
            <span
              className={
                isCorrect
                  ? "text-emerald-300"
                  : "text-red-300"
              }
            >
              EARN FLOW
            </span>
          </h1>

          <p className="mt-2 text-[9px] font-medium tracking-wide text-slate-500 sm:text-xs">
            Secure Verification
            <span className="mx-1.5 text-slate-700 sm:mx-2">
              •
            </span>
            Earn Rewards
            <span className="mx-1.5 text-slate-700 sm:mx-2">
              •
            </span>
            Build Trust
          </p>
        </div>

        {/* ==========================================
            PROGRESS FLOW
        ========================================== */}
        <div className="mb-6 hidden w-full max-w-5xl md:block">

          <div className="relative flex items-start justify-between">

            <div className="absolute left-[9%] right-[9%] top-5 h-px bg-white/[0.08]" />

            {[
              ["1", "Challenge"],
              ["2", "Option Selected"],
              ["3", "Verifying"],
              ["4", "Success"],
              ["5", "Incorrect"],
            ].map(([number, label]) => {

              const active =
                (isCorrect && number === "4") ||
                (!isCorrect && number === "5");

              return (
                <div
                  key={number}
                  className="relative z-10 flex min-w-0 flex-col items-center"
                >
                  <div
                    className={`
                      flex h-10 w-10 items-center justify-center
                      rounded-full border text-xs font-bold
                      ${
                        active
                          ? isCorrect
                            ? "border-emerald-400/60 bg-emerald-400/[0.12] text-emerald-300"
                            : "border-red-400/60 bg-red-400/[0.12] text-red-300"
                          : "border-white/[0.08] bg-[#07101c] text-slate-600"
                      }
                    `}
                  >
                    {number}
                  </div>

                  <span
                    className={`
                      mt-2 text-[8px] font-bold uppercase
                      tracking-[0.12em] sm:text-[9px]
                      ${
                        active
                          ? "text-slate-200"
                          : "text-slate-600"
                      }
                    `}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            PHONE
        ========================================== */}
        <div className="w-full max-w-[390px]">

          <div
            className={`
              relative mx-auto w-full overflow-hidden
              rounded-[28px] border bg-[#020711]
              p-1.5 shadow-[0_25px_70px_rgba(0,0,0,0.6)]
              sm:rounded-[34px] sm:p-2
              ${
                isCorrect
                  ? "border-emerald-400/20"
                  : "border-red-400/20"
              }
            `}
          >

            <div
              className={`
                relative w-full overflow-hidden
                rounded-[23px] border bg-[#06101c]
                ${
                  isCorrect
                    ? "border-emerald-400/[0.08]"
                    : "border-red-400/[0.08]"
                }
                sm:rounded-[27px]
              `}
            >

              {/* Glow */}
              <div
                className={`
                  pointer-events-none absolute left-1/2 top-16
                  h-48 w-48 -translate-x-1/2 rounded-full blur-3xl
                  ${
                    isCorrect
                      ? "bg-emerald-400/[0.025]"
                      : "bg-red-400/[0.025]"
                  }
                `}
              />

              {/* Speaker */}
              <div className="absolute left-1/2 top-2 z-30 h-1 w-12 -translate-x-1/2 rounded-full bg-white/10 sm:w-14" />

              {/* ==========================================
                  PHONE HEADER
              ========================================== */}
              <div className="relative z-10 flex items-center justify-between gap-2 px-3 pt-6 sm:px-4 sm:pt-7">

                <button
                  type="button"
                  onClick={onNoThanks}
                  aria-label="Go back"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-slate-400 transition hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white sm:h-9 sm:w-9"
                >
                  <span className="text-base leading-none sm:text-lg">
                    ←
                  </span>
                </button>

                <div className="min-w-0 flex-1 text-center">
                  <p className="text-[12px] font-bold tracking-[0.16em] text-white sm:text-sm">
                    VELOOP
                  </p>

                  <p className="text-[6px] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-[7px]">
                    Rewards
                  </p>
                </div>

                <div
                  className={`
                    flex shrink-0 items-center gap-1 rounded-full
                    border px-2 py-1.5
                    ${
                      isCorrect
                        ? "border-emerald-300/15 bg-emerald-300/[0.05]"
                        : "border-red-300/15 bg-red-300/[0.05]"
                    }
                  `}
                >
                  {isCorrect ? (
                    <Check
                      size={11}
                      className="text-emerald-300"
                    />
                  ) : (
                    <X
                      size={11}
                      className="text-red-300"
                    />
                  )}

                  <span
                    className={`
                      whitespace-nowrap text-[8px] font-bold
                      ${
                        isCorrect
                          ? "text-emerald-200"
                          : "text-red-200"
                      }
                    `}
                  >
                    {isCorrect ? "Verified" : "Failed"}
                  </span>
                </div>

              </div>

              {/* ==========================================
                  RESULT CONTENT
              ========================================== */}
              <div className="relative z-10 flex flex-col items-center px-4 pb-4 pt-7 text-center sm:px-5 sm:pb-5 sm:pt-9">

                {/* RESULT ICON */}
                <div
                  className={`
                    relative flex h-24 w-24 shrink-0
                    items-center justify-center rounded-full
                    sm:h-28 sm:w-28
                    ${
                      isCorrect
                        ? "border border-emerald-400/20 bg-emerald-400/[0.035]"
                        : "border border-red-400/20 bg-red-400/[0.035]"
                    }
                  `}
                >

                  <div
                    className={`
                      absolute inset-2.5 rounded-full border
                      ${
                        isCorrect
                          ? "border-emerald-400/15"
                          : "border-red-400/15"
                      }
                    `}
                  />

                  <div
                    className={`
                      absolute inset-6 rounded-full border
                      ${
                        isCorrect
                          ? "border-emerald-400/20"
                          : "border-red-400/20"
                      }
                    `}
                  />

                  <div
                    className={`
                      flex h-12 w-12 items-center justify-center
                      rounded-full sm:h-14 sm:w-14
                      ${
                        isCorrect
                          ? "bg-emerald-400/[0.10]"
                          : "bg-red-400/[0.10]"
                      }
                    `}
                  >
                    {isCorrect ? (
                      <Check
                        size={28}
                        strokeWidth={2.5}
                        className="text-emerald-300 sm:h-8 sm:w-8"
                      />
                    ) : (
                      <X
                        size={28}
                        strokeWidth={2.5}
                        className="text-red-300 sm:h-8 sm:w-8"
                      />
                    )}
                  </div>
                </div>

                {/* HEADING */}
                <h2
                  className={`
                    mt-5 text-[19px] font-extrabold
                    tracking-tight sm:mt-6 sm:text-2xl
                    ${
                      isCorrect
                        ? "text-emerald-300"
                        : "text-red-300"
                    }
                  `}
                >
                  {isCorrect
                    ? "Verification Complete!"
                    : "Verification Unsuccessful"}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-1.5 max-w-[270px] text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-[11px] sm:leading-5">
                  {isCorrect
                    ? "Your answer matched the CAPTCHA shown. Your reward is ready."
                    : "The selected code doesn't match the image shown."}
                </p>

                {/* ==========================================
                    REWARD
                ========================================== */}
                <div className="mt-4 flex flex-col items-center">

                  <p className="text-[10px] text-slate-500">
                    You earned
                  </p>

                  <div className="mt-1 flex items-center justify-center gap-1.5">
                    <Gem
                      size={21}
                      strokeWidth={2}
                      className="text-amber-300"
                    />

                    <span className="text-xl font-black text-amber-300 sm:text-2xl">
                      +{rewardAmount} Gem
                    </span>
                  </div>
                </div>

                {/* ==========================================
                    BALANCE PREVIEW
                ========================================== */}
                <div className="mt-4 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-3 sm:mt-5 sm:px-4 sm:py-3.5">

                  <div className="flex items-center justify-between gap-2">

                    <div className="min-w-0 text-left">
                      <p className="text-[7px] font-semibold uppercase tracking-[0.08em] text-slate-600 sm:text-[8px]">
                        Current Balance
                      </p>

                      <p className="mt-1 text-xs font-bold text-white sm:text-sm">
                        {previousBalance.toFixed(1)}
                      </p>
                    </div>

                    <ArrowRight
                      size={17}
                      className="shrink-0 text-slate-500"
                    />

                    <div className="min-w-0 text-right">
                      <p className="text-[7px] font-semibold uppercase tracking-[0.08em] text-slate-600 sm:text-[8px]">
                        After Claim
                      </p>

                      <p
                        className={`mt-1 text-xs font-bold sm:text-sm ${
                          isCorrect
                            ? "text-emerald-300"
                            : "text-amber-300"
                        }`}
                      >
                        {newBalance.toFixed(1)}
                      </p>
                    </div>

                  </div>
                </div>

                {/* ==========================================
                    INCORRECT MESSAGE
                ========================================== */}
                {!isCorrect && (
                  <p className="mt-4 max-w-[240px] text-[10px] leading-4 text-slate-500 sm:mt-5 sm:text-[11px] sm:leading-5">
                    You still earned 0.5 Gem for completing
                    the verification. Claim it before trying
                    a new challenge.
                  </p>
                )}

                {/* ==========================================
                    BUTTONS
                ========================================== */}
                <div className="mt-4 w-full space-y-2 sm:mt-5 sm:space-y-2.5">

                  {isCorrect ? (
                    <>
                      <button
                        type="button"
                        onClick={onClaim}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-3 py-3 text-xs font-bold text-slate-950 shadow-[0_8px_25px_rgba(16,185,129,0.15)] transition hover:brightness-110 active:scale-[0.98] sm:px-4 sm:py-3.5 sm:text-sm"
                      >
                        Add to Balance
                        <ArrowRight size={14} />
                      </button>

                      <button
                        type="button"
                        onClick={onNoThanks}
                        className="w-full rounded-xl border border-white/[0.09] bg-white/[0.02] px-3 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-white/[0.14] hover:bg-white/[0.05] sm:px-4 sm:py-3 sm:text-sm"
                      >
                        Maybe Later
                      </button>
                    </>
                  ) : (
                    <>
                      {/* IMPORTANT:
                          This actually adds the 0.5 Gem.
                      */}
                      <button
                        type="button"
                        onClick={onClaim}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 px-3 py-3 text-xs font-bold text-slate-950 shadow-[0_8px_25px_rgba(251,191,36,0.14)] transition hover:brightness-110 active:scale-[0.98] sm:px-4 sm:py-3.5 sm:text-sm"
                      >
                        Add 0.5 Gem to Balance
                        <ArrowRight size={14} />
                      </button>

                      <button
                        type="button"
                        onClick={onNoThanks}
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.02] px-3 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-white/[0.14] hover:bg-white/[0.05] sm:px-4 sm:py-3 sm:text-sm"
                      >
                        <RefreshCw size={13} />
                        Try Again
                      </button>
                    </>
                  )}

                </div>

                {/* ==========================================
                    SECURE AREA INSIDE PHONE
                ========================================== */}
                <div className="mt-4 w-full shrink-0 sm:mt-5">

                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5 sm:p-3">

                    <div className="flex items-center gap-2 text-left">

                      <ShieldCheck
                        size={15}
                        className="shrink-0 text-slate-500"
                      />

                      <p className="text-[8px] leading-4 text-slate-500 sm:text-[9px]">
                        {isCorrect
                          ? "Your reward is ready to be added to your balance."
                          : "Security checks help keep your account safe from automated access."}
                      </p>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            NOTE:
            GLOBAL FEATURE FOOTER IS IN APP.JSX
        ========================================== */}

        <div className="h-3 sm:h-4" />

      </div>
    </main>
  );
}

export default ResultScreen;