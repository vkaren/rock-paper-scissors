import Option from "../Option";
import { useContext } from "react";
import { AppContext } from "../../context/app";
import "./styles.css";

interface PickedOptionInterface {
  type: string;
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
    <div className="picked-option">
      <h3 className="picked-option__title">
        {isHouseOptionType ? "The house picked" : "You picked"}
      </h3>
      <div className="picked-option__container">
        <Option
          iconUrl={iconUrl}
          type={pickedOption}
          showAnimation={isHouseOptionType}
        />
      </div>
    </div>
  );
}

export default PickedOption;
