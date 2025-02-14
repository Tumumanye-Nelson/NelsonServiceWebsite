import { Link } from "react-scroll";
import styles from "./NavBar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link to="home" smooth={true} duration={300} className={styles.link}>
          Logo
        </Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={300}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={300}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={300}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="service" smooth={true} duration={300}>
              Service
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
