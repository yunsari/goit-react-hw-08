import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations";

import styles from "./ContactList.module.css";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (contacts.length === 0) {
    return <p className={styles.frame}>No contacts found!</p>;
  }

  return (
    <ul className={styles.frame}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <div>
            <ul className={styles.item}>
              <li>{name}</li>
              <li>{number}</li>
            </ul>
          </div>
          <button
            type="button"
            onClick={() => handleDelete(id)}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
