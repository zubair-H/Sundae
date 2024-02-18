import "./ModePanel.css";

export const ModePanel = (props) => {

  const enableRelaxMode = () => props.setIsRelaxMode(true);
  const disableRelaxMode = () => props.setIsRelaxMode(false);

  return (
    <div className="modePanel">
      <button className="modeButton" id="button-relax" onClick={enableRelaxMode} type="button">
        Relax
      </button>
      <img id="logo" src="/icon2.png" alt="Ice Cream" />
      <button className="modeButton" id="button-study" onClick={disableRelaxMode} type="button">
        Study
      </button>
    </div>
  );
}