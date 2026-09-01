function FlowSteps({ currentStep = 1 }) {
  const steps = [
    ['1', 'CHALLENGE', 'blue'],
    ['2', 'OPTION SELECTED', 'blue'],
    ['3', 'VERIFYING', 'purple'],
    ['4', 'SUCCESS', 'green'],
    ['5', 'INCORRECT', 'red'],
  ];

  return (
    <div className="w-full">
      <div className="relative grid grid-cols-5 items-start gap-2 px-1 sm:gap-4">
        <div className="absolute left-[9%] right-[9%] top-4 h-px bg-white/[0.12]" />
        {steps.map(([number, label, color], index) => {
          const active = currentStep === index + 1;
          const tone = {
            blue: active ? 'border-blue-400/60 bg-blue-400/15 text-blue-200 shadow-[0_0_22px_rgba(59,130,246,.12)]' : '',
            purple: active ? 'border-purple-400/60 bg-purple-400/15 text-purple-200 shadow-[0_0_22px_rgba(168,85,247,.12)]' : '',
            green: active ? 'border-emerald-400/60 bg-emerald-400/15 text-emerald-200 shadow-[0_0_22px_rgba(16,185,129,.12)]' : '',
            red: active ? 'border-red-400/60 bg-red-400/15 text-red-200 shadow-[0_0_22px_rgba(239,68,68,.12)]' : '',
          }[color];
          return (
            <div key={number} className="relative z-10 flex min-w-0 flex-col items-center">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold sm:h-9 sm:w-9 ${active ? tone : 'border-white/[0.13] bg-[#08111d] text-slate-500'}`}>
                {number}
              </div>
              <span className={`mt-2 max-w-full truncate text-center text-[7px] font-bold tracking-[0.08em] sm:text-[9px] sm:tracking-[0.1em] ${active ? 'text-slate-200' : 'text-slate-500'}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FlowSteps;
