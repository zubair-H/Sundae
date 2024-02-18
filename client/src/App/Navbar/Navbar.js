import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/login"><button>Login</button></a>
      <a href="/logout"><button>Logout</button></a>
    </div>
  );
}