export let isPlaying = false;
export let userScore = 0;
export let botScore = 0;

export const botImages = {
  R: "images/rock.png",
  P: "images/paper.png",
  S: "images/scissors.png",
};

export function resetPlayState() {
  isPlaying = false;
}

export function setPlaying(state) {
  isPlaying = state;
}

export function incrementScore(player) {
  if (player === "you") userScore++;
  if (player === "bot") botScore++;
}

export function getScore(player) {
  return player === "you" ? userScore : botScore;
}

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
