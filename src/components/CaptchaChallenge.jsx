import { RefreshCw } from 'lucide-react';

function CaptchaChallenge({ captcha, onRefresh }) {
  return (
    <div className="rounded-xl border border-blue-300/20 bg-[#081625] px-3 py-3.5 text-center sm:px-4 sm:py-4">
      <p className="font-mono text-[25px] font-semibold tracking-[0.2em] text-slate-100 sm:text-[28px] sm:tracking-[0.24em]">
        {captcha.split('').join(' ')}
      </p>
      <button type="button" onClick={onRefresh} className="mt-1.5 inline-flex items-center gap-1.5 text-[10px] font-medium text-slate-300 transition hover:text-white">
        <RefreshCw size={12} />
        New Code
      </button>
    </div>
  );
}

export default CaptchaChallenge;
