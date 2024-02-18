import { SelfCare } from "./SelfCare/SelfCare";
import { Music } from "./Music/Music";

export const RelaxMode = () => {
  return (
    <div className="relaxMode">
      <h1>Relax Mode</h1>
      <SelfCare />
      <Music />
    </div>
  );
}
