import { Form, Formik, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

export default function ContactForm({ addContact }) {
  const registerSchema = Yup.object({
    username: Yup.string()
      .required("This field is required")
      .min(3, "Name must be more than 3 chars")
      .max(50, "Name must be less than 50 chars"),
    number: Yup.number().required(),
  });

  const usernameId = useId();
  const numId = useId();

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          username: "",
          number: "",
        }}
        validationSchema={registerSchema}
        onSubmit={addContact}
      >
        <Form className={css.form}>
          <label htmlFor={usernameId}>Name</label>
          <Field
            type="text"
            name="username"
            id={usernameId}
            className={css.name}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />
          <label htmlFor={numId}>Number</label>
          <Field type="number" name="number" id={numId} />
          <ErrorMessage name="number" component="span" className={css.error} />

          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
