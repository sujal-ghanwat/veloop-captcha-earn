import { LockKeyhole, ShieldCheck } from "lucide-react";

function CheckingScreen() {
  return (
    <div className="relative flex w-full justify-center px-3 py-5 sm:px-5 sm:py-7">
      <div className="w-full max-w-[360px]">
        <div className="relative overflow-hidden rounded-[28px] border border-purple-400/20 bg-[#06101c] px-4 py-7 shadow-[0_25px_70px_rgba(0,0,0,0.45)] sm:px-7 sm:py-10">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-44 w-44 -translate-x-1/2 rounded-full bg-purple-500/[0.08] blur-3xl" />

          {/* Verification Animation */}
          <div className="relative mx-auto flex h-44 w-44 items-center justify-center">

            {/* Outer rotating ring */}
            <div
              className="
                absolute inset-1
                rounded-full
                border border-purple-400/20
                border-t-purple-300/80
                animate-[spin_2.8s_linear_infinite]
              "
            />

            {/* Second ring */}
            <div
              className="
                absolute inset-4
                rounded-full
                border border-blue-400/15
                border-b-blue-300/70
                animate-[spin_2s_linear_infinite_reverse]
              "
            />

            {/* Pulse ring */}
            <div
              className="
                absolute inset-8
                rounded-full
                border border-purple-300/15
                animate-ping
                opacity-20
              "
            />

            {/* Center glow */}
            <div className="absolute h-24 w-24 rounded-full bg-purple-500/[0.10] blur-xl" />

            {/* Lock */}
            <div
              className="
                relative z-10
                flex h-20 w-20
                items-center justify-center
                rounded-full
                border border-purple-300/30
                bg-[#0b1728]
                shadow-[0_0_40px_rgba(168,85,247,0.18)]
              "
            >
              <LockKeyhole
                size={32}
                strokeWidth={1.6}
                className="text-purple-200"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="relative mt-5 text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-purple-300/80">
              Secure Process
            </p>

            <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              Verifying...
            </h2>

            <p className="mx-auto mt-2 max-w-[260px] text-[11px] leading-5 text-slate-400 sm:text-xs">
              Please wait while we securely verify your CAPTCHA response.
            </p>
          </div>

          {/* Progress */}
          <div className="relative mt-7">
            <div className="flex items-center justify-between text-[9px]">
              <span className="font-semibold uppercase tracking-wider text-slate-400">
                Verification
              </span>

              <span className="text-purple-300">
                Processing
              </span>
            </div>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="
                  h-full w-[65%]
                  rounded-full
                  bg-gradient-to-r
                  from-blue-400
                  via-purple-400
                  to-purple-300
                  shadow-[0_0_14px_rgba(168,85,247,0.45)]
                  animate-pulse
                "
              />
            </div>

            <div className="mt-2 flex justify-between text-[8px] text-slate-400">
              <span>Secure connection</span>
              <span>Please wait</span>
            </div>
          </div>

          {/* Security message */}
          <div className="relative mt-7 flex items-center gap-3 rounded-2xl border border-blue-400/10 bg-blue-400/[0.035] px-3.5 py-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.06]">
              <ShieldCheck
                size={16}
                strokeWidth={1.8}
                className="text-blue-300"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-slate-300">
                Secure Verification
              </p>

              <p className="mt-0.5 text-[8px] leading-4 text-slate-400">
                Your response is being processed securely.
              </p>
            </div>
          </div>

          {/* Bottom indicator */}
          <div className="relative mt-6 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />

            <span className="text-[8px] tracking-wide text-slate-400">
              Checking your response...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckingScreen;