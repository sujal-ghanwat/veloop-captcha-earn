import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Gem,
  LockKeyhole,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Zap,
  X,
} from "lucide-react";

import Header from "./components/Header";
import CaptchaChallenge from "./components/CaptchaChallenge";
import CaptchaOption from "./components/CaptchaOption";
import RewardIndicator from "./components/RewardIndicator";
import CheckingScreen from "./components/CheckingScreen";
import ResultScreen from "./components/ResultScreen";

import { generateCaptcha } from "./data/captchaData";

function App() {
  const [balance, setBalance] = useState(124);

  const [challenge, setChallenge] = useState(() =>
    generateCaptcha()
  );

  const [selectedOption, setSelectedOption] = useState(null);
  const [screen, setScreen] = useState("captcha");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [reward, setReward] = useState(0);

  const handleOptionClick = (option) => {
    if (isProcessing || selectedOption) {
      return;
    }

    setSelectedOption(option);
    setIsProcessing(true);
    setScreen("verifying");

    setTimeout(() => {
      const correct =
        option === challenge.correctAnswer;

      setIsCorrect(correct);

      const earnedReward = correct ? 1 : 0.5;

      setReward(earnedReward);

      setBalance((currentBalance) =>
        currentBalance + earnedReward
      );

      setScreen("checking");

      setTimeout(() => {
        setScreen("result");
        setIsProcessing(false);
      }, 900);
    }, 700);
  };

  const generateNewChallenge = () => {
    const newChallenge = generateCaptcha(
      challenge.captcha
    );

    setChallenge(newChallenge);
    setSelectedOption(null);
    setIsCorrect(false);
    setReward(0);
    setIsProcessing(false);
    setScreen("captcha");
  };

  const handleClaim = () => {
    setScreen("ad");
  };

  const handleNoThanks = () => {
    generateNewChallenge();
  };

  useEffect(() => {
    if (screen !== "ad") {
      return;
    }

    const timer = setTimeout(() => {
      generateNewChallenge();
    }, 1800);

    return () => clearTimeout(timer);
  }, [screen]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#050a12] text-white">

      <Header balance={balance} />

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-[15%] top-20 h-72 w-72 rounded-full bg-blue-500/[0.06] blur-[100px]" />

        <div className="absolute right-[10%] top-[40%] h-80 w-80 rounded-full bg-purple-500/[0.05] blur-[120px]" />

        <div className="absolute bottom-0 left-[40%] h-72 w-72 rounded-full bg-amber-400/[0.035] blur-[100px]" />
      </div>

      {/* CAPTCHA DASHBOARD */}
      {screen === "captcha" && (
        <main className="relative z-10">

          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">

            {/* Hero */}
            <div className="mb-9 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-3 py-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                    Verification available
                  </span>
                </div>

                <h2 className="max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">

                  Earn Gems through

                  <span className="block bg-gradient-to-r from-white via-slate-200 to-blue-300 bg-clip-text text-transparent">
                    secure challenges.
                  </span>

                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                  Complete a quick CAPTCHA verification,
                  protect your account, and earn Gems with
                  every completed challenge.
                </p>

              </div>

              {/* Hero stats */}
              <div className="flex w-fit items-center gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-4">

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                    Reward
                  </p>

                  <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-amber-300">
                    <Gem size={14} />
                    +1 Gem
                  </p>
                </div>

                <div className="h-8 w-px bg-white/[0.08]" />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                    Difficulty
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Easy
                  </p>
                </div>

                <div className="h-8 w-px bg-white/[0.08]" />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                    Status
                  </p>

                  <p className="mt-1 text-sm font-bold text-emerald-300">
                    Ready
                  </p>
                </div>

              </div>

            </div>

            {/* Main grid */}
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">

              {/* Challenge Card */}
              <section className="overflow-hidden rounded-3xl border border-white/[0.09] bg-[#09111d]/90 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

                {/* Top accent */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

                <div className="p-5 sm:p-8">

                  {/* Card header */}
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.07]">
                        <ShieldCheck
                          size={18}
                          className="text-blue-300"
                        />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                          Current challenge
                        </p>

                        <h3 className="mt-0.5 text-base font-bold text-white">
                          Verify your selection
                        </h3>
                      </div>

                    </div>

                    <div className="hidden rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 sm:block">
                      <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-500">
                        Challenge 01
                      </span>
                    </div>

                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-white/[0.06]" />

                  {/* CAPTCHA */}
                  <div className="relative mx-auto max-w-lg">

                    <div className="absolute -inset-6 rounded-[40px] bg-blue-500/[0.035] blur-2xl" />

                    <div className="relative rounded-2xl border border-white/[0.08] bg-[#050b14] p-4">
                      <CaptchaChallenge
                        captcha={challenge.captcha}
                      />
                    </div>

                  </div>

                  {/* Instruction */}
                  <div className="mt-7 text-center">

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
                      <LockKeyhole
                        size={14}
                        className="text-slate-500"
                      />

                      Select the matching code
                    </div>

                    <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-slate-500">
                      Carefully compare each option with the
                      code shown above.
                    </p>

                  </div>

                  {/* Options */}
                  <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">

                    {challenge.options.map(
                      (option, index) => (
                        <div
                          key={option}
                          style={{
                            animationDelay:
                              `${index * 60}ms`,
                          }}
                        >
                          <CaptchaOption
                            option={option}
                            selected={
                              selectedOption === option
                            }
                            disabled={Boolean(
                              selectedOption
                            )}
                            onClick={handleOptionClick}
                          />
                        </div>
                      )
                    )}

                  </div>

                  {/* Security message */}
                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">

                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-800">
                      <ShieldCheck
                        size={14}
                        className="text-slate-400"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-slate-300">
                        Protected verification
                      </p>

                      <p className="mt-0.5 text-[11px] leading-5 text-slate-500">
                        Each challenge uses a fresh set of
                        generated options.
                      </p>
                    </div>

                  </div>

                </div>

              </section>

              {/* Sidebar */}
              <aside className="space-y-5">

                {/* Balance */}
                <div className="relative overflow-hidden rounded-3xl border border-amber-300/10 bg-[#0b121d] p-5">

                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/[0.07] blur-3xl" />

                  <div className="relative">

                    <div className="flex items-center justify-between">

                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Your balance
                      </p>

                      <Gem
                        size={17}
                        className="text-amber-300"
                      />

                    </div>

                    <div className="mt-4">

                      <p className="text-3xl font-extrabold tracking-tight text-white">
                        {Number.isInteger(balance)
                          ? balance
                          : balance.toFixed(1)}
                      </p>

                      <p className="mt-1 text-xs font-medium text-slate-500">
                        Gems available
                      </p>

                    </div>

                    <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.035] px-3 py-2.5">
                      <Check
                        size={14}
                        className="text-emerald-400"
                      />

                      <span className="text-[10px] font-semibold text-emerald-300">
                        Account active
                      </span>
                    </div>

                  </div>

                </div>

                {/* How it works */}
                <div className="rounded-3xl border border-white/[0.08] bg-[#09111d] p-5">

                  <div className="flex items-center gap-2">

                    <Sparkles
                      size={15}
                      className="text-blue-300"
                    />

                    <h3 className="text-sm font-bold text-white">
                      How it works
                    </h3>

                  </div>

                  <div className="mt-5 space-y-4">

                    <div className="flex gap-3">

                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-[9px] font-bold text-slate-400">
                        01
                      </span>

                      <div>
                        <p className="text-xs font-semibold text-slate-300">
                          Read the code
                        </p>

                        <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                          Identify the characters in the challenge.
                        </p>
                      </div>

                    </div>

                    <div className="flex gap-3">

                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-[9px] font-bold text-slate-400">
                        02
                      </span>

                      <div>
                        <p className="text-xs font-semibold text-slate-300">
                          Select the match
                        </p>

                        <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                          Choose the option that matches exactly.
                        </p>
                      </div>

                    </div>

                    <div className="flex gap-3">

                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-amber-300/10 bg-amber-300/[0.04] text-[9px] font-bold text-amber-300">
                        03
                      </span>

                      <div>
                        <p className="text-xs font-semibold text-slate-300">
                          Earn your Gem
                        </p>

                        <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                          Complete verification and receive your reward.
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-2">

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 text-center">
                    <ShieldCheck
                      size={15}
                      className="mx-auto text-blue-300"
                    />

                    <p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      Secure
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 text-center">
                    <Zap
                      size={15}
                      className="mx-auto text-purple-300"
                    />

                    <p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      Fast
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 text-center">
                    <Gem
                      size={15}
                      className="mx-auto text-amber-300"
                    />

                    <p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      Reward
                    </p>
                  </div>

                </div>

              </aside>

            </div>

            {/* Bottom strip */}
            <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 sm:flex-row">

              <div className="flex items-center gap-2">
                <LockKeyhole
                  size={13}
                  className="text-slate-500"
                />

                <span className="text-[10px] font-medium text-slate-500">
                  Your verification activity is protected
                </span>
              </div>

              <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.14em] text-slate-600">
                <span>Secure</span>
                <span>•</span>
                <span>Simple</span>
                <span>•</span>
                <span>Rewarding</span>
              </div>

            </div>

          </div>
        </main>
      )}

      {/* VERIFYING */}
      {screen === "verifying" && (
        <main className="relative z-10 flex min-h-[calc(100vh-74px)] items-center justify-center px-5">

          <div className="w-full max-w-md rounded-3xl border border-white/[0.09] bg-[#09111d] p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.35)]">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-blue-400/15 bg-blue-400/[0.05]">

              <div className="h-9 w-9 animate-spin rounded-full border-2 border-slate-700 border-t-blue-400" />

            </div>

            <p className="mt-6 text-lg font-bold text-white">
              Verifying selection
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Securely checking your response...
            </p>

            <div className="mx-auto mt-6 h-1 max-w-xs overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-400" />
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
              <ShieldCheck size={12} />
              Protected verification
            </div>

          </div>

        </main>
      )}

      {/* CHECKING */}
      {screen === "checking" && (
        <main className="relative z-10">
          <CheckingScreen />
        </main>
      )}

      {/* RESULT */}
      {screen === "result" && (
        <main className="relative z-10">
          <ResultScreen
            isCorrect={isCorrect}
            reward={reward}
            onClaim={handleClaim}
            onNoThanks={handleNoThanks}
          />
        </main>
      )}

      {/* REWARD PROCESSING */}
      {screen === "ad" && (
        <main className="relative z-10 flex min-h-[calc(100vh-74px)] items-center justify-center px-5">

          <div className="w-full max-w-md rounded-3xl border border-white/[0.09] bg-[#09111d] p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.4)]">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-amber-300/10 bg-amber-300/[0.04]">

              <Gem
                size={28}
                className="animate-pulse text-amber-300"
              />

            </div>

            <p className="mt-6 text-lg font-bold text-white">
              Preparing your reward
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Your reward confirmation is being prepared.
            </p>

            <div className="mx-auto mt-7 h-1.5 max-w-xs overflow-hidden rounded-full bg-white/[0.06]">

              <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-amber-400 to-yellow-200" />

            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
              <Sparkles size={12} />
              Processing reward
            </div>

          </div>

        </main>
      )}

    </div>
  );
}

export default App;