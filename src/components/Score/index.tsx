import { useContext } from "react";
import { AppContext } from "../../context/app";
import "./styles.css";

function Score() {
  const context = useContext(AppContext);

  return (
    <div className="score">
      <span className="score__title">Score</span>
      <span className="score__value">{context!.score}</span>
    </div>
  );
}

export default Score;
