function PhoneShell({ children }) {
  return (
    <div className="mx-auto w-full max-w-[390px] min-w-0 overflow-x-clip px-0">
      
      <div className="relative mx-auto w-full max-w-full min-w-0 overflow-hidden rounded-[30px] border border-slate-600/50 bg-[#020711] p-1.5 shadow-[0_30px_100px_rgba(0,0,0,0.55)] sm:rounded-[34px] sm:p-2">

        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[30px] bg-blue-500/[0.025] blur-xl sm:rounded-[34px]"
          aria-hidden="true"
        />

        {/* Screen */}
        <div className="relative z-10 min-h-[690px] w-full max-w-full min-w-0 overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#06101c] sm:rounded-[27px]">

          {/* Speaker */}
          <div
            className="absolute left-1/2 top-2 z-30 h-1 w-14 -translate-x-1/2 rounded-full bg-white/10 sm:w-16"
            aria-hidden="true"
          />

          {children}

        </div>
      </div>
    </div>
  );
}

export default PhoneShell;