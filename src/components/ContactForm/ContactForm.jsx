import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

export const validationControl = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(12, "Too long")
    .required("Required"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialContact = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialContact}
      validationSchema={validationControl}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <div className={s.formGroup}>
          <label htmlFor={nameFieldId}>Name:</label>
          <Field className={s.field} type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" className={s.error} component="span" />
        </div>

        <div className={s.formGroup}>
          <label htmlFor={numberFieldId}>Number:</label>
          <Field
            className={s.field}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage name="number" className={s.error} component="span" />
        </div>

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
