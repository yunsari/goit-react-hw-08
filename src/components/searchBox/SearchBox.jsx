import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={styles.frame}>
      <label>
        Search Contacts:
        <input
          value={filter}
          onChange={(e) => dispatch(setNameFilter(e.target.value))}
          placeholder="Search contact"
        />
      </label>
    </div>
  );
}
