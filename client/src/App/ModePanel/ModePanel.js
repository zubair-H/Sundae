import "./ModePanel.css";

export const ModePanel = () => {
  return (
    <div className="modePanel">
      <button className="modeButton" id="button-relax" type="button">
        Relax
      </button>
      <img id="logo" src="/icon2.png" alt="Ice Cream" />
      <button className="modeButton" id="button-study" type="button">
        Study
      </button>
    </div>
  );
}