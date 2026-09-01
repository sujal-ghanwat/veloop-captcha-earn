function PhoneShell({ children }) {
  return (
    <div className="mx-auto w-full max-w-[390px] min-w-0 px-0">
      {/* Phone outer frame */}
      <div
        className="
          relative mx-auto w-full min-w-0
          overflow-hidden
          rounded-[28px] border border-slate-600/50
          bg-[#020711]
          p-1
          shadow-[0_25px_80px_rgba(0,0,0,0.55)]
          sm:rounded-[32px] sm:p-1.5
        "
      >
        {/* Subtle outer glow */}
        <div
          className="
            pointer-events-none absolute inset-0
            rounded-[28px]
            bg-blue-500/[0.025]
            blur-xl
            sm:rounded-[32px]
          "
          aria-hidden="true"
        />

        {/* Phone screen */}
        <div
          className="
            relative z-10 w-full min-w-0
            overflow-hidden
            rounded-[23px]
            border border-white/[0.06]
            bg-[#06101c]
            sm:rounded-[26px]
          "
        >
          {/* Top speaker */}
          <div
            className="
              absolute left-1/2 top-2 z-30
              h-1 w-12
              -translate-x-1/2
              rounded-full bg-white/10
              sm:w-14
            "
            aria-hidden="true"
          />

          {children}
        </div>
      </div>
    </div>
  );
}

export default PhoneShell;