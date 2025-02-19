import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function App() {
  const contacts = useSelector((state) => state.contacts.contacts.items);

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox onChange={setSearchQuery} searchQuery={searchQuery} />
      {contacts.length === 0 ? <p>This Phonebook is empty</p> : <ContactList />}
    </div>
  );
}
