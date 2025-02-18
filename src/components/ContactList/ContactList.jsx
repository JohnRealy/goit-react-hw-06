import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

export default function ContactList({ usersList, removeUser }) {
  return (
    <ul className={css.list}>
      {usersList.map((user) => (
        <li key={user.id} className={css.listItem}>
          <Contact user={user} handleRemove={removeUser} />
        </li>
      ))}
    </ul>
  );
}
