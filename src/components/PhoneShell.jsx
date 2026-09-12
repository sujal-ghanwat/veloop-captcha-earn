function PhoneShell({ children }) {
  return (
    <div className="mx-auto w-full max-w-[390px] min-w-0 px-1 sm:px-0">
      {/* Premium Phone Frame */}
      <div
        className="
          relative mx-auto w-full min-w-0
          overflow-hidden
          rounded-[30px]
          border border-blue-400/20
          bg-[#020711]
          p-1
          shadow-[0_25px_80px_rgba(0,0,0,0.55)]
          transition-all duration-500
          sm:rounded-[34px] sm:border-blue-400/25 sm:p-1.5
        "
      >
        {/* Blue outer glow */}
        <div
          className="
            pointer-events-none absolute
            -inset-1
            rounded-[32px]
            bg-blue-500/[0.07]
            blur-2xl
          "
          aria-hidden="true"
        />

        {/* Purple secondary glow */}
        <div
          className="
            pointer-events-none absolute
            -bottom-20 -right-16
            h-40 w-40
            rounded-full
            bg-purple-500/[0.06]
            blur-3xl
          "
          aria-hidden="true"
        />

        {/* Phone Screen */}
        <div
          className="
            relative z-10
            w-full min-w-0
            overflow-hidden
            rounded-[25px]
            border border-white/[0.07]
            bg-[#06101c]
            shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]
            sm:rounded-[28px]
          "
        >
          {/* Top speaker / camera area */}
          <div
            className="
              pointer-events-none absolute
              left-1/2 top-2.5 z-30
              flex -translate-x-1/2
              items-center gap-1.5
            "
            aria-hidden="true"
          >
            <span className="h-1 w-8 rounded-full bg-white/[0.10] sm:w-10" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400/20" />
          </div>

          {/* Top highlight */}
          <div
            className="
              pointer-events-none absolute
              left-8 right-8 top-0 z-20
              h-px
              bg-gradient-to-r
              from-transparent
              via-blue-300/20
              to-transparent
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