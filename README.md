# VELoop — CAPTCHA Rewards

A modern React-based CAPTCHA challenge interface where users complete simple verification challenges and earn Gems as rewards.

## Live Demo

**Vercel:** https://veloop-captcha-earn.vercel.app/

## Overview

VELoop is a frontend-focused rewards experience built with React and Vite. Users are presented with a CAPTCHA challenge and four possible answers. After selecting an option, the application verifies the response and displays the corresponding reward.

The interface is designed with a clean, modern dashboard layout and responsive behavior for desktop and mobile devices.

## Features

* CAPTCHA challenge generation
* Four randomized answer options
* Correct and incorrect answer states
* Verification and checking animations
* Gem-based reward system
* `+1 Gem` for a correct answer
* `+0.5 Gems` for an incorrect answer
* Animated reward reveal
* Claim Reward flow
* No Thanks option for starting a new challenge
* Mock reward processing flow
* Responsive dashboard UI
* Smooth transitions and micro-interactions

## Tech Stack

* React
* Vite
* JavaScript
* Tailwind CSS
* Framer Motion
* Lucide React

## How It Works

1. A CAPTCHA challenge is generated.
2. Four answer options are displayed.
3. The user selects the option matching the CAPTCHA.
4. A verification animation is displayed.
5. The answer is checked.
6. The user receives:

   * `+1 Gem` for a correct answer
   * `+0.5 Gems` for an incorrect answer
7. The result screen provides options to claim the reward or continue to another challenge.
8. The next CAPTCHA is generated automatically.

## Project Structure

```text
src/
├── components/
│   ├── CaptchaChallenge.jsx
│   ├── CaptchaOption.jsx
│   ├── CheckingScreen.jsx
│   ├── Header.jsx
│   ├── RewardIndicator.jsx
│   └── ResultScreen.jsx
│
├── data/
│   └── captchaData.js
│
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sujal-ghanwat/veloop-captcha-earn.git
```

### 2. Open the project

```bash
cd veloop-captcha-earn
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local Vite development URL shown in your terminal.

## Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is deployed using Vercel.

Every update can be pushed to the connected GitHub repository and deployed through Vercel.

## Reward Logic

| Result            |   Reward |
| ----------------- | -------: |
| Correct CAPTCHA   |   +1 Gem |
| Incorrect CAPTCHA | +0.5 Gem |

The current Gem balance is maintained on the client side during the active session.

## Design

The interface focuses on:

* Minimal visual hierarchy
* Clean cards and spacing
* Responsive layouts
* Accessible interactive elements
* Subtle animations
* Clear reward feedback
* Simple user flow

## Future Improvements

Possible future enhancements include:

* Persistent user accounts
* Server-side reward storage
* Challenge history
* User statistics
* Achievement system
* Additional challenge types
* Persistent Gem balance

## License

This project is intended for learning, development, and demonstration purposes.
