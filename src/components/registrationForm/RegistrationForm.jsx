import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(2, "En az 2 karakter").required("Zorunlu"),
  email: Yup.string().email("Geçersiz email").required("Zorunlu"),
  password: Yup.string().min(7, "En az 7 karakter").required("Zorunlu"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
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
          <h2 className={styles.title}>Register</h2>
          <label>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>

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

          <button type="submit">Register</button>
        </Form>
      </div>
    </Formik>
  );
}
