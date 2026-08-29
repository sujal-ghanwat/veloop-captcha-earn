function PhoneShell({ children }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "390px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        position: "relative",
      }}
    >
      {/* Phone outer frame */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[34px]
          border
          border-slate-600/50
          bg-[#020711]
          p-2
          shadow-[0_30px_100px_rgba(0,0,0,0.55)]
        "
      >
        {/* Subtle outer glow */}
        <div
          className="
            pointer-events-none
            absolute
            -inset-1
            -z-10
            rounded-[38px]
            bg-blue-500/[0.04]
            blur-2xl
          "
        />

        {/* Phone screen */}
        <div
          className="
            relative
            min-h-[690px]
            w-full
            overflow-hidden
            rounded-[27px]
            border
            border-white/[0.06]
            bg-[#06101c]
          "
        >
          {/* Top speaker */}
          <div
            className="
              absolute
              left-1/2
              top-2
              z-30
              h-1
              w-16
              -translate-x-1/2
              rounded-full
              bg-white/10
            "
          />

          {/* Content */}
          <div className="relative z-10 w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneShell;