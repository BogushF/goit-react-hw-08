import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validationControl = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Please enter your name"),

    email: Yup.string()
      .email("Invalid email format")
      .max(50, "Email is too long")
      .required("Please enter your email"),

    password: Yup.string()
      .min(6, "Password is too short")
      .max(50, "Password is too long")
      .required("Please enter your password"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationControl}
    >
      <Form className={s.formBox} autoComplete="off">
        <div className={s.fieldBox}>
          <label className={s.label}>
            Username
            <Field type="text" name="name" className={s.field} />
            <ErrorMessage className={s.err} name="name" component="span" />
          </label>
          <label className={s.label}>
            Email
            <Field type="email" name="email" className={s.field} />
            <ErrorMessage className={s.err} name="email" component="span" />
          </label>
          <label className={s.label}>
            Password
            <Field type="password" name="password" className={s.field} />
            <ErrorMessage className={s.err} name="password" component="span" />
          </label>
          <button type="submit" className={s.btn}>
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
