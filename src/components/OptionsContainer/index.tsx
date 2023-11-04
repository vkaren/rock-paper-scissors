import Option from "../Option";
import paperIcon from "../../assets/icon-paper.svg";
import scissorsIcon from "../../assets/icon-scissors.svg";
import rockIcon from "../../assets/icon-rock.svg";
import "./styles.css";

function OptionsContainer() {
  return (
    <section className="options-container">
      <Option iconUrl={paperIcon} type="paper" />
      <Option iconUrl={scissorsIcon} type="scissors" />
      <Option iconUrl={rockIcon} type="rock" />
    </section>
  );
}

export default OptionsContainer;
