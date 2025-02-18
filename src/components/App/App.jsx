import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [users, setUsers] = useState(() => {
    const data = JSON.parse(localStorage.getItem("saved-users"));
    if (!data) {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    }
    return data;
  });

  useEffect(() => {
    localStorage.setItem("saved-users", JSON.stringify(users));
  }, [users]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleRemove = (id) => {
    if (searchQuery) {
      return;
    }
    const newList = users.filter((user) => user.id !== id);

    setUsers(newList);
  };

  const handleSubmit = (values, actions) => {
    setUsers([
      ...users,
      {
        id: nanoid(),
        name: values.username,
        number: values.number,
      },
    ]);
    actions.resetForm();
  };

  let usersList = users;
  if (searchQuery) {
    usersList = users.filter((user) =>
      user.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
    );
  }

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleSubmit} />
      <SearchBox onChange={setSearchQuery} searchQuery={searchQuery} />
      {users.length === 0 ? (
        <p>This Phonebook is empty</p>
      ) : (
        <ContactList usersList={usersList} removeUser={handleRemove} />
      )}
    </div>
  );
}
