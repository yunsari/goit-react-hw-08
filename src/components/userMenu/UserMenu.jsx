import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { clearContacts } from "../../redux/contacts/slice";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearContacts());
  };

  return (
    <div className={styles.menu}>
      <span className={styles.name}>{user.name}</span>
      <button className={styles.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
