import { motion } from "framer-motion";
import { ScanSearch, ShieldCheck } from "lucide-react";

function CheckingScreen() {
  return (
    <div className="flex min-h-[calc(100vh-73px)] items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-10"
      >
        {/* Animated verification icon */}
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-slate-50">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-slate-200">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-slate-800"
            />

            <ScanSearch size={23} className="text-slate-700" />
          </div>
        </div>

        <div className="mb-2 flex items-center justify-center gap-2">
          <ShieldCheck size={16} className="text-slate-500" />

          <h2 className="text-xl font-bold text-slate-900">
            Checking your answer
          </h2>
        </div>

        <p className="text-sm leading-6 text-slate-500">
          We're verifying your CAPTCHA selection.
        </p>

        {/* Progress dots */}
        <div className="mt-7 flex justify-center gap-1.5">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{
                opacity: [0.25, 1, 0.25],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: dot * 0.15,
              }}
              className="h-1.5 w-1.5 rounded-full bg-slate-700"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default CheckingScreen;