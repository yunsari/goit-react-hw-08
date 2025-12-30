import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={styles.item}>
      <div>
        <ul className={styles.item}>
          <li>{name}</li>
          <li>{number}</li>
        </ul>
      </div>
      <div>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default Contact;
