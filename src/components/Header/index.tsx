import Score from "../Score";
import "./styles.css";

function Header() {
  return (
    <header className="header">
      <div className="header__title_box">
        <h1 className="header__title">Rock Paper Scissors</h1>
      </div>

      <Score />
    </header>
  );
}

export default Header;
