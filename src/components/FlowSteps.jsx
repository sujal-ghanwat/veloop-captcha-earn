function FlowSteps({ currentStep }) {
  const steps = [
    {
      number: "1",
      label: "Challenge",
      color: "blue",
    },
    {
      number: "2",
      label: "Option Selected",
      color: "blue",
    },
    {
      number: "3",
      label: "Verifying",
      color: "purple",
    },
    {
      number: "4",
      label: "Success",
      color: "green",
    },
    {
      number: "5",
      label: "Incorrect",
      color: "red",
    },
  ];

  return (
    <div className="mx-auto mb-8 hidden max-w-6xl md:block">
      <div className="relative flex items-center justify-between">

        {/* connecting line */}
        <div className="absolute left-[8%] right-[8%] top-5 h-px bg-white/[0.08]" />

        {steps.map((step, index) => {
          const active = currentStep === index + 1;

          return (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center gap-2"
            >
              <div
                className={`
                  flex h-10 w-10 items-center justify-center
                  rounded-full border text-sm font-bold
                  transition-all duration-300
                  ${
                    active
                      ? step.color === "green"
                        ? "border-emerald-400/50 bg-emerald-400/15 text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.12)]"
                        : step.color === "red"
                        ? "border-red-400/50 bg-red-400/15 text-red-300 shadow-[0_0_25px_rgba(239,68,68,0.12)]"
                        : step.color === "purple"
                        ? "border-purple-400/50 bg-purple-400/15 text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.12)]"
                        : "border-blue-400/50 bg-blue-400/15 text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.12)]"
                      : "border-white/[0.08] bg-[#09111d] text-slate-600"
                  }
                `}
              >
                {step.number}
              </div>

              <span
                className={`
                  text-[9px] font-bold uppercase tracking-[0.12em]
                  ${
                    active
                      ? "text-slate-200"
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