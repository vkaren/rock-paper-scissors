import Option from "../Option";
import "./styles.css";

function OptionsContainer() {
  return (
    <section className="options-container">
      <Option iconUrl={"icon-paper.svg"} type="paper" />
      <Option iconUrl={"icon-scissors.svg"} type="scissors" />
      <Option iconUrl={"icon-rock.svg"} type="rock" />
    </section>
  );
}

export default OptionsContainer;
