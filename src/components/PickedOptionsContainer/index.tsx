import PickedOption from "../PickedOption";
import "./styles.css";

function PickedOptionsContainer() {
  return (
    <section className="picked-options">
      <PickedOption type="user" />
      <PickedOption type="house" />
    </section>
  );
}

export default PickedOptionsContainer;
