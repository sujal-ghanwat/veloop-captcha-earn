const captchaPool = [
  "A7K2P9",
  "M4R8T2",
  "Q8L3B7",
  "H6P2C9",
  "T9V4K6",
  "B5N7X2",
  "R3D8M6",
  "K9F2W4",
  "P6C8L1",
  "V4H7Q9",
  "N8T3Y5",
  "D2K6R8",
  "X7M4B9",
  "L5Q2P8",
  "F9R6C3",
];

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[randomIndex]] = [
      copy[randomIndex],
      copy[i],
    ];
  }

  return copy;
}

function createSimilarOption(captcha, variation) {
  const characters = captcha.split("");

  if (variation === 1) {
    [characters[1], characters[2]] = [
      characters[2],
      characters[1],
    ];
  }

  if (variation === 2) {
    [characters[3], characters[4]] = [
      characters[4],
      characters[3],
    ];
  }

  return characters.join("");
}

function createDifferentOption() {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const numbers = "23456789";

  let result = "";

  for (let i = 0; i < 6; i++) {
    const source =
      i % 2 === 0 ? letters : numbers;

    result +=
      source[Math.floor(Math.random() * source.length)];
  }

  return result;
}

export function generateCaptcha(previousCaptcha = null) {
  const available = captchaPool.filter(
    (captcha) => captcha !== previousCaptcha
  );

  const captcha =
    available[
      Math.floor(Math.random() * available.length)
    ];

  const similarOption1 = createSimilarOption(
    captcha,
    1
  );

  const similarOption2 = createSimilarOption(
    captcha,
    2
  );

  const differentOption = createDifferentOption();

  const options = shuffle([
    captcha,
    similarOption1,
    similarOption2,
    differentOption,
  ]);

  return {
    id: `${captcha}-${Date.now()}-${Math.random()}`,
    captcha,
    options,
    correctAnswer: captcha,
  };
}