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
import FlowSteps from "./components/FlowSteps";
import PhoneShell from "./components/PhoneShell";
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
    <div className="min-h-screen w-full max-w-full min-w-0 overflow-x-clip bg-[#050a12] text-white">
      {/* HEADER */}
      <Header balance={balance} />

      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-blue-500/[0.055] blur-[110px]" />

        <div className="absolute right-[8%] top-[38%] h-80 w-80 rounded-full bg-purple-500/[0.045] blur-[120px]" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/[0.025] blur-[110px]" />
      </div>

      {/* =========================================================
          CAPTCHA SCREEN
      ========================================================== */}
      {screen === "captcha" && (
        <main className="relative z-10 w-full">

          <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-6 sm:py-10 lg:px-8">

            {/* BRAND */}
            <section className="mx-auto w-full max-w-4xl text-center">

              <div className="mb-2 flex items-center justify-center gap-2 sm:mb-3">

                <Gem
                  size={18}
                  strokeWidth={2}
                  className="shrink-0 text-amber-300 sm:h-5 sm:w-5"
                />

                <span className="text-[11px] font-bold tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.22em]">
                  VELOOP REWARDS
                </span>

              </div>

              <h1 className="mx-auto max-w-full text-[clamp(27px,7vw,56px)] font-black uppercase leading-[0.98] tracking-[-0.045em] text-white">

                CAPTCHA{" "}

                <span className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
                  EARN FLOW
                </span>

              </h1>

              <p className="mx-auto mt-2 max-w-[310px] text-[10px] font-medium leading-4 text-slate-500 sm:max-w-none sm:text-sm sm:leading-5">

                Secure Verification

                <span className="mx-1.5 text-slate-700 sm:mx-2">
                  •
                </span>

                Earn Rewards

                <span className="mx-1.5 text-slate-700 sm:mx-2">
                  •
                </span>

                Build Trust

              </p>

            </section>

            {/* FLOW */}
            <div className="mx-auto mt-6 w-full max-w-6xl sm:mt-8">

              <FlowSteps
                currentStep={selectedOption ? 2 : 1}
              />

            </div>

            {/* MAIN PHONE */}
            <div className="mx-auto mt-5 w-full max-w-[390px] sm:mt-7">

              <PhoneShell>

                {/* PHONE HEADER */}
                <div className="flex min-w-0 items-center justify-between gap-2 px-3 pt-6 sm:px-4 sm:pt-7">

                  <button
                    type="button"
                    aria-label="Back"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-sm text-slate-400 transition hover:border-white/15 hover:text-white sm:h-9 sm:w-9"
                  >
                    ←
                  </button>

                  <div className="min-w-0 flex-1 text-center">

                    <p className="truncate text-[13px] font-bold tracking-[0.16em] text-white sm:text-sm">
                      VELOOP
                    </p>

                    <p className="text-[6px] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-[7px]">
                      Rewards
                    </p>

                  </div>

                  <div className="flex min-w-0 shrink-0 items-center gap-1 rounded-full border border-amber-300/15 bg-amber-300/[0.05] px-2 py-1.5 sm:gap-1.5 sm:px-2.5">

                    <Gem
                      size={11}
                      className="shrink-0 text-amber-300 sm:h-3 sm:w-3"
                    />

                    <span className="whitespace-nowrap text-[9px] font-bold text-amber-200 sm:text-[10px]">
                      {Number.isInteger(balance)
                        ? balance
                        : balance.toFixed(1)}
                    </span>

                  </div>

                </div>

                {/* PHONE CONTENT */}
                <div className="min-w-0 px-3 pb-5 pt-6 sm:px-4 sm:pb-6 sm:pt-8">

                  {/* TITLE */}
                  <div className="text-center">

                    <h2 className="text-[22px] font-extrabold leading-tight text-white sm:text-2xl">

                      Earn{" "}

                      <span className="text-amber-300">
                        Gems
                      </span>

                    </h2>

                    <p className="mx-auto mt-1.5 max-w-[250px] text-[10px] leading-4 text-slate-500 sm:mt-2 sm:text-xs sm:leading-5">

                      Complete a quick security check
                      to earn rewards.

                    </p>

                  </div>

                  {/* CAPTCHA */}
                  <div className="mt-5 min-w-0 sm:mt-7">

                    <CaptchaChallenge
                      captcha={challenge.captcha}
                    />

                  </div>

                  {/* INSTRUCTION */}
                  <div className="mt-4 text-center sm:mt-5">

                    <p className="text-[11px] font-semibold text-slate-300 sm:text-xs">
                      Select the matching code
                    </p>

                  </div>

                  {/* OPTIONS */}
                  <div className="mt-2.5 grid min-w-0 grid-cols-2 gap-2 sm:mt-4 sm:gap-2.5">

                    {challenge.options.map(
                      (option) => (
                        <div
                          key={option}
                          className="min-w-0"
                        >

                          <CaptchaOption
                            option={option}
                            selected={
                              selectedOption === option
                            }
                            disabled={Boolean(
                              selectedOption
                            )}
                            onClick={
                              handleOptionClick
                            }
                          />

                        </div>
                      )
                    )}

                  </div>

                  {/* SECURITY */}
                  <div className="mt-3 min-w-0 rounded-xl border border-white/[0.07] bg-white/[0.025] p-2.5 sm:mt-4 sm:p-3">

                    <div className="flex min-w-0 items-center gap-2">

                      <ShieldCheck
                        size={14}
                        className="shrink-0 text-slate-400"
                      />

                      <p className="min-w-0 text-[9px] leading-4 text-slate-500 sm:text-[10px]">

                        This helps protect your account
                        from automated access.

                      </p>

                    </div>

                  </div>

                  {/* REWARD */}
                  <div className="mt-3 min-w-0 rounded-xl border border-amber-300/20 bg-amber-300/[0.035] p-2.5 sm:mt-4 sm:p-3">

                    <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-300/[0.08] sm:h-9 sm:w-9">

                        <Gem
                          size={17}
                          className="text-amber-300 sm:h-[19px] sm:w-[19px]"
                        />

                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-[9px] font-medium text-slate-400 sm:text-[10px]">
                          Complete verification to earn
                        </p>

                        <p className="text-[13px] font-extrabold text-amber-300 sm:text-sm">
                          +1 Gem
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </PhoneShell>

            </div>

            {/* FEATURE STRIP */}
            <div className="mx-auto mt-8 hidden max-w-6xl grid-cols-5 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#09111d] lg:grid">

              {[
                ["🛡", "SECURE", "Advanced protection"],
                ["🎁", "REWARDING", "Earn Gems"],
                ["⚡", "FAST", "Quick verification"],
                ["▣", "MOBILE FIRST", "Optimized experience"],
                ["🔒", "TRUSTED", "Security first"],
              ].map(
                ([icon, title, description]) => (
                  <div
                    key={title}
                    className="border-r border-white/[0.06] p-5 text-center last:border-r-0"
                  >

                    <div className="text-xl">
                      {icon}
                    </div>

                    <p className="mt-2 text-[10px] font-bold tracking-[0.12em] text-slate-300">
                      {title}
                    </p>

                    <p className="mt-1 text-[9px] text-slate-600">
                      {description}
                    </p>

                  </div>
                )
              )}

            </div>

          </div>

        </main>
      )}

      {/* =========================================================
          VERIFYING SCREEN
      ========================================================== */}
      {screen === "verifying" && (
        <main className="relative z-10 w-full">

          <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-6 sm:py-10 lg:px-8">

            <section className="mx-auto w-full max-w-4xl text-center">

              <div className="mb-2 flex items-center justify-center gap-2 sm:mb-3">

                <Gem
                  size={18}
                  className="text-amber-300 sm:h-5 sm:w-5"
                />

                <span className="text-[11px] font-bold tracking-[0.18em] text-white sm:text-sm sm:tracking-[0.22em]">
                  VELOOP REWARDS
                </span>

              </div>

              <h1 className="text-[clamp(27px,7vw,56px)] font-black uppercase leading-[0.98] tracking-[-0.045em] text-white">

                CAPTCHA{" "}

                <span className="text-purple-300">
                  EARN FLOW
                </span>

              </h1>

              <p className="mt-2 text-[10px] font-medium text-slate-500 sm:text-sm">
                Secure Verification
                <span className="mx-1.5 sm:mx-2">•</span>
                Earn Rewards
                <span className="mx-1.5 sm:mx-2">•</span>
                Build Trust
              </p>

            </section>

            <div className="mx-auto mt-6 w-full max-w-6xl sm:mt-8">
              <FlowSteps currentStep={3} />
            </div>

            <div className="mx-auto mt-5 w-full max-w-[390px] sm:mt-7">

              <PhoneShell>

                <div className="flex min-h-[650px] flex-col items-center justify-center px-6 py-10 text-center sm:min-h-[690px] sm:px-7">

                  <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">

                    <div className="absolute inset-0 animate-pulse rounded-full border border-purple-400/20" />

                    <div className="absolute inset-4 rounded-full border border-purple-400/20" />

                    <div className="absolute inset-8 rounded-full border border-purple-400/20" />

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-300/20 bg-purple-400/[0.08]">

                      <LockKeyhole
                        size={30}
                        className="text-purple-300"
                      />

                    </div>

                  </div>

                  <h2 className="mt-7 text-2xl font-bold text-white">
                    Verifying...
                  </h2>

                  <p className="mt-2 max-w-[240px] text-sm leading-6 text-slate-500">
                    Please wait while we check your answer.
                  </p>

                  <div className="mt-7 w-full max-w-[240px]">

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">

                      <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-purple-500 to-blue-400" />

                    </div>

                  </div>

                  <div className="mt-16 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5 text-left sm:mt-20 sm:p-4">

                    <div className="flex gap-3">

                      <ShieldCheck
                        size={17}
                        className="mt-0.5 shrink-0 text-slate-500"
                      />

                      <p className="text-[10px] leading-5 text-slate-500">
                        Do not close this screen while
                        verification is in progress.
                      </p>

                    </div>

                  </div>

                </div>

              </PhoneShell>

            </div>

          </div>

        </main>
      )}

      {/* CHECKING */}
      {screen === "checking" && (
        <main className="relative z-10 w-full">
          <CheckingScreen />
        </main>
      )}

      {/* RESULT */}
      {screen === "result" && (
        <main className="relative z-10 w-full">

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
        <main className="relative z-10 flex min-h-[calc(100vh-74px)] w-full items-center justify-center px-4 py-8 sm:px-5">

          <div className="w-full max-w-md rounded-3xl border border-white/[0.09] bg-[#09111d] p-6 text-center shadow-[0_25px_80px_rgba(0,0,0,0.4)] sm:p-8">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/10 bg-amber-300/[0.04] sm:h-20 sm:w-20">

              <Gem
                size={25}
                className="animate-pulse text-amber-300 sm:h-7 sm:w-7"
              />

            </div>

            <p className="mt-5 text-lg font-bold text-white sm:mt-6">
              Preparing your reward
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Your reward confirmation is being prepared.
            </p>

            <div className="mx-auto mt-6 h-1.5 max-w-xs overflow-hidden rounded-full bg-white/[0.06] sm:mt-7">

              <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-amber-400 to-yellow-200" />

            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600 sm:mt-6">

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