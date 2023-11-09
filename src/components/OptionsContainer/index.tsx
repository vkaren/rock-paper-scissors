import Option from "../Option";
import "./styles.css";

function OptionsContainer() {
  return (
    <section className="options-container">
      <Option iconUrl={"icon-paper"} type="paper" />
      <Option iconUrl={"icon-scissors"} type="scissors" />
      <Option iconUrl={"icon-rock"} type="rock" />
    </section>
  );
}

export default OptionsContainer;
