import { motion } from "framer-motion";
import { ScanLine, ShieldCheck } from "lucide-react";

function CaptchaChallenge({ captcha }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-md"
    >
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.09)]">

        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900">
              <ShieldCheck
                size={16}
                className="text-white"
              />
            </div>

            <div>
              <p className="text-xs font-bold text-slate-800">
                Security check
              </p>

              <p className="text-[10px] text-slate-400">
                Human verification
              </p>
            </div>
          </div>

          <ScanLine
            size={18}
            className="text-slate-400"
          />
        </div>

        {/* CAPTCHA area */}
        <div className="p-5 sm:p-7">
          <div className="relative flex min-h-36 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">

            {/* Decorative lines */}
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-slate-200" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-slate-200" />

            <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-slate-200/50 blur-2xl" />

            <div className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-slate-200/50 blur-2xl" />

            {/* CAPTCHA */}
            <motion.div
              key={captcha}
              initial={{
                opacity: 0,
                scale: 0.85,
                rotate: -2,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.45,
              }}
              className="relative select-none rounded-xl border border-slate-200 bg-white px-6 py-4 shadow-sm"
            >
              <span className="font-mono text-3xl font-black tracking-[0.22em] text-slate-800 sm:text-4xl">
                {captcha}
              </span>
            </motion.div>
          </div>

          <p className="mt-4 text-center text-[11px] font-medium text-slate-400">
            Identify the exact characters shown above
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default CaptchaChallenge;