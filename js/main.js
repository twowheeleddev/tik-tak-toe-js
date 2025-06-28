import { getBotChoice } from "./state.js";
import { handleGame } from "./gameLogic.js";

document.addEventListener("DOMContentLoaded", () => {
  // === Theme Toggle Setup ===
  const themeToggle = document.getElementById("themeToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem("theme");

  const applyTheme = (theme) => {
    document.body.classList.toggle("dark", theme === "dark");
    themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  };

  applyTheme(storedTheme || (prefersDark ? "dark" : "light"));

  themeToggle.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark")
      ? "light"
      : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });

  // === Game Logic ===
  const choices = document.querySelectorAll(".choice");
  const userHand = document.querySelector(".hand.user img");
  const botHand = document.querySelector(".hand.bot img");
  const resultText = document.querySelector(".result");
  const userScoreEl = document.getElementById("userScore");
  const botScoreEl = document.getElementById("botScore");

  choices.forEach((choice) => {
    choice.addEventListener("click", () =>
      handleGame(choice, userHand, botHand, resultText, userScoreEl, botScoreEl)
    );
  });

  // === VANTA Background Init ===
  VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x7d2ae8,
    backgroundColor: getComputedStyle(document.body).getPropertyValue("--bg"),
  });
});
