function PhoneShell({ children }) {
  return (
    <div className="mx-auto w-full min-w-0 max-w-[390px]">
      {/* Premium Phone Frame */}
      <div
        className="
          relative mx-auto w-full min-w-0
          overflow-hidden
          rounded-[28px]
          border border-blue-400/20
          bg-[#020711]
          p-1
          shadow-[0_24px_70px_rgba(0,0,0,0.55)]
          transition-all duration-500
          sm:rounded-[32px]
          sm:border-blue-400/25
          sm:p-1.5
        "
      >
        {/* Outer blue glow */}
        <div
          className="
            pointer-events-none absolute
            -inset-1
            rounded-[31px]
            bg-blue-500/[0.055]
            blur-2xl
          "
          aria-hidden="true"
        />

        {/* Purple atmospheric glow */}
        <div
          className="
            pointer-events-none absolute
            -bottom-20 -right-16
            h-40 w-40
            rounded-full
            bg-purple-500/[0.055]
            blur-3xl
          "
          aria-hidden="true"
        />

        {/* Gold atmospheric glow */}
        <div
          className="
            pointer-events-none absolute
            -bottom-16 -left-12
            h-32 w-32
            rounded-full
            bg-amber-400/[0.025]
            blur-3xl
          "
          aria-hidden="true"
        />

        {/* Phone Screen */}
        <div
          className="
          relative z-10
          w-full min-w-0
          min-h-[600px]
          overflow-hidden
          rounded-[24px]
          border border-white/[0.07]
         bg-[#06101c]
         shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]
         sm:min-h-[650px]
         sm:rounded-[27px]
        "
        >
          {/* Top speaker / camera */}
          <div
            className="
              pointer-events-none absolute
              left-1/2 top-2.5 z-30
              flex -translate-x-1/2
              items-center gap-1.5
            "
            aria-hidden="true"
          >
            <span className="h-1 w-7 rounded-full bg-white/[0.09] sm:w-9" />

            <span className="h-1.5 w-1.5 rounded-full bg-blue-400/20 shadow-[0_0_5px_rgba(96,165,250,0.2)]" />
          </div>

          {/* Top screen highlight */}
          <div
            className="
              pointer-events-none absolute
              left-7 right-7 top-0 z-20
              h-px
              bg-gradient-to-r
              from-transparent
              via-blue-300/20
              to-transparent
            "
            aria-hidden="true"
          />

          {/* Screen content */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default PhoneShell;