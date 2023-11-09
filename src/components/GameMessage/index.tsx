import { useContext } from "react";
import { AppContext } from "../../context/app";
import "./styles.css";

function GameMessage() {
  const context = useContext(AppContext);

  return (
    <section className={`game-message ${context!.hasUserWon && "show"}`}>
      <h2 className="game-message__title">
        {context!.hasUserWon !== "tie"
          ? `You ${context!.hasUserWon}`
          : "Tie game"}
      </h2>
      <button
        onClick={context!.playAgain}
        id={`${context!.hasUserWon}`}
        className="game-message__play-btn">
        Play again
      </button>
    </section>
  );
}

export default GameMessage;
