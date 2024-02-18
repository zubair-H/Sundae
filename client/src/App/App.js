import React from "react";
import { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { ModePanel } from "./ModePanel/ModePanel";
import { StudyMode } from "./StudyMode/StudyMode";
import { RelaxMode } from "./RelaxMode/RelaxMode";
import { Login } from "./Login/Login";
import { useServer } from "./hooks/useServer";
import './App.css';

// Test purposes only
const DISABLE_LOGIN_SCREEN = false;

function App() {
  const [isLoggedIn, profile] = useServer();
  const [isRelaxMode, setIsRelaxMode] = useState(true);

  const getName = () => (profile?.firstName || '') + " " + (profile?.lastName || '');

  if (isLoggedIn || DISABLE_LOGIN_SCREEN) {
    return (
      <div className="App">
        <Navbar userName={getName()}/>
        <h1>Sundae</h1>
        <ModePanel setIsRelaxMode={setIsRelaxMode} />
        {isRelaxMode ? <RelaxMode /> : <StudyMode />}
      </div>
    );
  } else {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;