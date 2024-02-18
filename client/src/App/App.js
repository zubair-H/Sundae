import './App.css';
import { useServer } from "./hooks/useServer";

function App() {
  const [isLoggedIn, profile] = useServer();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sundae</h1>
        <img src="/icon.png" alt="Ice Cream"></img>
        <h2>Logged in? {isLoggedIn ? "true" : "false"}</h2>
        <h3>Profile {JSON.stringify(profile)}</h3>
        <a href="/login">Login</a>
        <a href="/logout">Logout</a>
      </header>
    </div>
  );
}

export default App;
