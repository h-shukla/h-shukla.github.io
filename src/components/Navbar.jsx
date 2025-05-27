// import logo from '../assets/kevinRushLogo.png'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// TODO: Add a logo pic. Just the initials logo would be great
const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <img src={logo} alt="navbar"/> */}
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <FaSquareXTwitter />
            </div>
        </nav>
    );
};

export default Navbar;
