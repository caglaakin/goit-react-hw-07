import { useDispatch } from "react-redux";
import css from "./ContactsForm.module.css";
import { addContact } from "../../redux/contactsOps";

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addContact({
        id: Date.now().toString(),
        name: event.target.name.value,
        number: event.target.number.value,
      })
    );
    event.target.reset();
  };

  return (
    <div className={css.formContainer}>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <input
          type="text"
          name="name"
          className={css.contactInput}
          placeholder="Name"
          required
        />
        <input
          type="tel"
          name="number"
          className={css.contactInput}
          placeholder="Number"
          required
        />
        <button type="submit" className={css.contactButton}>
          Add Contact
        </button>
      </form>
    </div>
  );
};
