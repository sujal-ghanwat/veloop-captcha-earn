import { useEffect, useState } from "react";
import {
  Gem,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Zap,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

import Header from "./components/Header";
import CaptchaChallenge from "./components/CaptchaChallenge";
import CaptchaOption from "./components/CaptchaOption";
import CheckingScreen from "./components/CheckingScreen";
import ResultScreen from "./components/ResultScreen";
import FlowSteps from "./components/FlowSteps";
import PhoneShell from "./components/PhoneShell";
import { generateCaptcha } from "./data/captchaData";

/* =========================================================
   PREMIUM FEATURE FOOTER
========================================================= */

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

/* =========================================================
   APP
========================================================= */

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

  /* =======================================================
     CAPTCHA OPTION
     
     IMPORTANT:
     Balance is NOT changed here.

     Correct answer   = 1 Gem
     Incorrect answer = 0.5 Gem
  ======================================================= */

  const handleOptionClick = (option) => {
    if (isProcessing || selectedOption) {
      return;
    }

    setSelectedOption(option);
    setIsProcessing(true);

    /*
      Immediately move to the dedicated
      verification/loading screen.
    */
    setScreen("verifying");

    setTimeout(() => {
      const correct =
  String(option).replace(/\s/g, "").toUpperCase() ===
  String(challenge.captcha).replace(/\s/g, "").toUpperCase();

      setIsCorrect(correct);

      const earnedReward = correct ? 1 : 0.5;

      setReward(earnedReward);

      /*
        DO NOT update balance here.

        Balance changes ONLY when the user
        clicks Add to Balance.
      */

      /*
        Move to checking screen first so the
        result transition feels intentional.
      */
      setScreen("checking");

      setTimeout(() => {
        /*
          Result is shown as a separate
          dedicated application screen.
        */
        setScreen("result");

        setIsProcessing(false);
      }, 900);
    }, 1100);
  };

  /* =======================================================
     GENERATE NEW CAPTCHA
  ======================================================= */

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

  /* =======================================================
     ADD REWARD TO BALANCE

     THIS IS THE ONLY PLACE WHERE
     BALANCE IS UPDATED.

     Correct   -> +1
     Incorrect -> +0.5
  ======================================================= */

  const handleClaim = () => {
    if (reward <= 0) {
      return;
    }

    setBalance(
      (currentBalance) => currentBalance + reward
    );

    setScreen("ad");
  };

  /* =======================================================
     USER DOES NOT WANT REWARD
  ======================================================= */

  const handleNoThanks = () => {
    generateNewChallenge();
  };

  /* =======================================================
     REWARD PROCESSING SCREEN
  ======================================================= */

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
    <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden bg-[#030811] text-white">
      <Header balance={balance} />

     {/* ===================================================
    PREMIUM AMBIENT BACKGROUND
=================================================== */}

<div
  className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
  aria-hidden="true"
>
  {/* Base atmosphere */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0b1730_0%,#050b15_42%,#02050a_100%)]" />

  {/* Electric blue glow */}
  <div
    className="
      absolute -left-40 -top-40
      h-[520px] w-[520px]
      rounded-full
      bg-blue-500/[0.13]
      blur-[140px]
    "
  />

  {/* Purple glow */}
  <div
    className="
      absolute -right-40 top-[5%]
      h-[520px] w-[520px]
      rounded-full
      bg-purple-500/[0.11]
      blur-[150px]
    "
  />

  {/* Center interaction glow */}
  <div
    className="
      absolute left-1/2 top-[45%]
      h-[500px] w-[500px]
      -translate-x-1/2
      rounded-full
      bg-blue-400/[0.055]
      blur-[150px]
    "
  />

  {/* Bottom purple atmosphere */}
  <div
    className="
      absolute -bottom-48 left-[8%]
      h-[500px] w-[500px]
      rounded-full
      bg-purple-600/[0.08]
      blur-[150px]
    "
  />

  {/* Gold reward atmosphere */}
  <div
    className="
      absolute -bottom-40 right-[5%]
      h-[420px] w-[420px]
      rounded-full
      bg-amber-400/[0.045]
      blur-[140px]
    "
  />

  {/* Subtle blue light beam */}
  <div
    className="
      absolute left-1/2 top-0
      h-[1px] w-[70%]
      -translate-x-1/2
      bg-gradient-to-r
      from-transparent
      via-blue-400/30
      to-transparent
      blur-sm
    "
  />

  {/* Premium grid */}
  <div
    className="
      absolute inset-0
      opacity-[0.035]
      [background-image:linear-gradient(rgba(96,165,250,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.45)_1px,transparent_1px)]
      [background-size:52px_52px]
    "
  />

  {/* Soft vignette */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.38)_100%)]" />
</div>

      {/* ===================================================
          CAPTCHA SCREEN
      =================================================== */}

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
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-sm text-slate-400 transition hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-white sm:h-9 sm:w-9"
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
                      onRefresh={generateNewChallenge}
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
<div
  className="
    group/reward relative mt-3 min-w-0 overflow-hidden
    rounded-xl border border-amber-300/20
    bg-gradient-to-r from-amber-300/[0.08] via-yellow-300/[0.035] to-transparent
    p-3
    shadow-[0_0_25px_rgba(251,191,36,0.045)]
    transition-all duration-300
    hover:border-amber-300/30
    hover:shadow-[0_0_32px_rgba(251,191,36,0.08)]
    sm:mt-4 sm:p-3.5
  "
>
  {/* Gold glow */}
  <div
    className="
      pointer-events-none absolute -right-8 top-1/2
      h-24 w-24 -translate-y-1/2
      rounded-full bg-amber-400/[0.10]
      blur-3xl
    "
    aria-hidden="true"
  />

  {/* Shine */}
  <div
    className="
      pointer-events-none absolute inset-y-0 left-[-100%]
      w-1/3 skew-x-[-20deg]
      bg-gradient-to-r from-transparent via-white/[0.06] to-transparent
      transition-all duration-1000
      group-hover/reward:left-[130%]
    "
    aria-hidden="true"
  />

  <div className="relative z-10 flex min-w-0 items-center justify-between gap-3">

    {/* Gem */}
    <div className="flex min-w-0 items-center gap-2.5">
      <div
        className="
          relative flex h-10 w-10 shrink-0
          items-center justify-center
          rounded-xl
          border border-amber-300/25
          bg-amber-300/[0.10]
          shadow-[0_0_22px_rgba(251,191,36,0.12)]
          transition-transform duration-300
          group-hover/reward:scale-105
        "
      >
        <div
          className="
            absolute inset-1 rounded-lg
            border border-amber-200/10
            animate-pulse
          "
        />

        <Gem
          size={19}
          strokeWidth={1.8}
          className="
            relative z-10
            text-amber-300
            drop-shadow-[0_0_8px_rgba(251,191,36,0.45)]
          "
        />
      </div>

      <div className="min-w-0">
        <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-amber-200/60">
          Your reward
        </p>

        <p className="mt-0.5 text-[12px] font-semibold text-slate-300">
          Complete verification
        </p>
      </div>
    </div>

    {/* Reward amount */}
    <div className="shrink-0 text-right">
      <p className="text-[18px] font-black tracking-tight text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.25)]">
        +1
      </p>

      <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-amber-200/50">
        Gem
      </p>
    </div>
  </div>

  {/* Bottom progress hint */}
  <div className="relative z-10 mt-3 flex items-center gap-2">
    <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-amber-500/70 to-yellow-300/80" />
    </div>

    <span className="text-[7px] font-bold uppercase tracking-[0.12em] text-slate-600">
      Ready
    </span>
  </div>
</div>

                </div>
              </PhoneShell>
            </div>
          </div>
        </main>
      )}

      {/* ===================================================
          PROFESSIONAL VERIFICATION / LOADING SCREEN
      =================================================== */}

      {screen === "verifying" && (
        <main className="relative z-10 w-full">
          <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-6 sm:py-10 lg:px-8">

            {/* PAGE BRANDING */}
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
                <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-white bg-clip-text text-transparent">
                  EARN FLOW
                </span>
              </h1>

              <p className="mt-2 text-[10px] font-medium text-slate-500 sm:text-sm">
                Secure Verification
                <span className="mx-1.5">
                  •
                </span>
                Earn Rewards
                <span className="mx-1.5">
                  •
                </span>
                Build Trust
              </p>
            </section>

            {/* PROGRESS FLOW */}
            <div className="mx-auto mt-6 w-full max-w-6xl sm:mt-8">
              <FlowSteps currentStep={3} />
            </div>

            {/* PHONE */}
            <div className="mx-auto mt-5 w-full max-w-[390px] sm:mt-7">
              <PhoneShell>

                <div className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden px-5 py-10 text-center sm:min-h-[650px] sm:px-7">

                  {/* Animated ambient glow */}
                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.06] blur-[80px]" />

                  {/* Animated rings */}
                  <div className="relative flex h-32 w-32 items-center justify-center sm:h-40 sm:w-40">

                    <div className="absolute inset-0 animate-ping rounded-full border border-purple-400/10" />

                    <div className="absolute inset-2 rounded-full border border-purple-400/15" />

                    <div className="absolute inset-5 animate-pulse rounded-full border border-blue-400/20" />

                    <div className="absolute inset-8 rounded-full border border-purple-300/20 bg-purple-400/[0.05] shadow-[0_0_45px_rgba(168,85,247,0.12)]" />

                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-300/25 bg-[#0b1220] shadow-[0_0_30px_rgba(168,85,247,0.12)] sm:h-20 sm:w-20">

                      <LockKeyhole
                        size={29}
                        strokeWidth={1.8}
                        className="animate-pulse text-purple-300 sm:h-8 sm:w-8"
                      />

                    </div>
                  </div>

                  {/* Main loading title */}
                  <div className="relative z-10 mt-8">
                    <div className="flex items-center justify-center gap-2">
                      <h2 className="text-2xl font-bold text-white sm:text-[26px]">
                        Verifying
                      </h2>

                      <span className="flex gap-1 pt-2">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-300 [animation-delay:-0.3s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-300 [animation-delay:-0.15s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-300" />
                      </span>
                    </div>

                    <p className="mx-auto mt-2 max-w-[250px] text-sm leading-6 text-slate-500">
                      Checking your selected answer
                      and preparing your result.
                    </p>
                  </div>

                  {/* Loading progress */}
                  <div className="relative z-10 mt-8 w-full max-w-[250px]">

                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-slate-600">
                        Verification
                      </span>

                      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-purple-300">
                        Processing
                      </span>
                    </div>

                    <div className="relative h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <div className="absolute inset-y-0 left-0 w-1/2 animate-pulse rounded-full bg-gradient-to-r from-purple-500 via-blue-400 to-purple-300" />

                      <div className="absolute inset-y-0 left-0 w-full -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                  </div>

                  {/* Status cards */}
                  <div className="relative z-10 mt-8 w-full max-w-[270px] space-y-2">

                    <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2.5 text-left">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-400/[0.08]">
                        <CheckCircle2
                          size={14}
                          className="text-purple-300"
                        />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold text-slate-300">
                          Answer received
                        </p>

                        <p className="text-[8px] text-slate-600">
                          Your selection is being checked
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-2.5 text-left">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-400/[0.08]">
                        <ShieldCheck
                          size={14}
                          className="text-blue-300"
                        />
                      </div>

                      <div>
                        <p className="text-[9px] font-bold text-slate-300">
                          Security check
                        </p>

                        <p className="text-[8px] text-slate-600">
                          Validating verification
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Bottom security note */}
                  <div className="relative z-10 mt-7 flex items-center justify-center gap-2">
                    <LockKeyhole
                      size={11}
                      className="text-slate-600"
                    />

                    <p className="text-[8px] tracking-wide text-slate-600">
                      Please wait while verification completes
                    </p>
                  </div>

                </div>
              </PhoneShell>
            </div>
          </div>
        </main>
      )}

      {/* ===================================================
          CHECKING
      =================================================== */}

      {screen === "checking" && (
        <main className="relative z-10 w-full">
          <CheckingScreen />
        </main>
      )}

      {/* ===================================================
          RESULT — SEPARATE SCREEN
      =================================================== */}

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

      {/* ===================================================
          REWARD PROCESSING
      =================================================== */}

      {screen === "ad" && (
        <main className="relative z-10 flex min-h-[calc(100vh-74px)] w-full items-center justify-center px-4 py-8 sm:px-5">

          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/[0.09] bg-[#09111d] p-6 text-center shadow-[0_25px_80px_rgba(0,0,0,0.4)] sm:p-8">

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-amber-400/[0.06] blur-3xl" />

            {/* Icon */}
            <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-300/10 bg-amber-300/[0.04] sm:h-20 sm:w-20">
              <Gem
                size={25}
                className="animate-pulse text-amber-300 sm:h-7 sm:w-7"
              />
            </div>

            <p className="relative mt-5 text-lg font-bold text-white">
              Preparing your reward
            </p>

            <p className="relative mt-2 text-xs leading-5 text-slate-500">
              Your reward confirmation is being prepared.
            </p>

            {/* Progress */}
            <div className="relative mx-auto mt-6 h-1.5 max-w-xs overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-amber-400 to-yellow-200" />
            </div>

            <div className="relative mt-5 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
              <Sparkles size={12} />
              Processing reward
            </div>

          </div>
        </main>
      )}

      {/* ===================================================
          GLOBAL FEATURE FOOTER
          ALWAYS VISIBLE ON MOBILE + DESKTOP
      =================================================== */}

      <FeatureFooter />

    </div>
  );
}

export default App;