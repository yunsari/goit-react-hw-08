import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={styles.auth}>
      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>
    </div>
  );
}
