import {
  animateHands,
  animateResultText,
  fireConfetti,
  updateHandImages,
} from "./ui.js";
import {
  botScore,
  getScore,
  incrementScore,
  isPlaying,
  resetPlayState,
  setPlaying,
  userScore,
} from "./state.js";
import { getBotChoice, getOutcome } from "./utils.js";

export function handleGame(
  choiceEl,
  userHand,
  botHand,
  resultText,
  userScoreEl,
  botScoreEl
) {
  if (isPlaying) return;
  setPlaying(true);

  resultText.textContent = "Wait...";
  userHand.src = "images/rock.png";
  botHand.src = "images/rock.png";

  setTimeout(() => {
    const userChoice = choiceEl.dataset.choice;
    const botChoice = getBotChoice();
    const outcome = getOutcome(userChoice, botChoice);

    updateHandImages(userHand, botHand, userChoice, botChoice);
    resultText.textContent =
      outcome === "draw" ? "It's a draw!" : `${outcome.toUpperCase()} wins!`;

    if (outcome === "you") incrementScore("you");
    if (outcome === "bot") incrementScore("bot");

    userScoreEl.textContent = getScore("you");
    botScoreEl.textContent = getScore("bot");

    animateHands(userHand, botHand);
    animateResultText(resultText);
    fireConfetti(outcome);

    setTimeout(resetPlayState, 600);
  }, 1000);
}
