import { RefreshCw, ShieldCheck, Sparkles } from "lucide-react";

function CaptchaChallenge({ captcha, onRefresh }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-blue-400/25
        bg-gradient-to-br from-[#0b1c31] via-[#081625] to-[#0a1020]
        shadow-[0_18px_50px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:border-blue-400/35
        hover:shadow-[0_18px_55px_rgba(37,99,235,0.14)]
      "
    >
      {/* Blue atmosphere */}
      <div
        className="
          pointer-events-none absolute -left-16 top-1/2
          h-40 w-40 -translate-y-1/2
          rounded-full bg-blue-500/[0.12]
          blur-3xl
        "
        aria-hidden="true"
      />

      {/* Purple atmosphere */}
      <div
        className="
          pointer-events-none absolute -right-16 bottom-[-30px]
          h-40 w-40 rounded-full
          bg-purple-500/[0.10]
          blur-3xl
        "
        aria-hidden="true"
      />

      {/* Top highlight */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-0
          h-px w-3/4 -translate-x-1/2
          bg-gradient-to-r from-transparent via-blue-400/40 to-transparent
        "
        aria-hidden="true"
      />

      <div className="relative px-4 py-4 sm:px-5 sm:py-5">

        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-1.5">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-blue-400/15 bg-blue-400/[0.07]">
              <ShieldCheck
                size={13}
                strokeWidth={1.8}
                className="text-blue-300"
              />
            </div>

            <span className="truncate text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
              Security Challenge
            </span>
          </div>

          <div className="ml-2 flex shrink-0 items-center gap-1 rounded-full border border-blue-400/15 bg-blue-400/[0.06] px-2 py-1">
            <Sparkles size={9} className="text-blue-300" />

            <span className="text-[8px] font-bold tracking-[0.08em] text-blue-200/80">
              CAPTCHA
            </span>
          </div>
        </div>

        {/* CAPTCHA display */}
        <div
          className="
            group/code relative overflow-hidden rounded-xl
            border border-blue-300/20
            bg-[#071321]
            shadow-[inset_0_0_30px_rgba(59,130,246,0.04)]
            transition-all duration-300
            group-hover:border-blue-300/30
          "
        >
          {/* Security grid */}
          <div
            className="
              pointer-events-none absolute inset-0
              opacity-[0.045]
              [background-image:linear-gradient(rgba(96,165,250,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.8)_1px,transparent_1px)]
              [background-size:22px_22px]
            "
            aria-hidden="true"
          />

          {/* Decorative lines */}
          <div
            className="
              pointer-events-none absolute left-[-10%] top-[20%]
              h-px w-[120%] rotate-[7deg]
              bg-gradient-to-r from-transparent via-blue-400/30 to-transparent
            "
            aria-hidden="true"
          />

          <div
            className="
              pointer-events-none absolute left-[-10%] top-[72%]
              h-px w-[120%] -rotate-[5deg]
              bg-gradient-to-r from-transparent via-purple-400/25 to-transparent
            "
            aria-hidden="true"
          />

          {/* Scan line */}
          <div
            className="
              pointer-events-none absolute left-0 top-1/2
              h-px w-full
              bg-gradient-to-r from-transparent via-white/[0.08] to-transparent
            "
            aria-hidden="true"
          />

          {/* Security dots */}
          <div
            className="pointer-events-none absolute left-4 top-4 h-1 w-1 rounded-full bg-blue-400/50"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute right-5 top-5 h-1 w-1 rounded-full bg-purple-400/40"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute bottom-4 left-6 h-1 w-1 rounded-full bg-blue-300/30"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute bottom-4 right-5 h-1 w-1 rounded-full bg-purple-300/30"
            aria-hidden="true"
          />

          {/* Code */}
          <div className="relative flex min-h-[88px] w-full items-center justify-center overflow-hidden px-2 sm:min-h-[96px] sm:px-4">
            <p
              className="
                select-none
                max-w-full
                overflow-hidden
                whitespace-nowrap
                text-center
                font-mono
                text-[21px]
                font-black
                tracking-[0.10em]
                text-white
                drop-shadow-[0_0_14px_rgba(96,165,250,0.45)]
                transition-transform duration-300
                group-hover/code:scale-[1.025]
                sm:text-[27px]
                sm:tracking-[0.15em]
              "
            >
              {captcha.split("").join(" ")}
            </p>
          </div>

          {/* Bottom status */}
          <div className="relative flex items-center justify-center border-t border-white/[0.05] bg-white/[0.015] px-3 py-1.5">
            <span className="text-[7px] font-semibold uppercase tracking-[0.16em] text-slate-600">
              Secure visual verification
            </span>
          </div>
        </div>

        {/* New code */}
        <button
          type="button"
         onClick={onRefresh}
         aria-label="Generate a new CAPTCHA code"
         className="
          group/refresh mx-auto mt-3
         flex min-h-[40px] items-center gap-1.5
         rounded-xl
         border border-blue-400/10
         bg-blue-400/[0.025]
         px-4 py-2
         text-[10px] font-bold
         text-slate-300
         transition-all duration-300
         touch-manipulation
         hover:-translate-y-[1px]
         hover:border-blue-400/25
         hover:bg-blue-400/[0.08]
         hover:text-blue-100
         hover:shadow-[0_6px_20px_rgba(37,99,235,0.12)]
         active:translate-y-0
         active:scale-[0.97]
         focus-visible:outline-none
         focus-visible:ring-2
         focus-visible:ring-blue-400/40
         focus-visible:ring-offset-2
         focus-visible:ring-offset-[#06101c]
        "
       >
          <RefreshCw
            size={12}
            strokeWidth={2}
            className="
              transition-transform duration-500
              group-hover/refresh:rotate-180
            "
          />

          <span>New Code</span>
        </button>

        {/* Helper */}
        <p className="mt-1 text-center text-[8px] leading-4 text-slate-600">
          Select the matching code below
        </p>
      </div>
    </div>
  );
}

export default CaptchaChallenge;