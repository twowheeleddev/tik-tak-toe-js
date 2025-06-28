import { botImages } from "./state.js";

export function getBotChoice() {
  const choices = Object.keys(botImages);
  return choices[Math.floor(Math.random() * choices.length)];
}

export function getOutcome(userChoice, botChoice) {
  if (userChoice === botChoice) return "draw";
  if (
    (userChoice === "R" && botChoice === "S") ||
    (userChoice === "P" && botChoice === "R") ||
    (userChoice === "S" && botChoice === "P")
  ) {
    return "you";
  }
  return "bot";
}
export const outcomeMap = {
  RS: "you",
  RP: "bot",
  RR: "draw",
  PR: "you",
  PP: "draw",
  PS: "bot",
  SR: "bot",
  SP: "you",
  SS: "draw",
};
