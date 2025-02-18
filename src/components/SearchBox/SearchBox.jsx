import { Formik, Field } from "formik";
import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ onChange, searchQuery }) {
  const searchId = useId();

  const search = (e) => {
    onChange(e.target.value);
  };

  return (
    <Formik initialValues={{}}>
      <div className={css.form}>
        <label htmlFor={searchId}>Find contacts by name</label>
        <Field
          value={searchQuery}
          type="text"
          name="search"
          className={css.input}
          onChange={search}
        />
      </div>
    </Formik>
  );
}
