import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validationControl = Yup.object().shape({
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(18, "Too long")
      .required("Required"),
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
            <ErrorMessage className={s.err} name="name" component="span" />
          </label>
          <label className={s.label}>
            Password
            <Field type="password" name="password" className={s.field} />
            <ErrorMessage className={s.err} name="name" component="span" />
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
