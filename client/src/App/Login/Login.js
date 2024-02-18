import "./Login.css";

export const Login = () => {
  return (
    <div className="login">
      <h1>Sundae</h1>
      <img src="/icon2.png" alt="Sundae Logo"></img>
      <a href="/login"><button id="loginButton" type="button">Login</button></a>
    </div>
  );
}