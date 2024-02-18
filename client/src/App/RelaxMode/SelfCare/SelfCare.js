import "./SelfCare.css";

const STRATS = [
  "Take breaks",
  "Get enough food and water",
  "Exercise",
  "Socialize"
];

export const SelfCare = () => {

  return (
    <div className="card">
      <h2>Self-Care</h2>
      <ul>
        {STRATS.map(strat => 
          <li className="selfCareLi">{strat}</li>
        )}
      </ul>
    </div>
  );
}