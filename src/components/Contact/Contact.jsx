import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contact}>
      <div className={css.contactInfo}>
        <p><b>Name:</b> {contact.name}</p>
        <p><b>Number:</b> {contact.number}</p>
      </div>

      <button className={css.contactButton} type="button" onClick={handleDelete}>
        &#x2716;
      </button>
    </div>
  );
};
