import React from "react";
import { useServer } from "./useServer";
import './App.css';
import { Schedule } from "./schedule";  // Correct import

function Toolbar() {
  // Implement your toolbar logic here
  return (
    <div>
      {/* Toolbar content */}
    </div>
  );
}

function App() {
  const [isLoggedIn, profile] = useServer();

  return (
    <div className="App">
      <header className="App-header">
        <h3>Profile {JSON.stringify(profile)}</h3>
        <Schedule /> {/* Correct usage of Schedule component */}
        <a href="/login">Login</a>
        <a href="/logout">Logout</a>
        <Toolbar />
        <h2>Logged in? {isLoggedIn ? "true" : "false"}</h2>
        <button>
          <img id="logo" src="/Designer-removebg-preview.png" alt="Ice Cream" />
        </button>
        <button id="button-study" type="button">
          Study
        </button>
        <button id="button-relax" type="button">
          Relax
        </button>
      </header>
    </div>
  );
}

export default App;
