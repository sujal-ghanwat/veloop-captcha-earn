function FlowSteps({ currentStep = 1 }) {
  const steps = [
    {
      number: "1",
      label: "CHALLENGE",
      active:
        "border-blue-400/70 bg-blue-400/[0.10] text-blue-300 shadow-[0_0_22px_rgba(59,130,246,0.18)]",
      complete:
        "border-blue-400/35 bg-blue-400/[0.06] text-blue-300",
    },
    {
      number: "2",
      label: "OPTION SELECTED",
      active:
        "border-cyan-400/70 bg-cyan-400/[0.10] text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.16)]",
      complete:
        "border-cyan-400/35 bg-cyan-400/[0.06] text-cyan-300",
    },
    {
      number: "3",
      label: "VERIFYING",
      active:
        "border-purple-400/70 bg-purple-400/[0.10] text-purple-300 shadow-[0_0_22px_rgba(168,85,247,0.16)]",
      complete:
        "border-purple-400/35 bg-purple-400/[0.06] text-purple-300",
    },
    {
      number: "4",
      label: "SUCCESS",
      active:
        "border-emerald-400/70 bg-emerald-400/[0.10] text-emerald-300 shadow-[0_0_22px_rgba(52,211,153,0.16)]",
      complete:
        "border-emerald-400/35 bg-emerald-400/[0.06] text-emerald-300",
    },
    {
      number: "5",
      label: "INCORRECT",
      active:
        "border-red-400/70 bg-red-400/[0.10] text-red-300 shadow-[0_0_22px_rgba(248,113,113,0.16)]",
      complete:
        "border-red-400/35 bg-red-400/[0.06] text-red-300",
    },
  ];

  const progress = Math.min(
    Math.max(currentStep - 1, 0),
    4
  );

  return (
    <div className="w-full min-w-0 px-1 sm:px-2">
      <div className="relative mx-auto w-full max-w-5xl">

        {/* Base connector */}
        <div
          className="
            pointer-events-none absolute
            left-[10%] right-[10%]
            top-[15px]
            h-px
            bg-white/[0.09]
            sm:top-[18px]
          "
          aria-hidden="true"
        />

        {/* Active connector */}
        <div
          className="
            pointer-events-none absolute
            left-[10%]
            top-[15px]
            h-px
            bg-gradient-to-r
            from-blue-400/70
            via-purple-400/50
            to-emerald-400/50
            transition-all duration-500
            sm:top-[18px]
          "
          style={{
            width: `${progress * 20}%`,
          }}
          aria-hidden="true"
        />

        {/* Steps */}
        <div className="relative grid grid-cols-5">
          {steps.map((step, index) => {
            const stepNumber = index + 1;

            const isActive = stepNumber === currentStep;
            const isCompleted = stepNumber < currentStep;

            return (
              <div
                key={step.number}
                className="flex min-w-0 flex-col items-center text-center"
              >
                {/* Number circle */}
                <div
                  className={`
                    relative z-10
                    flex h-[31px] w-[31px]
                    items-center justify-center
                    rounded-full
                    border
                    text-[9px] font-bold
                    transition-all duration-500
                    sm:h-9 sm:w-9
                    sm:text-[10px]

                    ${
                      isActive
                        ? step.active
                        : isCompleted
                        ? step.complete
                        : "border-white/[0.08] bg-[#07101c] text-slate-600"
                    }
                  `}
                >
                  {/* Active pulse */}
                  {isActive && (
                    <span
                      className="
                        pointer-events-none
                        absolute inset-[-5px]
                        rounded-full
                        border border-blue-400/10
                        animate-pulse
                      "
                    />
                  )}

                  <span className="relative z-10">
                    {step.number}
                  </span>
                </div>

                {/* Label */}
                <p
                  className={`
                    mt-2
                    w-full
                    px-0.5
                    text-[6px]
                    font-bold
                    uppercase
                    leading-[1.2]
                    tracking-[0.06em]
                    transition-colors duration-300
                    min-[360px]:text-[6.5px]
                    sm:mt-2.5
                    sm:text-[8px]
                    sm:tracking-[0.08em]

                    ${
                      isActive
                        ? "text-slate-200"
                        : isCompleted
                        ? "text-slate-400"
                        : "text-slate-700"
                    }
                  `}
                >
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FlowSteps;