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

    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">

      {/* Brand heading */}
      <div className="mb-8 text-center">

        <div className="mb-3 flex items-center justify-center gap-2">

          <Gem
            size={22}
            className="text-amber-300"
          />

          <span className="text-sm font-bold tracking-[0.22em] text-white">
            VELOOP REWARDS
          </span>

        </div>

        <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">

          CAPTCHA{" "}

          <span className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
            EARN FLOW
          </span>

        </h2>

        <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
          Secure Verification
          <span className="mx-2 text-slate-700">•</span>
          Earn Rewards
          <span className="mx-2 text-slate-700">•</span>
          Build Trust
        </p>

      </div>

      {/* Progress */}
      <FlowSteps currentStep={selectedOption ? 2 : 1} />

      {/* Main phone */}
      <PhoneShell>

        {/* Mobile header */}
        <div className="flex items-center justify-between px-4 pt-7">

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-slate-400"
          >
            ←
          </button>

          <div className="text-center">

            <p className="text-sm font-bold tracking-[0.16em] text-white">
              VELOOP
            </p>

            <p className="text-[7px] font-bold uppercase tracking-[0.22em] text-slate-500">
              Rewards
            </p>

          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-amber-300/15 bg-amber-300/[0.05] px-2.5 py-1.5">

            <Gem
              size={12}
              className="text-amber-300"
            />

            <span className="text-[10px] font-bold text-amber-200">
              {Number.isInteger(balance)
                ? balance
                : balance.toFixed(1)}
            </span>

          </div>

        </div>

        {/* Content */}
        <div className="px-4 pb-5 pt-9">

          {/* Heading */}
          <div className="text-center">

            <h3 className="text-2xl font-extrabold text-white">

              Earn{" "}

              <span className="text-amber-300">
                Gems
              </span>

            </h3>

            <p className="mx-auto mt-2 max-w-[270px] text-xs leading-5 text-slate-500">
              Complete a quick security check
              to earn rewards.
            </p>

          </div>

          {/* CAPTCHA */}
          <div className="mt-7">

            <CaptchaChallenge
              captcha={challenge.captcha}
            />

          </div>

          {/* Instruction */}
          <div className="mt-5 text-center">

            <p className="text-xs font-semibold text-slate-300">
              Select the matching code
            </p>

          </div>

          {/* Options */}
          <div className="mt-4 grid grid-cols-2 gap-2.5">

            {challenge.options.map((option) => (
              <CaptchaOption
                key={option}
                option={option}
                selected={selectedOption === option}
                disabled={Boolean(selectedOption)}
                onClick={handleOptionClick}
              />
            ))}

          </div>

          {/* Security */}
          <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">

            <div className="flex items-center gap-2">

              <ShieldCheck
                size={15}
                className="text-slate-400"
              />

              <p className="text-[10px] leading-4 text-slate-500">
                This helps protect your account
                from automated access.
              </p>

            </div>

          </div>

          {/* Reward */}
          <div className="mt-4 rounded-xl border border-amber-300/20 bg-amber-300/[0.035] p-3">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-300/[0.08]">

                <Gem
                  size={19}
                  className="text-amber-300"
                />

              </div>

              <div>

                <p className="text-[10px] font-medium text-slate-400">
                  Complete verification to earn
                </p>

                <p className="text-sm font-extrabold text-amber-300">
                  +1 Gem
                </p>

              </div>

            </div>

          </div>

        </div>

      </PhoneShell>

      {/* Bottom feature strip */}
      <div className="mx-auto mt-8 hidden max-w-5xl grid-cols-5 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#09111d] md:grid">

        {[
          ["🛡", "SECURE", "Advanced protection"],
          ["🎁", "REWARDING", "Earn Gems"],
          ["⚡", "FAST", "Quick verification"],
          ["▣", "MOBILE FIRST", "Optimized experience"],
          ["🔒", "TRUSTED", "Security first"],
        ].map(([icon, title, description]) => (
          <div
            key={title}
            className="border-r border-white/[0.06] p-4 text-center last:border-r-0"
          >

            <div className="text-lg">
              {icon}
            </div>

            <p className="mt-2 text-[9px] font-bold tracking-[0.12em] text-slate-300">
              {title}
            </p>

            <p className="mt-1 text-[8px] text-slate-600">
              {description}
            </p>

          </div>
        ))}

      </div>

    </div>

  </main>
)}

      {/* VERIFYING */}
      {screen === "verifying" && (
  <main className="relative z-10">

    <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">

      <div className="mb-8 text-center">

        <div className="mb-3 flex items-center justify-center gap-2">
          <Gem
            size={22}
            className="text-amber-300"
          />

          <span className="text-sm font-bold tracking-[0.22em] text-white">
            VELOOP REWARDS
          </span>
        </div>

        <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
          CAPTCHA{" "}
          <span className="text-purple-300">
            EARN FLOW
          </span>
        </h2>

        <p className="mt-2 text-xs text-slate-500">
          Secure Verification
          <span className="mx-2">•</span>
          Earn Rewards
          <span className="mx-2">•</span>
          Build Trust
        </p>

      </div>

      <FlowSteps currentStep={3} />

      <PhoneShell>

        <div className="flex h-full min-h-[690px] flex-col items-center justify-center px-7 text-center">

          <div className="relative flex h-36 w-36 items-center justify-center">

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

          <h3 className="mt-8 text-2xl font-bold text-white">
            Verifying...
          </h3>

          <p className="mt-2 max-w-[250px] text-sm leading-6 text-slate-500">
            Please wait while we check your answer.
          </p>

          <div className="mt-8 w-full max-w-[240px]">

            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">

              <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-purple-500 to-blue-400" />

            </div>

          </div>

          <div className="mt-20 w-full rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 text-left">

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