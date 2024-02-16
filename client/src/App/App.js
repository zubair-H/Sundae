import './App.css';
import { useServer } from "./useServer";

function App() {
  const [isLoggedIn, profile] = useServer();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sundae</h1>
        <h2>Logged in? {isLoggedIn}</h2>
        <a href="/login">Login</a>
        <a href="/logout">Logout</a>
      </header>
    </div>
  );
}



export default App;
