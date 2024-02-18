import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { ModePanel } from "./ModePanel/ModePanel";
import { useServer } from "./hooks/useServer";
import { Schedule } from "./Schedule/Schedule";  // Correct import
import './App.css';

function App() {
  const [isLoggedIn, profile] = useServer();

  return (
    <div className="App">
      <Navbar />
      <ModePanel />
      <Schedule />
    </div>
  );
}

export default App;