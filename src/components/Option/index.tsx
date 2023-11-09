import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/app";
import "./styles.css";

type Options = "paper" | "scissors" | "rock";

interface OptionInterface {
  iconUrl: string;
  type: Options;
  showAnimation?: boolean;
}

function Option({ iconUrl, type, showAnimation }: OptionInterface) {
  const context = useContext(AppContext);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    import(`../../assets/${iconUrl}.svg`).then((i) => {
      setIcon(i?.default);
    });
  }, []);

  return (
    <button
      onClick={context!.onClickOption}
      id={type}
      className={`option ${showAnimation && "show"} ${
        context!.userPicked && "picked"
      }`}
      disabled={!!context!.userPicked}>
      <div className="option__icon">
        {icon && <img src={icon} alt="option" />}
      </div>
    </button>
  );
}

export default Option;
