import { ReactNode, createContext, MouseEventHandler, useState } from "react";

interface AppContextInterface {
  userPicked: string;
  housePicked: string;
  onClickOption: MouseEventHandler<HTMLButtonElement>;
}

interface AppProviderInterface {
  children: ReactNode;
}

const AppContext = createContext<AppContextInterface | null>(null);

function AppProvider({ children }: AppProviderInterface) {
  const [userPicked, setUserPicked] = useState("");
  const [housePicked, setHousePicked] = useState("");

  const onClickOption: MouseEventHandler<HTMLButtonElement> = (e) => {
    setUserPicked(e.currentTarget.id);
    getHouseOption();
  };

  const getHouseOption = () => {
    const options = ["paper", "scissors", "rock"];
    const randomOption = options[Math.floor(Math.random() * (2 - 0 + 1)) + 0];

    setHousePicked(randomOption);
  };

  return (
    <AppContext.Provider value={{ userPicked, housePicked, onClickOption }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
