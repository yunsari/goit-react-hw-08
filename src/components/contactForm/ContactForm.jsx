import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts/operations";

import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("required")
    .min(3, "At least 3 characters")
    .max(30, "Maximum 30 characters"),
  number: Yup.string()
    .required("required")
    .length(9, "Must be exactly 9 characters"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.frame}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            addContact({
              name: values.name.trim(),
              number: values.number.trim(),
            })
          );

          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <label>
              Name:
              <Field name="name" />
              <ErrorMessage name="name" component="div" />
            </label>

            <label>
              Number:
              <Field name="number" />
              <ErrorMessage name="number" component="div" />
            </label>

            <button type="submit" disabled={isSubmitting}>
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
