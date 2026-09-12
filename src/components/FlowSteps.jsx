function FlowSteps({ currentStep = 1 }) {
  const steps = [
    {
      number: "1",
      label: "CHALLENGE",
      color: "blue",
      activeClass:
        "border-blue-400/70 bg-blue-500/15 text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.22)]",
      completedClass:
        "border-blue-400/40 bg-blue-500/10 text-blue-200",
      lineClass: "bg-blue-400/50",
    },
    {
      number: "2",
      label: "OPTION SELECTED",
      color: "blue",
      activeClass:
        "border-blue-400/70 bg-blue-500/15 text-blue-200 shadow-[0_0_24px_rgba(59,130,246,0.22)]",
      completedClass:
        "border-blue-400/40 bg-blue-500/10 text-blue-200",
      lineClass: "bg-blue-400/50",
    },
    {
      number: "3",
      label: "VERIFYING",
      color: "purple",
      activeClass:
        "border-purple-400/70 bg-purple-500/15 text-purple-200 shadow-[0_0_28px_rgba(168,85,247,0.25)]",
      completedClass:
        "border-purple-400/40 bg-purple-500/10 text-purple-200",
      lineClass: "bg-purple-400/50",
    },
    {
      number: "4",
      label: "SUCCESS",
      color: "green",
      activeClass:
        "border-emerald-400/70 bg-emerald-500/15 text-emerald-200 shadow-[0_0_28px_rgba(16,185,129,0.25)]",
      completedClass:
        "border-emerald-400/40 bg-emerald-500/10 text-emerald-200",
      lineClass: "bg-emerald-400/50",
    },
    {
      number: "5",
      label: "INCORRECT",
      color: "red",
      activeClass:
        "border-red-400/70 bg-red-500/15 text-red-200 shadow-[0_0_28px_rgba(239,68,68,0.25)]",
      completedClass:
        "border-red-400/40 bg-red-500/10 text-red-200",
      lineClass: "bg-red-400/50",
    },
  ];

  return (
    <div className="w-full px-1 sm:px-2">
      <div className="relative grid grid-cols-5 items-start">

        {/* Background progress line */}
        <div className="absolute left-[10%] right-[10%] top-[16px] h-px bg-white/[0.10]" />

        {/* Active progress line */}
        <div
          className="absolute left-[10%] top-[16px] h-px bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-emerald-500/60 transition-all duration-700"
          style={{
            width:
              currentStep <= 1
                ? "0%"
                : `calc(${(Math.min(currentStep - 1, 4) / 4) * 80}% )`,
          }}
        />

        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const active = currentStep === stepNumber;
          const completed = currentStep > stepNumber;

          return (
            <div
              key={step.number}
              className="relative z-10 flex min-w-0 flex-col items-center"
            >
              {/* Step Circle */}
              <div
                className={`
                  relative flex h-8 w-8 items-center justify-center
                  rounded-full border text-[11px] font-bold
                  transition-all duration-500
                  sm:h-9 sm:w-9 sm:text-xs
                  ${
                    active
                      ? step.activeClass
                      : completed
                        ? step.completedClass
                        : "border-white/[0.12] bg-[#08111d] text-slate-600"
                  }
                `}
              >
                {/* Active glow */}
                {active && (
                  <span
                    className={`
                      pointer-events-none absolute inset-[-5px]
                      rounded-full border opacity-40 blur-[2px]
                      ${
                        step.color === "blue"
                          ? "border-blue-400"
                          : step.color === "purple"
                            ? "border-purple-400"
                            : step.color === "green"
                              ? "border-emerald-400"
                              : "border-red-400"
                      }
                    `}
                  />
                )}

                <span className="relative z-10">
                  {step.number}
                </span>
              </div>

              {/* Label */}
              <span
                className={`
                  mt-2 w-full px-0.5 text-center
                  text-[6px] font-bold tracking-[0.06em]
                  transition-colors duration-300
                  sm:text-[8px] sm:tracking-[0.09em]
                  md:text-[9px]
                  ${
                    active
                      ? "text-slate-100"
                      : completed
                        ? "text-slate-300"
                        : "text-slate-600"
                  }
                `}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FlowSteps;