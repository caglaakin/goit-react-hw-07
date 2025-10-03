import { ContactsForm } from "./components/ContactsForm/ContactsForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="phoneBook">
      <h1>PhoneBook</h1>
      <div className="phoneBookInfo">
        <div className="contactForm">
          <ContactsForm />
        </div>

        <div className="contactsList">
          <SearchBox />
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default App;
