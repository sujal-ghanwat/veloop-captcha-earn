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
  onClaim,
  onNoThanks,
}) {
  const previousBalance = 125.5;
  const newBalance = previousBalance + reward;

  return (
    <main className="relative min-h-[calc(100vh-68px)] w-full overflow-hidden bg-[#020711]">

      {/* Background glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl ${
          isCorrect
            ? "bg-emerald-500/[0.035]"
            : "bg-red-500/[0.035]"
        }`}
      />

      {/* Main container */}
      <div
           className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
            style={{
            marginLeft: "auto",
            marginRight: "auto",
       }}
      >
        {/* ================================
            PAGE BRANDING
        ================================= */}
        <div className="mb-7 text-center">

          <div className="mb-2 flex items-center justify-center gap-2">

            <Gem
              size={21}
              strokeWidth={2}
              className="text-amber-300"
            />

            <span className="text-xs font-bold tracking-[0.24em] text-white sm:text-sm">
              VELOOP REWARDS
            </span>

          </div>

          <h1 className="text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">

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

          <p className="mt-2 text-[10px] font-medium tracking-wide text-slate-500 sm:text-xs">

            Secure Verification

            <span className="mx-2 text-slate-700">
              •
            </span>

            Earn Rewards

            <span className="mx-2 text-slate-700">
              •
            </span>

            Build Trust

          </p>

        </div>

        {/* ================================
            PROGRESS FLOW
        ================================= */}
        <div className="mb-8 hidden w-full max-w-5xl md:block">

          <div className="relative flex items-start justify-between">

            {/* Connecting line */}
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

                  {/* Number */}
                  <div
                    className={`
                      flex h-10 w-10 items-center justify-center
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

                  {/* Label */}
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

        {/* ================================
            CENTERED RESULT CARD
        ================================= */}
        <div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "390px",
      marginLeft: "auto",
      marginRight: "auto",
    }}
  >

            {/* Phone outer frame */}
            <div
              className={`
                relative overflow-hidden rounded-[34px]
                border bg-[#020711] p-2
                shadow-[0_30px_100px_rgba(0,0,0,0.65)]
                ${
                  isCorrect
                    ? "border-emerald-400/20"
                    : "border-red-400/20"
                }
              `}
            >

              {/* Phone screen */}
              <div
                className={`
                  relative min-h-[680px] overflow-hidden
                  rounded-[27px] border bg-[#06101c]
                  ${
                    isCorrect
                      ? "border-emerald-400/[0.08]"
                      : "border-red-400/[0.08]"
                  }
                `}
              >

                {/* Subtle screen glow */}
                <div
                  className={`
                    pointer-events-none absolute left-1/2 top-20
                    h-56 w-56 -translate-x-1/2 rounded-full
                    blur-3xl
                    ${
                      isCorrect
                        ? "bg-emerald-400/[0.025]"
                        : "bg-red-400/[0.025]"
                    }
                  `}
                />

                {/* Speaker */}
                <div className="absolute left-1/2 top-2 z-30 h-1 w-14 -translate-x-1/2 rounded-full bg-white/10" />

                {/* ================================
                    MOBILE HEADER
                ================================= */}
                <div className="relative z-10 flex items-center justify-between px-4 pt-7">

                  {/* Back */}
                  <button
                    type="button"
                    onClick={onNoThanks}
                    aria-label="Go back"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-slate-400 transition hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white"
                  >
                    <span className="text-lg leading-none">
                      ←
                    </span>
                  </button>

                  {/* Logo */}
                  <div className="text-center">

                    <p className="text-sm font-bold tracking-[0.16em] text-white">
                      VELOOP
                    </p>

                    <p className="text-[7px] font-bold uppercase tracking-[0.22em] text-slate-500">
                      Rewards
                    </p>

                  </div>

                  {/* Balance */}
                  <div className="flex items-center gap-1.5 rounded-full border border-amber-300/15 bg-amber-300/[0.05] px-2.5 py-1.5">

                    <Gem
                      size={12}
                      className="text-amber-300"
                    />

                    <span className="text-[10px] font-bold text-amber-200">
                      {previousBalance.toFixed(2)}
                    </span>

                  </div>

                </div>

                {/* ================================
                    RESULT CONTENT
                ================================= */}
                <div className="relative z-10 flex min-h-[590px] flex-col items-center px-5 pb-5 pt-10 text-center">

                  {/* Result icon */}
                  <div
                    className={`
                      relative flex h-32 w-32 items-center
                      justify-center rounded-full
                      ${
                        isCorrect
                          ? "border border-emerald-400/20 bg-emerald-400/[0.035]"
                          : "border border-red-400/20 bg-red-400/[0.035]"
                      }
                    `}
                  >

                    {/* Outer ring */}
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

                    {/* Middle ring */}
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

                    {/* Inner circle */}
                    <div
                      className={`
                        flex h-16 w-16 items-center
                        justify-center rounded-full
                        ${
                          isCorrect
                            ? "bg-emerald-400/[0.10]"
                            : "bg-red-400/[0.10]"
                        }
                      `}
                    >

                      {isCorrect ? (
                        <Check
                          size={36}
                          strokeWidth={2.5}
                          className="text-emerald-300"
                        />
                      ) : (
                        <X
                          size={36}
                          strokeWidth={2.5}
                          className="text-red-300"
                        />
                      )}

                    </div>

                  </div>

                  {/* Heading */}
                  <h2
                    className={`
                      mt-7 text-[22px] font-extrabold
                      tracking-tight sm:text-2xl
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

                  {/* Description */}
                  <p className="mt-2 max-w-[280px] text-[11px] leading-5 text-slate-500">

                    {isCorrect
                      ? "Your answer matched the CAPTCHA shown. Your reward is ready."
                      : "The selected code doesn't match the image shown."}

                  </p>

                  {/* ================================
                      SUCCESS
                  ================================= */}
                  {isCorrect ? (
                    <>

                      <p className="mt-5 text-[11px] text-slate-500">
                        You earned
                      </p>

                      {/* Reward */}
                      <div className="mt-1.5 flex items-center justify-center gap-2">

                        <Gem
                          size={25}
                          strokeWidth={2}
                          className="text-amber-300"
                        />

                        <span className="text-2xl font-black text-amber-300">
                          +{reward} Gem
                        </span>

                      </div>

                      {/* Balance Card */}
                      <div className="mt-6 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3.5">

                        <div className="flex items-center justify-between">

                          {/* Previous */}
                          <div className="text-left">

                            <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-slate-600">
                              Previous Balance
                            </p>

                            <p className="mt-1 text-sm font-bold text-white">
                              {previousBalance.toFixed(2)}
                            </p>

                          </div>

                          {/* Arrow */}
                          <ArrowRight
                            size={20}
                            className="text-slate-500"
                          />

                          {/* New */}
                          <div className="text-right">

                            <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-slate-600">
                              New Balance
                            </p>

                            <p className="mt-1 text-sm font-bold text-emerald-300">
                              {newBalance.toFixed(2)}
                            </p>

                          </div>

                        </div>

                      </div>

                      {/* Buttons */}
                      <div className="mt-3.5 w-full space-y-2.5">

                        <button
                          type="button"
                          onClick={onClaim}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-4 py-3.5 text-sm font-bold text-slate-950 shadow-[0_8px_25px_rgba(16,185,129,0.15)] transition hover:brightness-110 active:scale-[0.98]"
                        >
                          Add to Balance
                          <ArrowRight size={15} />
                        </button>

                        <button
                          type="button"
                          onClick={onNoThanks}
                          className="w-full rounded-xl border border-white/[0.09] bg-white/[0.02] px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/[0.14] hover:bg-white/[0.05]"
                        >
                          Maybe Later
                        </button>

                      </div>

                    </>
                  ) : (
                    /* ================================
                       INCORRECT
                    ================================= */
                    <>

                      <p className="mt-6 max-w-[250px] text-[11px] leading-5 text-slate-500">
                        Please try again with a new challenge.
                      </p>

                      <div className="mt-7 w-full space-y-2.5">

                        <button
                          type="button"
                          onClick={onNoThanks}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-400 px-4 py-3.5 text-sm font-bold text-white shadow-[0_8px_25px_rgba(239,68,68,0.12)] transition hover:brightness-110 active:scale-[0.98]"
                        >
                          Try Again
                        </button>

                        <button
                          type="button"
                          onClick={onNoThanks}
                          className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.02] px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/[0.14] hover:bg-white/[0.05]"
                        >
                          <RefreshCw size={14} />
                          Get New Code
                        </button>

                      </div>

                    </>
                  )}

                  {/* ================================
                      SECURITY FOOTER
                  ================================= */}
                  <div className="mt-auto w-full pt-5">

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">

                      <div className="flex items-center gap-2.5 text-left">

                        <ShieldCheck
                          size={16}
                          className="shrink-0 text-slate-500"
                        />

                        <p className="text-[9px] leading-4 text-slate-500">

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

        {/* ================================
            DESKTOP FEATURE STRIP
        ================================= */}
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
              className={`
                p-4 text-center
                ${
                  index !== 4
                    ? "border-r border-white/[0.06]"
                    : ""
                }
              `}
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

        {/* Bottom spacing */}
        <div className="h-4" />

      </div>

    </main>
  );
}

export default ResultScreen;