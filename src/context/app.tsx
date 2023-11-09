import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  MouseEventHandler,
} from "react";

type HasUserWon = "win" | "lose" | "tie" | null;
type OptionPicked = "paper" | "scissors" | "rock" | null;

interface AppContextInterface {
  userPicked: OptionPicked;
  housePicked: OptionPicked;
  hasUserWon: HasUserWon;
  score: number;
  onClickOption: MouseEventHandler<HTMLButtonElement>;
  playAgain: MouseEventHandler<HTMLButtonElement>;
}

interface AppProviderInterface {
  children: ReactNode;
}

const AppContext = createContext<AppContextInterface | null>(null);

function AppProvider({ children }: AppProviderInterface) {
  const [userPicked, setUserPicked] = useState<OptionPicked>(null);
  const [housePicked, setHousePicked] = useState<OptionPicked>(null);
  const [hasUserWon, setHasUserWon] = useState<HasUserWon>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(getScore());
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (userPicked && housePicked) {
      timer = setTimeout(() => checkGameWinner(), 500);
    }

    return () => clearTimeout(timer);
  }, [userPicked, housePicked]);

  useEffect(() => {
    if (hasUserWon) {
      changeScore();
    }
  }, [hasUserWon]);

  useEffect(() => {
    if (score) {
      saveScore();
    }
  }, [score]);

  const onClickOption: MouseEventHandler<HTMLButtonElement> = (e) => {
    const option = e.currentTarget.id;

    if (option === "paper" || option === "scissors" || option === "rock") {
      setUserPicked(option);
      getHouseOption();
    }
  };

  const getHouseOption = () => {
    const options: OptionPicked[] = ["paper", "scissors", "rock"];
    const randomOption: OptionPicked =
      options[Math.floor(Math.random() * (2 - 0 + 1)) + 0];

    setHousePicked(randomOption);
  };

  const checkGameWinner = () => {
    if (userPicked === housePicked) {
      return setHasUserWon("tie");
    }

    if (
      (userPicked === "scissors" && housePicked === "paper") ||
      (userPicked === "paper" && housePicked === "rock") ||
      (userPicked === "rock" && housePicked === "scissors")
    ) {
      return setHasUserWon("win");
    }

    setHasUserWon("lose");
  };

  const changeScore = () => {
    if (hasUserWon === "win") {
      setScore((score) => score + 1);
    } else if (hasUserWon === "lose" && score > 0) {
      setScore((score) => score - 1);
    }
  };

  const saveScore = () => {
    localStorage.setItem("score", JSON.stringify(score));
  };

  const getScore = () => {
    return JSON.parse(localStorage.getItem("score") || "0");
  };

  const playAgain: MouseEventHandler<HTMLButtonElement> = () => {
    setUserPicked(null);
    setHousePicked(null);
    setHasUserWon(null);
  };

  return (
    <AppContext.Provider
      value={{
        userPicked,
        housePicked,
        hasUserWon,
        score,
        onClickOption,
        playAgain,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
