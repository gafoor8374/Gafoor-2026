import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Log In");
  return (
    <div className="home-container">
      <div className="logo">
        <img className="logo-app" alt="logo" src={LOGO_URL} />
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
