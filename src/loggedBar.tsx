import { Link } from "react-router-dom";
import "./App.css";

export default function LoggedNavbar() {
  async function logOut() {
    localStorage.removeItem("token");
  }
  return (
    <>
      <div className="navbar">
        <div className="nav-links">
          <div className="link-right">
            <Link to="/">Strona główna</Link>
          </div>
          <div className="link-left">
            <Link to="/">O nas</Link>
            <Link to="/">Discord</Link>
            <Link to="/" onClick={logOut}>
              Wyloguj się
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
