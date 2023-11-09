import Option from "../Option";
import { useContext } from "react";
import { AppContext } from "../../context/app";
import "./styles.css";

type PickedOptionType = "user" | "house";

interface PickedOptionInterface {
  type: PickedOptionType;
}

function PickedOption({ type }: PickedOptionInterface) {
  const context = useContext(AppContext);
  const isHouseOptionType = type === "house";

  const pickedOption = isHouseOptionType
    ? context!.housePicked
    : context!.userPicked;

  const iconsUrls = {
    paper: "icon-paper.svg",
    scissors: "icon-scissors.svg",
    rock: "icon-rock.svg",
  };
  const iconUrl = iconsUrls[pickedOption as keyof typeof iconsUrls];

  return (
    <div
      id={type}
      className={`picked-option ${
        ((isHouseOptionType && context!.hasUserWon === "lose") ||
          (!isHouseOptionType && context!.hasUserWon === "win")) &&
        "winner"
      } `}>
      <h3 className="picked-option__title">
        {isHouseOptionType ? "The house picked" : "You picked"}
      </h3>
      <div className="picked-option__container">
        <Option
          iconUrl={iconUrl}
          type={pickedOption !== null && pickedOption}
          showAnimation={isHouseOptionType}
        />
        <div className="picked-option__winner_b1">
          <div className="picked-option__winner_b2">
            <div className="picked-option__winner_b3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickedOption;
