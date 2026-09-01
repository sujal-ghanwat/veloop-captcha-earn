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
 const previousBalance = balance;
const newBalance = previousBalance + reward;

  return (
    <main className="relative min-h-[calc(100vh-68px)] w-full min-w-0 overflow-hidden bg-[#020711]">

      {/* Background glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl sm:h-96 sm:w-96 ${
          isCorrect
            ? "bg-emerald-500/[0.035]"
            : "bg-red-500/[0.035]"
        }`}
        aria-hidden="true"
      />

      {/* Main container */}
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-col items-center px-3 py-6 sm:px-6 sm:py-10 lg:px-8">

        {/* PAGE BRANDING */}
        <div className="mb-6 w-full min-w-0 text-center sm:mb-7">

          <div className="mb-2 flex items-center justify-center gap-2">

            <Gem
              size={19}
              strokeWidth={2}
              className="shrink-0 text-amber-300 sm:h-[21px] sm:w-[21px]"
            />

            <span className="text-[11px] font-bold tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.24em]">
              VELOOP REWARDS
            </span>

          </div>

          <h1 className="mx-auto max-w-full break-words text-[28px] font-black uppercase leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">

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

          <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 text-[9px] font-medium tracking-wide text-slate-500 sm:text-xs">

            <span>Secure Verification</span>

            <span className="text-slate-700">•</span>

            <span>Earn Rewards</span>

            <span className="text-slate-700">•</span>

            <span>Build Trust</span>

          </p>

        </div>

        {/* PROGRESS FLOW */}
        <div className="mb-8 hidden w-full max-w-5xl md:block">

          <div className="relative flex min-w-0 items-start justify-between">

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
                      flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-full border text-xs font-bold
                      transition-all duration-300
                      ${
                        active
                          ? isCorrect
                            ? "border-emerald-400/60 bg-emerald-400/[0.12] text-emerald-300 shadow-[0_0_25px_rgba(52,211,153,0.12)]"
                            : "border-red-400/60 bg-red-400/[0.12] text-red-300 shadow-[0_0_25px_rgba(248,113,113,0.12)]"
                          : "border-white/[0.08] bg-[#07101c] text-slate-600"
                      }
                    `}
                  >
                    {number}
                  </div>

                  <span
                    className={`
                      mt-2 whitespace-nowrap text-[8px] font-bold
                      uppercase tracking-[0.12em] sm:text-[9px]
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

        {/* RESULT PHONE */}
        <div className="flex w-full min-w-0 justify-center">

          <div className="w-full min-w-0 max-w-[390px]">

            {/* PHONE FRAME */}
            <div
              className={`
                relative w-full min-w-0 overflow-hidden
                rounded-[30px] border bg-[#020711] p-1.5
                shadow-[0_30px_100px_rgba(0,0,0,0.65)]
                sm:rounded-[34px] sm:p-2
                ${
                  isCorrect
                    ? "border-emerald-400/20"
                    : "border-red-400/20"
                }
              `}
            >

              {/* PHONE SCREEN */}
              <div
                className={`
                  relative min-h-[680px] w-full min-w-0 overflow-hidden
                  rounded-[24px] border bg-[#06101c]
                  sm:rounded-[27px]
                  ${
                    isCorrect
                      ? "border-emerald-400/[0.08]"
                      : "border-red-400/[0.08]"
                  }
                `}
              >

                {/* Screen glow */}
                <div
                  className={`
                    pointer-events-none absolute left-1/2 top-20
                    h-48 w-48 -translate-x-1/2 rounded-full blur-3xl
                    sm:h-56 sm:w-56
                    ${
                      isCorrect
                        ? "bg-emerald-400/[0.025]"
                        : "bg-red-400/[0.025]"
                    }
                  `}
                  aria-hidden="true"
                />

                {/* Speaker */}
                <div
                  className="absolute left-1/2 top-2 z-30 h-1 w-14 -translate-x-1/2 rounded-full bg-white/10"
                  aria-hidden="true"
                />

                {/* MOBILE HEADER */}
                <div className="relative z-10 flex min-w-0 items-center justify-between gap-2 px-3 pt-7 sm:px-4">

                  {/* Back */}
                  <button
                    type="button"
                    onClick={onNoThanks}
                    aria-label="Go back"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-slate-400 transition hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white sm:h-9 sm:w-9"
                  >
                    <span className="text-lg leading-none">
                      ←
                    </span>
                  </button>

                  {/* Logo */}
                  <div className="min-w-0 flex-1 text-center">

                    <p className="truncate text-[13px] font-bold tracking-[0.16em] text-white sm:text-sm">
                      VELOOP
                    </p>

                    <p className="text-[6px] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-[7px]">
                      Rewards
                    </p>

                  </div>

                  {/* Balance */}
                  <div className="flex shrink-0 items-center gap-1 rounded-full border border-amber-300/15 bg-amber-300/[0.05] px-2 py-1.5 sm:gap-1.5 sm:px-2.5">

                    <Gem
                      size={11}
                      className="shrink-0 text-amber-300 sm:h-3 sm:w-3"
                    />

                    <span className="whitespace-nowrap text-[9px] font-bold text-amber-200 sm:text-[10px]">
                      {previousBalance.toFixed(2)}
                    </span>

                  </div>

                </div>

                {/* RESULT CONTENT */}
                <div className="relative z-10 flex min-w-0 min-h-[590px] flex-col items-center px-3 pb-4 pt-8 text-center sm:px-5 sm:pb-5 sm:pt-10">

                  {/* RESULT ICON */}
                  <div
                    className={`
                      relative flex h-28 w-28 shrink-0 items-center
                      justify-center rounded-full sm:h-32 sm:w-32
                      ${
                        isCorrect
                          ? "border border-emerald-400/20 bg-emerald-400/[0.035]"
                          : "border border-red-400/20 bg-red-400/[0.035]"
                      }
                    `}
                  >

                    <div
                      className={`
                        absolute inset-3 rounded-full border
                        ${
                          isCorrect
                            ? "border-emerald-400/15"
                            : "border-red-400/15"
                        }
                      `}
                    />

                    <div
                      className={`
                        absolute inset-7 rounded-full border
                        ${
                          isCorrect
                            ? "border-emerald-400/20"
                            : "border-red-400/20"
                        }
                      `}
                    />

                    <div
                      className={`
                        flex h-14 w-14 items-center
                        justify-center rounded-full sm:h-16 sm:w-16
                        ${
                          isCorrect
                            ? "bg-emerald-400/[0.10]"
                            : "bg-red-400/[0.10]"
                        }
                      `}
                    >

                      {isCorrect ? (
                        <Check
                          size={32}
                          strokeWidth={2.5}
                          className="text-emerald-300 sm:h-9 sm:w-9"
                        />
                      ) : (
                        <X
                          size={32}
                          strokeWidth={2.5}
                          className="text-red-300 sm:h-9 sm:w-9"
                        />
                      )}

                    </div>

                  </div>

                  {/* HEADING */}
                  <h2
                    className={`
                      mt-6 max-w-full break-words text-[19px]
                      font-extrabold tracking-tight sm:mt-7 sm:text-2xl
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
                  <p className="mt-2 max-w-[270px] break-words text-[10px] leading-5 text-slate-500 sm:max-w-[280px] sm:text-[11px]">

                    {isCorrect
                      ? "Your answer matched the CAPTCHA shown. Your reward is ready."
                      : "The selected code doesn't match the image shown."}

                  </p>

                  {/* SUCCESS */}
                  {isCorrect ? (
                    <>

                      <p className="mt-4 text-[10px] text-slate-500 sm:mt-5 sm:text-[11px]">
                        You earned
                      </p>

                      {/* Reward */}
                      <div className="mt-1.5 flex min-w-0 items-center justify-center gap-2">

                        <Gem
                          size={23}
                          strokeWidth={2}
                          className="shrink-0 text-amber-300"
                        />

                        <span className="whitespace-nowrap text-xl font-black text-amber-300 sm:text-2xl">
                          +{reward} Gem
                        </span>

                      </div>

                      {/* Balance */}
                      <div className="mt-5 w-full min-w-0 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-3 sm:mt-6 sm:px-4 sm:py-3.5">

                        <div className="flex min-w-0 items-center justify-between gap-2">

                          <div className="min-w-0 text-left">

                            <p className="truncate text-[7px] font-semibold uppercase tracking-[0.08em] text-slate-600 sm:text-[8px] sm:tracking-[0.1em]">
                              Previous Balance
                            </p>

                            <p className="mt-1 text-sm font-bold text-white">
                              {previousBalance.toFixed(2)}
                            </p>

                          </div>

                          <ArrowRight
                            size={18}
                            className="shrink-0 text-slate-500"
                          />

                          <div className="min-w-0 text-right">

                            <p className="truncate text-[7px] font-semibold uppercase tracking-[0.08em] text-slate-600 sm:text-[8px] sm:tracking-[0.1em]">
                              New Balance
                            </p>

                            <p className="mt-1 text-sm font-bold text-emerald-300">
                              {newBalance.toFixed(2)}
                            </p>

                          </div>

                        </div>

                      </div>

                      {/* BUTTONS */}
                      <div className="mt-3 w-full min-w-0 space-y-2 sm:mt-3.5 sm:space-y-2.5">

                        <button
                          type="button"
                          onClick={onClaim}
                          className="flex w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-3 py-3 text-[13px] font-bold text-slate-950 shadow-[0_8px_25px_rgba(16,185,129,0.15)] transition hover:brightness-110 active:scale-[0.98] sm:px-4 sm:py-3.5 sm:text-sm"
                        >
                          <span>Add to Balance</span>
                          <ArrowRight size={14} className="shrink-0" />
                        </button>

                        <button
                          type="button"
                          onClick={onNoThanks}
                          className="w-full min-w-0 rounded-xl border border-white/[0.09] bg-white/[0.02] px-3 py-2.5 text-[13px] font-semibold text-slate-300 transition hover:border-white/[0.14] hover:bg-white/[0.05] sm:px-4 sm:py-3 sm:text-sm"
                        >
                          Maybe Later
                        </button>

                      </div>

                    </>
                  ) : (
                    /* INCORRECT */
                    <>

                      <p className="mt-5 max-w-[240px] break-words text-[10px] leading-5 text-slate-500 sm:mt-6 sm:text-[11px]">
                        Please try again with a new challenge.
                      </p>

                      <div className="mt-6 w-full min-w-0 space-y-2 sm:mt-7 sm:space-y-2.5">

                        <button
                          type="button"
                          onClick={onNoThanks}
                          className="flex w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-400 px-3 py-3 text-[13px] font-bold text-white shadow-[0_8px_25px_rgba(239,68,68,0.12)] transition hover:brightness-110 active:scale-[0.98] sm:px-4 sm:py-3.5 sm:text-sm"
                        >
                          Try Again
                        </button>

                        <button
                          type="button"
                          onClick={onNoThanks}
                          className="flex w-full min-w-0 items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.02] px-3 py-2.5 text-[13px] font-semibold text-slate-300 transition hover:border-white/[0.14] hover:bg-white/[0.05] sm:px-4 sm:py-3 sm:text-sm"
                        >
                          <RefreshCw size={14} className="shrink-0" />
                          <span>Get New Code</span>
                        </button>

                      </div>

                    </>
                  )}

                  {/* SECURITY FOOTER */}
                  <div className="mt-auto w-full min-w-0 pt-4 sm:pt-5">

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5 sm:p-3">

                      <div className="flex min-w-0 items-center gap-2.5 text-left">

                        <ShieldCheck
                          size={15}
                          className="shrink-0 text-slate-500"
                        />

                        <p className="min-w-0 break-words text-[8px] leading-4 text-slate-500 sm:text-[9px]">

                          {isCorrect
                            ? "Your reward has been successfully added to the verification flow."
                            : "Security checks help keep your account safe from automated access."}

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* DESKTOP FEATURE STRIP */}
        <div className="mt-8 hidden w-full max-w-5xl overflow-hidden rounded-2xl border border-white/[0.07] bg-[#09111d] md:grid md:grid-cols-5">

          {[
            ["🛡", "SECURE", "Advanced protection"],
            ["🎁", "REWARDING", "Earn Gems"],
            ["⚡", "FAST", "Quick verification"],
            ["▣", "MOBILE FIRST", "Optimized experience"],
            ["🔒", "TRUSTED", "Security first"],
          ].map(([icon, title, description], index) => (

            <div
              key={title}
              className={`p-4 text-center ${
                index !== 4
                  ? "border-r border-white/[0.06]"
                  : ""
              }`}
            >

              <div className="text-lg">
                {icon}
              </div>

              <p className="mt-2 text-[9px] font-bold tracking-[0.12em] text-slate-300">
                {title}
              </p>

              <p className="mt-1 text-[8px] text-slate-600">
                {description}
              </p>

            </div>

          ))}

        </div>

        <div className="h-4" />

      </div>

    </main>
  );
}

export default ResultScreen;