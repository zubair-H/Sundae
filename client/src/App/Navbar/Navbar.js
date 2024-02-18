import "./Navbar.css";

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <p className="navbar-item">Hello {props.userName}!</p>
      <a className="navbar-item" href="/logout"><button>Logout</button></a>
    </div>
  );
}