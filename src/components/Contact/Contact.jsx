import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/slice";
import { changeContact } from "../../redux/contacts/operations";
import { validationControl } from "../ContactForm/ContactForm";

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(openModal(id));
  };

  const handleChange = (values) => {
    const { name, number } = values;
    dispatch(changeContact({ id, name, number }));
  };

  const initialContact = {
    name: name,
    number: number,
  };

  return (
    <Formik
      initialValues={initialContact}
      onSubmit={handleChange}
      validationSchema={validationControl}
    >
      <Form className={s.formbox}>
        <div className={s.fieldbox}>
          <label htmlFor={name}>
            {" "}
            <FaUser size={12} />
            Name
          </label>
          <Field className={s.field} id={name} type="text" name="name" />
          <ErrorMessage className={s.err} name="name" component="span" />
        </div>

        <div className={s.fieldbox}>
          <label htmlFor={number}>
            {" "}
            <FaPhone size={12} />
            Number
          </label>
          <Field className={s.field} id={number} type="tel" name="number" />
          <ErrorMessage className={s.err} name="number" component="span" />
        </div>

        <div className={s.btnBox}>
          <button className={s.btn} type="submit">
            Change
          </button>
          <button className={s.btn} type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactItem;
