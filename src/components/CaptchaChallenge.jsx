import { RefreshCw } from "lucide-react";

function CaptchaChallenge({ captcha, onRefresh }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-[#081625] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_12px_35px_rgba(0,0,0,0.22)]">
      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -left-12 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative px-4 py-4 sm:px-5 sm:py-5">
        {/* CAPTCHA Code */}
        <div className="flex min-h-[70px] items-center justify-center rounded-xl border border-blue-300/15 bg-[#0b1a2b] px-3 sm:min-h-[76px]">
          <p className="select-none font-mono text-[25px] font-bold tracking-[0.18em] text-slate-100 sm:text-[29px] sm:tracking-[0.22em]">
            {captcha.split("").join(" ")}
          </p>
        </div>

        {/* New Code */}
        <button
          type="button"
          onClick={onRefresh}
          className="mx-auto mt-3 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10px] font-semibold text-slate-400 transition-all duration-200 hover:bg-white/[0.04] hover:text-blue-200 active:scale-95"
        >
          <RefreshCw
            size={12}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:rotate-180"
          />
          New Code
        </button>
      </div>
    </div>
  );
}

export default CaptchaChallenge;