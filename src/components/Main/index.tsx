import { useContext } from "react";
import { AppContext } from "../../context/app";
import OptionsContainer from "../OptionsContainer";
import PickedOptionsContainer from "../PickedOptionsContainer";
import Rules from "../Rules";
import "./styles.css";

function Main() {
  const context = useContext(AppContext);
  return (
    <main className="main">
      {context!.userPicked ? <PickedOptionsContainer /> : <OptionsContainer />}

      <Rules />
    </main>
  );
}

export default Main;
