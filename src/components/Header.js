import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router"

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Log In");
  return (
    <div className="home-container">
      <div className="logo">
        <img className="logo-app" alt="logo" src={LOGO_URL} />
      </div>
      <div className="navbar">
        <ul>
          <li><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
          <li ><Link to="/about" style={{textDecoration:"none"}}>About</Link></li>
          <li><Link to="/contact" style={{textDecoration:"none"}}>Contact</Link></li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnLogin === "Log In"
                ? setBtnLogin("Log Out")
                : setBtnLogin("Log In");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
