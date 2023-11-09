import PickedOption from "../PickedOption";
import GameMessage from "../GameMessage";
import "./styles.css";

function PickedOptionsContainer() {
  return (
    <section className="picked-options">
      <PickedOption type="user" />
      <GameMessage />
      <PickedOption type="house" />
    </section>
  );
}

export default PickedOptionsContainer;
