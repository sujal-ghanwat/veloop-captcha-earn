import { Check } from 'lucide-react';

function CaptchaOption({ option, selected, disabled, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onClick(option)}
      className={`group relative flex min-h-[58px] w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 sm:min-h-[62px] sm:px-3.5 ${
        selected
          ? 'border-cyan-300/80 bg-cyan-400/[0.09] shadow-[0_0_22px_rgba(34,211,238,.10)]'
          : 'border-white/[0.12] bg-[#08121e] hover:-translate-y-0.5 hover:border-blue-300/45 hover:bg-blue-400/[0.06]'
      } ${disabled && !selected ? 'cursor-not-allowed opacity-45' : 'cursor-pointer'}`}
    >
      <span className={`font-mono text-[12px] font-semibold tracking-wide sm:text-sm ${selected ? 'text-cyan-100' : 'text-slate-200'}`}>
        {option}
      </span>
      {selected && <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-300/15"><Check size={14} className="text-cyan-200" /></span>}
      {!selected && <span className="h-2 w-2 rounded-full border border-slate-600 transition group-hover:border-blue-300" />}
    </button>
  );
}

export default CaptchaOption;
