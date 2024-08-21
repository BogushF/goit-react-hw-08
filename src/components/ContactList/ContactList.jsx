import s from "./ContactList.module.css";
import ContactItem from "../Contact/Contact";
import { useSelector } from "react-redux";
import { visibleContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const filterContacts = useSelector(visibleContacts);

  return (
    <ul className={s.list}>
      {filterContacts.map((contact) => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
