import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const filters = useSelector((state) => state.filters.filters.name);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filters.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {filteredData.map((user) => (
        <li key={user.id} className={css.listItem}>
          <Contact user={user} />
        </li>
      ))}
    </ul>
  );
}
