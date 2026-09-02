import { useEffect, useState } from "react";
import {
  Gem,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Zap,
  Smartphone,
} from "lucide-react";

import Header from "./components/Header";
import CaptchaChallenge from "./components/CaptchaChallenge";
import CaptchaOption from "./components/CaptchaOption";
import CheckingScreen from "./components/CheckingScreen";
import ResultScreen from "./components/ResultScreen";
import FlowSteps from "./components/FlowSteps";
import PhoneShell from "./components/PhoneShell";
import { generateCaptcha } from "./data/captchaData";

function FeatureFooter() {
  const features = [
    {
      title: "SECURE",
      description: "Advanced protection",
      icon: ShieldCheck,
      iconClass: "text-blue-300",
      boxClass: "border-blue-400/15 bg-blue-400/[0.06]",
    },
    {
      title: "REWARDING",
      description: "Earn Gems",
      icon: Gem,
      iconClass: "text-amber-300",
      boxClass: "border-amber-400/15 bg-amber-400/[0.06]",
    },
    {
      title: "FAST",
      description: "Quick verification",
      icon: Zap,
      iconClass: "text-yellow-300",
      boxClass: "border-yellow-400/15 bg-yellow-400/[0.06]",
    },
    {
      title: "MOBILE FIRST",
      description: "Optimized experience",
      icon: Smartphone,
      iconClass: "text-purple-300",
      boxClass: "border-purple-400/15 bg-purple-400/[0.06]",
    },
    {
      title: "TRUSTED",
      description: "Security first",
      icon: LockKeyhole,
      iconClass: "text-emerald-300",
      boxClass: "border-emerald-400/15 bg-emerald-400/[0.06]",
    },
  ];

  return (
    <div className="mx-auto mt-5 w-full max-w-6xl px-3 pb-6 sm:mt-7 sm:px-6 sm:pb-8 lg:px-8">
      <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#09111d] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

        {/* subtle glow */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-blue-500/[0.05] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-purple-500/[0.05] blur-3xl" />

        <div className="relative grid grid-cols-2 sm:grid-cols-5">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`
                  group flex min-h-[118px] flex-col items-center justify-center
                  px-3 py-5 text-center
                  transition-all duration-300
                  hover:bg-white/[0.025]
                  sm:min-h-[135px] sm:px-4
                  ${
                    index === 1
                      ? "border-l border-white/[0.06]"
                      : ""
                  }
                  ${
                    index === 2
                      ? "border-t border-white/[0.06] sm:border-l sm:border-t-0"
                      : ""
                  }
                  ${
                    index === 3
                      ? "border-l border-t border-white/[0.06] sm:border-t-0"
                      : ""
                  }
                  ${
                    index === 4
                      ? "col-span-2 border-t border-white/[0.06] sm:col-span-1 sm:border-l sm:border-t-0"
                      : ""
                  }
                `}
              >
                <div
                  className={`
                    mb-2.5 flex h-9 w-9 items-center justify-center
                    rounded-xl border
                    transition-transform duration-300
                    group-hover:scale-105
                    ${feature.boxClass}
                  `}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className={feature.iconClass}
                  />
                </div>

                <p className="text-[10px] font-bold tracking-[0.18em] text-slate-200">
                  {feature.title}
                </p>

                <p className="mt-1 text-[9px] leading-4 text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>

      <div className="mt-2.5 flex items-center justify-center gap-1.5">
        <LockKeyhole size={10} className="text-slate-600" />
        <span className="text-[8px] tracking-wide text-slate-600">
          Built for secure and reliable verification
        </span>
      </div>
    </div>
  );
}

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

  /*
   * CAPTCHA OPTION
   *
   * IMPORTANT:
   * Balance is NOT changed here.
   *
   * Correct answer  = 1 Gem
   * Incorrect answer = 0.5 Gem
   */
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

      /*
       * DO NOT add reward to balance here.
       *
       * The balance changes ONLY when
       * the user clicks Add to Balance.
       */

      setScreen("checking");

      setTimeout(() => {
        setScreen("result");
        setIsProcessing(false);
      }, 900);
    }, 700);
  };

  /*
   * GENERATE NEW CAPTCHA
   */
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

  /*
   * ADD REWARD TO BALANCE
   *
   * THIS IS THE ONLY PLACE WHERE
   * BALANCE IS UPDATED.
   *
   * Correct   -> +1
   * Incorrect -> +0.5
   */
  const handleClaim = () => {
    if (reward <= 0) {
      return;
    }

    setBalance(
      (currentBalance) => currentBalance + reward
    );

    setScreen("ad");
  };

  /*
   * USER DOES NOT WANT REWARD
   */
  const handleNoThanks = () => {
    generateNewChallenge();
  };

  /*
   * REWARD PROCESSING SCREEN
   */
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
    <div className="min-h-screen w-full min-w-0 overflow-x-hidden bg-[#050a12] text-white">
      <Header balance={balance} />

      {/* ==========================================
          AMBIENT BACKGROUND
      ========================================== */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-blue-500/[0.055] blur-[110px]" />

        <div className="absolute right-[8%] top-[38%] h-80 w-80 rounded-full bg-purple-500/[0.045] blur-[120px]" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-400/[0.025] blur-[110px]" />
      </div>

      {/* ==========================================
          CAPTCHA
      ========================================== */}
      {screen === "captcha" && (
        <main className="relative z-10 w-full">
          <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-6 sm:py-10 lg:px-8">

            {/* PAGE TITLE */}
            <section className="mx-auto w-full max-w-4xl text-center">
              <div className="mb-2 flex items-center justify-center gap-2 sm:mb-3">
                <Gem
                  size={18}
                  className="shrink-0 text-amber-300 sm:h-5 sm:w-5"
                />

                <span className="text-[11px] font-bold tracking-[0.18em] text-white sm:text-sm">
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
                <span className="mx-1.5 text-slate-700">
                  •
                </span>
                Earn Rewards
                <span className="mx-1.5 text-slate-700">
                  •
                </span>
                Build Trust
              </p>
            </section>

            {/* PROGRESS */}
            <div className="mx-auto mt-6 w-full max-w-6xl sm:mt-8">
              <FlowSteps
                currentStep={selectedOption ? 2 : 1}
              />
            </div>

            {/* PHONE */}
            <div className="mx-auto mt-5 w-full max-w-[390px] sm:mt-7">
              <PhoneShell>

                {/* PHONE HEADER */}
                <div className="flex min-w-0 items-center justify-between gap-2 px-3 pt-6 sm:px-4 sm:pt-7">

                  <button
                    type="button"
                    aria-label="Back"
                    onClick={generateNewChallenge}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-sm text-slate-400 sm:h-9 sm:w-9"
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

                  <div className="flex min-w-0 shrink-0 items-center gap-1 rounded-full border border-amber-300/15 bg-amber-300/[0.05] px-2 py-1.5">
                    <Gem
                      size={11}
                      className="shrink-0 text-amber-300"
                    />

                    <span className="whitespace-nowrap text-[9px] font-bold text-amber-200">
                      {Number.isInteger(balance)
                        ? balance
                        : balance.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* PHONE CONTENT */}
                <div className="min-w-0 px-3 pb-5 pt-6 sm:px-4 sm:pb-6 sm:pt-8">

                  <div className="text-center">
                    <h2 className="text-[22px] font-extrabold leading-tight text-white sm:text-2xl">
                      Earn{" "}
                      <span className="text-amber-300">
                        Gems
                      </span>
                    </h2>

                    <p className="mx-auto mt-1.5 max-w-[250px] text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
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

                  <div className="mt-4 text-center sm:mt-5">
                    <p className="text-[11px] font-semibold text-slate-300 sm:text-xs">
                      Select the matching code
                    </p>
                  </div>

                  {/* OPTIONS */}
                  <div className="mt-2.5 grid min-w-0 grid-cols-2 gap-2 sm:mt-4 sm:gap-2.5">
                    {challenge.options.map((option) => (
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
                          onClick={handleOptionClick}
                        />
                      </div>
                    ))}
                  </div>

                  {/* SECURITY MESSAGE */}
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
                    <div className="flex min-w-0 items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-300/[0.08]">
                        <Gem
                          size={17}
                          className="text-amber-300"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-[9px] font-medium text-slate-400">
                          Complete verification to earn
                        </p>

                        <p className="text-[13px] font-extrabold text-amber-300">
                          +1 Gem
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </PhoneShell>
            </div>
          </div>
        </main>
      )}

      {/* ==========================================
          VERIFYING
      ========================================== */}
      {screen === "verifying" && (
        <main className="relative z-10 w-full">
          <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-6 sm:py-10 lg:px-8">

            <section className="mx-auto w-full max-w-4xl text-center">
              <div className="mb-2 flex items-center justify-center gap-2">
                <Gem
                  size={18}
                  className="text-amber-300 sm:h-5 sm:w-5"
                />

                <span className="text-[11px] font-bold tracking-[0.18em] text-white sm:text-sm">
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
                <span className="mx-1.5">•</span>
                Earn Rewards
                <span className="mx-1.5">•</span>
                Build Trust
              </p>
            </section>

            <div className="mx-auto mt-6 w-full max-w-6xl sm:mt-8">
              <FlowSteps currentStep={3} />
            </div>

            <div className="mx-auto mt-5 w-full max-w-[390px] sm:mt-7">
              <PhoneShell>

                <div className="flex min-h-[600px] flex-col items-center justify-center px-5 py-8 text-center sm:min-h-[650px] sm:px-7">

                  <div className="relative flex h-28 w-28 items-center justify-center sm:h-36 sm:w-36">
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

                  <div className="mt-12 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] p-3.5 text-left sm:mt-16 sm:p-4">
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

      {/* ==========================================
          CHECKING
      ========================================== */}
      {screen === "checking" && (
        <main className="relative z-10 w-full">
          <CheckingScreen />
        </main>
      )}

      {/* ==========================================
          RESULT
      ========================================== */}
      {screen === "result" && (
        <main className="relative z-10 w-full">
          <ResultScreen
            isCorrect={isCorrect}
            reward={reward}
            balance={balance}
            onClaim={handleClaim}
            onNoThanks={handleNoThanks}
          />
        </main>
      )}

      {/* ==========================================
          REWARD PROCESSING
      ========================================== */}
      {screen === "ad" && (
        <main className="relative z-10 flex min-h-[calc(100vh-74px)] w-full items-center justify-center px-4 py-8 sm:px-5">
          <div className="w-full max-w-md rounded-3xl border border-white/[0.09] bg-[#09111d] p-6 text-center shadow-[0_25px_80px_rgba(0,0,0,0.4)] sm:p-8">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/10 bg-amber-300/[0.04] sm:h-20 sm:w-20">
              <Gem
                size={25}
                className="animate-pulse text-amber-300 sm:h-7 sm:w-7"
              />
            </div>

            <p className="mt-5 text-lg font-bold text-white">
              Preparing your reward
            </p>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Your reward confirmation is being prepared.
            </p>

            <div className="mx-auto mt-6 h-1.5 max-w-xs overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-amber-400 to-yellow-200" />
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
              <Sparkles size={12} />
              Processing reward
            </div>

          </div>
        </main>
      )}

      {/* ==========================================
          GLOBAL FEATURE FOOTER
          ALWAYS VISIBLE ON MOBILE + DESKTOP
      ========================================== */}
      <FeatureFooter />

    </div>
  );
}

export default App;