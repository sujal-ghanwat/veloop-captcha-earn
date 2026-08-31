function PhoneShell({ children }) {
  return (
    <div className="mx-auto w-full min-w-0 max-w-[390px] px-0">
      {/* Phone outer frame */}
      <div className="relative w-full min-w-0 overflow-hidden rounded-[28px] border border-slate-600/50 bg-[#020711] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:rounded-[34px] sm:p-2">

        {/* Subtle outer glow */}
        <div className="pointer-events-none absolute -inset-1 -z-10 rounded-[32px] bg-blue-500/[0.04] blur-2xl sm:rounded-[38px]" />

        {/* Phone screen */}
        <div className="relative min-h-[650px] w-full min-w-0 overflow-hidden rounded-[22px] border border-white/[0.06] bg-[#06101c] sm:min-h-[690px] sm:rounded-[27px]">

          {/* Top speaker */}
          <div className="absolute left-1/2 top-2 z-30 h-1 w-12 -translate-x-1/2 rounded-full bg-white/10 sm:w-16" />

          {children}

        </div>
      </div>
    </div>
  );
}

export default PhoneShell;