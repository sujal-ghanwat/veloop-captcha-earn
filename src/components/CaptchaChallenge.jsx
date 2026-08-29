import { RefreshCw, ShieldCheck } from "lucide-react";

function CaptchaChallenge({ captcha }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070e18]">

      {/* subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-3xl" />

      <div className="relative p-5 sm:p-7">

        {/* Header */}
        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <ShieldCheck
              size={14}
              className="text-blue-300"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Security verification
            </span>
          </div>

          <span className="rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-emerald-300">
            Active
          </span>

        </div>

        {/* CAPTCHA code */}
        <div className="relative flex min-h-[105px] items-center justify-center overflow-hidden rounded-xl border border-blue-400/10 bg-[#050a12]">

          {/* decorative lines */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-blue-400/[0.06]" />

          <div className="pointer-events-none absolute left-1/4 top-0 h-full w-px rotate-[18deg] bg-purple-400/[0.05]" />

          <div className="pointer-events-none absolute right-1/4 top-0 h-full w-px -rotate-[18deg] bg-blue-400/[0.05]" />

          <p className="relative select-none font-mono text-3xl font-bold tracking-[0.25em] text-slate-100 sm:text-4xl">
            {captcha}
          </p>

        </div>

        {/* Refresh information */}
        <div className="mt-4 flex items-center justify-center gap-2 text-slate-500">

          <RefreshCw size={12} />

          <span className="text-[10px] font-medium">
            Match the code exactly
          </span>

        </div>

      </div>
    </div>
  );
}

export default CaptchaChallenge;