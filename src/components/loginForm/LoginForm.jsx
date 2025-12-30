import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Geçersiz email").required("Zorunlu"),
  password: Yup.string().min(7, "En az 7 karakter").required("Zorunlu"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <div className={styles.wrapper}>
        <Form className={styles.form} autoComplete="off">
          <h2 className={styles.title}>Login</h2>
          <label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </label>

          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </label>

          <button type="submit">Login</button>
        </Form>
      </div>
    </Formik>
  );
}
