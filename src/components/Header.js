import { LOGO_URL } from "../utils/constants";

const Header = () =>(
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
            </ul>
        </div>
    </div>
)

export default Header;