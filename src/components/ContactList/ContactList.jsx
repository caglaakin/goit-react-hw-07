import { useSelector } from "react-redux";
import { selectError, selectFilteredContacts, selectLoading } from "../../redux/contactsSlice";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const filteredList = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (error) {
    return <p>Error loading contacts: {error}</p>;
  }

  return (
    <div className={css.listContainer}>
      {loading && <p>Loading contacts...</p>}
      {!loading && filteredList.length === 0 && (
        <p className={css.noContacts}>No contacts found.</p>
      )}

      {filteredList.length > 0 && (
        <>
          <h2>Contact List</h2>
          <ul className={css.contactList}>
            {filteredList.map((contact) => (
              <li key={contact.id} className={css.contactListItem}>
                <Contact contact={contact} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
