import "./styles.css";

function Option(params: { iconUrl: string; type: string }) {
  return (
    <button className={`option ${params.type}`}>
      <div className="option__icon">
        <img src={params.iconUrl} alt="option" />
      </div>
    </button>
  );
}

export default Option;
