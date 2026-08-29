import { LoaderCircle, ShieldCheck } from "lucide-react";

function CheckingScreen() {
  return (
    <div className="flex min-h-[calc(100vh-74px)] items-center justify-center px-5 py-10">

      <div className="w-full max-w-md rounded-3xl border border-white/[0.08] bg-[#09111d] p-7 text-center shadow-[0_25px_80px_rgba(0,0,0,0.4)] sm:p-9">

        {/* Icon */}
        <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-purple-400/15 bg-purple-400/[0.05]">

          <div className="absolute inset-0 rounded-full border border-purple-400/10 animate-ping" />

          <LoaderCircle
            size={34}
            strokeWidth={1.6}
            className="animate-spin text-purple-300"
          />

        </div>

        {/* Text */}
        <p className="mt-7 text-xl font-bold tracking-tight text-white">
          Checking your response
        </p>

        <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-slate-500">
          We're comparing your selection with the
          generated security challenge.
        </p>

        {/* Progress */}
        <div className="mt-7">

          <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">

            <div className="h-full w-3/4 animate-pulse rounded-full bg-gradient-to-r from-blue-500 via-purple-400 to-cyan-300" />

          </div>

          <div className="mt-3 flex justify-between text-[9px] font-bold uppercase tracking-[0.14em] text-slate-600">

            <span>Verifying</span>
            <span>Please wait</span>

          </div>

        </div>

        {/* Security message */}
        <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-left">

          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800">
            <ShieldCheck
              size={15}
              className="text-blue-300"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-300">
              Secure verification
            </p>

            <p className="mt-1 text-[10px] leading-4 text-slate-500">
              Keep this window open while your response
              is being verified.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default CheckingScreen;