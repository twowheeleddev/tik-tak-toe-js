// At the top of ui.js

import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.2/index.js";

export function updateHandImages(userHand, botHand, userChoice, botChoice) {
  userHand.src = `images/${translateChoice(userChoice)}.png`;
  botHand.src = `images/${translateChoice(botChoice)}.png`;
}

function translateChoice(letter) {
  return letter === "R" ? "rock" : letter === "P" ? "paper" : "scissors";
}

export function animateHands(userHand, botHand) {
  gsap.fromTo(
    userHand,
    { y: -40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 }
  );
  gsap.fromTo(
    botHand,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5 }
  );
}

export function animateResultText(resultText) {
  gsap.fromTo(
    resultText,
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.3 }
  );
}

export function fireConfetti(outcome) {
  if (outcome === "you") {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
    });
  }
}
