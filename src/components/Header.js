import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import {Link} from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Log In");
  const onlineStatus = useOnlineStatus();

  const {loggedUser} = useContext(UserContext);
  console.log(loggedUser);

  return (
    <div className="flex justify-between m-2 bg-pink-300 sm:bg-blue-300 lg:bg-green-200">
      <div className="logo">
        <img className="w-24 p-4"alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-5">
          <li className="px-4">Online Status: {onlineStatus ? '✅': '🔴'}</li>
          <li className="px-4"><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
          <li className="px-4" ><Link to="/about" style={{textDecoration:"none"}}>About</Link></li>
          <li className="px-4"><Link to="/contact" style={{textDecoration:"none"}}>Contact</Link></li>
          <li className="px-4"><Link to ="/grocery" style = {{textDecoration:"none"}}>Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button
            onClick={() => {
              btnLogin === "Log In"
                ? setBtnLogin("Log Out")
                : setBtnLogin("Log In");
            }}
            className="rounded-lg bg-gray-200 border border-black"
          ><Link to="/login">
            {btnLogin}
          </Link></button>
          <li className="px-4">{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
