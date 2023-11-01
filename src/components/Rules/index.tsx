import { useState } from "react";
import { ReactComponent as RulesImg } from "../../assets/image-rules.svg";
import { ReactComponent as CloseIcon } from "../../assets/icon-close.svg";
import "./styles.css";

function Rules() {
  const [showRules, setShowRules] = useState(false);

  const showRulesModal = () => {
    setShowRules(true);
  };

  const closeRulesModal = () => {
    setShowRules(false);
  };

  return (
    <>
      <button onClick={showRulesModal} className="rules_btn">
        Rules
      </button>

      {showRules && (
        <>
          <section className="modal">
            <h2 className="modal__title">Rules</h2>
            <button onClick={closeRulesModal} className="modal__close-btn">
              <CloseIcon />
            </button>
            <RulesImg className="modal__rules-img" />
          </section>

          <div
            onClick={closeRulesModal}
            className="overlay"
            role="button"></div>
        </>
      )}
    </>
  );
}

export default Rules;
