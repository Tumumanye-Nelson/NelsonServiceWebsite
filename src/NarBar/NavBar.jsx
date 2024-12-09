import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Service">Service</Link>
          </li> <li>
            <Link to="/Login">Login</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};
export default Navbar;