import { useEffect, useState } from "react";
import { Gem, Sparkles } from "lucide-react";

import Header from "./components/Header";
import CaptchaChallenge from "./components/CaptchaChallenge";
import CaptchaOption from "./components/CaptchaOption";
import RewardIndicator from "./components/RewardIndicator";
import CheckingScreen from "./components/CheckingScreen";
import ResultScreen from "./components/ResultScreen";

import { generateCaptcha } from "./data/captchaData";

function App() {
  // Starting Gem balance
  const [balance, setBalance] = useState(124);

  // Generate the first CAPTCHA
  const [challenge, setChallenge] = useState(() =>
    generateCaptcha()
  );

  const [selectedOption, setSelectedOption] =
    useState(null);

  const [screen, setScreen] =
    useState("captcha");

  const [isProcessing, setIsProcessing] =
    useState(false);

  const [isCorrect, setIsCorrect] =
    useState(false);

  const [reward, setReward] = useState(0);

  /*
   * Handle CAPTCHA option selection
   */
  const handleOptionClick = (option) => {
    // Prevent multiple selections
    if (isProcessing || selectedOption) {
      return;
    }

    setSelectedOption(option);
    setIsProcessing(true);

    // Show verification screen
    setScreen("verifying");

    // Short verification delay
    setTimeout(() => {
      const correct =
        option === challenge.correctAnswer;

      setIsCorrect(correct);

      // Correct = +1 Gem
      // Wrong = +0.5 Gem
      const earnedReward = correct ? 1 : 0.5;

      setReward(earnedReward);

      // Update Gem balance
      setBalance((currentBalance) =>
        currentBalance + earnedReward
      );

      // Show checking screen
      setScreen("checking");

      // Short checking delay
      setTimeout(() => {
        setScreen("result");
        setIsProcessing(false);
      }, 900);
    }, 500);
  };

  /*
   * Generate a completely new CAPTCHA
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

    // Return to CAPTCHA screen
    setScreen("captcha");
  };

  /*
   * Claim reward
   *
   * This opens the mock reward/ad state.
   */
  const handleClaim = () => {
    setScreen("ad");
  };

  /*
   * Skip the reward/ad state
   * and immediately generate a new CAPTCHA.
   */
  const handleNoThanks = () => {
    generateNewChallenge();
  };

  /*
   * Mock reward/ad state
   *
   * After a short delay, automatically
   * generate the next CAPTCHA.
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
    <div className="min-h-screen bg-[#f6f8fb]">

      {/* Header */}
      <Header balance={balance} />

      {/* =====================================================
          CAPTCHA SCREEN
      ====================================================== */}
      {screen === "captcha" && (
  <main className="relative min-h-[calc(100vh-72px)] overflow-hidden">

    {/* Soft background decoration */}
    <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-slate-200/30 blur-3xl" />

    <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-amber-100/20 blur-3xl" />

    <div className="relative mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">

      {/* Dashboard intro */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <div className="mb-3 flex items-center gap-2">

            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Activity available
            </span>

          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Earn while you loop.
          </h2>

          <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
            Complete simple verification challenges and
            collect Gems along the way.
          </p>
        </div>

        {/* Mini stats */}
        <div className="flex w-fit items-center gap-5 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Reward
            </p>

            <p className="mt-0.5 text-sm font-extrabold text-slate-900">
              +1 Gem
            </p>
          </div>

          <div className="h-8 w-px bg-slate-200" />

          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Difficulty
            </p>

            <p className="mt-0.5 text-sm font-extrabold text-slate-900">
              Easy
            </p>
          </div>

        </div>
      </div>

      {/* Main dashboard card */}
      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">

        {/* Challenge */}
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-8">

          {/* Card header */}
          <div className="mb-6 flex items-center justify-between">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Current challenge
              </p>

              <h3 className="mt-1 text-lg font-bold text-slate-900">
                Verify the CAPTCHA
              </h3>
            </div>

            <div className="rounded-full bg-slate-50 px-3 py-1.5 text-[10px] font-bold text-slate-500">
              01 / Challenge
            </div>

          </div>

          {/* CAPTCHA */}
          <CaptchaChallenge
            captcha={challenge.captcha}
          />

          {/* Instruction */}
          <div className="mx-auto mt-7 max-w-md text-center">

            <p className="text-sm font-semibold text-slate-700">
              Select the matching CAPTCHA
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Inspect the characters carefully before
              making your selection.
            </p>

          </div>

          {/* Options */}
          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">

            {challenge.options.map(
              (option, index) => (
                <div
                  key={option}
                  style={{
                    animationDelay: `${index * 60}ms`,
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

        </section>

        {/* Right dashboard panel */}
        <aside className="flex flex-col gap-4">

          {/* Reward card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50">
                <Gem
                  size={16}
                  className="text-amber-500"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Current reward
                </p>

                <p className="text-sm font-extrabold text-slate-900">
                  +1 Gem
                </p>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-500">
                  Challenge progress
                </span>

                <span className="font-bold text-slate-700">
                  Ready
                </span>
              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-1/4 rounded-full bg-slate-800" />
              </div>
            </div>

          </div>

          {/* How it works */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center gap-2">
              <Sparkles
                size={15}
                className="text-slate-500"
              />

              <h3 className="text-sm font-bold text-slate-900">
                How it works
              </h3>
            </div>

            <div className="mt-5 space-y-4">

              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
                  1
                </span>

                <p className="text-xs leading-5 text-slate-500">
                  Read the CAPTCHA carefully.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
                  2
                </span>

                <p className="text-xs leading-5 text-slate-500">
                  Choose the exact matching option.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
                  3
                </span>

                <p className="text-xs leading-5 text-slate-500">
                  Verify your answer and earn Gems.
                </p>
              </div>

            </div>

          </div>

          {/* Security note */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Secure activity
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Each challenge generates a fresh set of
              options.
            </p>
          </div>

        </aside>

      </div>

      {/* Reward indicator */}
      <div className="mt-6">
        <RewardIndicator />
      </div>

      <p className="mt-6 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-slate-300">
        VELoop • Secure • Simple • Rewarding
      </p>

    </div>
  </main>
)}


      {/* =====================================================
          VERIFYING SCREEN
      ====================================================== */}
      {screen === "verifying" && (
        <div className="flex min-h-[calc(100vh-73px)] items-center justify-center px-5">

          <div className="text-center">

            {/* Spinner */}
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-200">

              <div className="h-7 w-7 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />

            </div>

            <p className="text-sm font-semibold text-slate-700">
              Verifying selection
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Please wait a moment
            </p>

          </div>

        </div>
      )}

      {/* =====================================================
          CHECKING SCREEN
      ====================================================== */}
      {screen === "checking" && (
        <CheckingScreen />
      )}

      {/* =====================================================
          RESULT SCREEN
      ====================================================== */}
      {screen === "result" && (
        <ResultScreen
          isCorrect={isCorrect}
          reward={reward}
          onClaim={handleClaim}
          onNoThanks={handleNoThanks}
        />
      )}

      {/* =====================================================
          MOCK REWARD / AD SCREEN
      ====================================================== */}
      {screen === "ad" && (
        <div className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-5">

          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100/60 blur-3xl" />

          <div className="relative w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_30px_90px_rgba(15,23,42,0.10)] sm:p-10">

            {/* Loading icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-50">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">

                <div className="h-6 w-6 animate-spin rounded-full border-2 border-amber-200 border-t-amber-500" />

              </div>

            </div>

            {/* Label */}
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Reward processing
            </p>

            {/* Heading */}
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
              Preparing your reward
            </h2>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
              Your reward is being prepared. A new
              challenge will be ready shortly.
            </p>

            {/* Progress bar */}
            <div className="mx-auto mt-7 max-w-xs">

              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">

                <div className="h-full w-1/2 animate-pulse rounded-full bg-slate-900" />

              </div>

            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">

              <span>💎</span>

              Mock reward flow

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;