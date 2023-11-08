import { AppProvider } from "../context/app";
import Header from "../components/Header";
import Main from "../components/Main";
import "./styles.css";

function App() {
  return (
    <AppProvider>
      <Header />
      <Main />
    </AppProvider>
  );
}

export default App;
