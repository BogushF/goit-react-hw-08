import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();

  const validationControl = Yup.object().shape({
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
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationControl}
    >
      <Form className={s.formBox} autoComplete="off">
        <div className={s.fieldBox}>
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
            Login
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
