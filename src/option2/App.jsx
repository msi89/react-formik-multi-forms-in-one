import React from "react";
import "../styles.css";
import FormA from "./FormA";
import FormB from "./FormB";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Main() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .required("This field is required")
        .min(6, "At least 06 characters")
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <form className="App" onSubmit={formik.handleSubmit}>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <FormA formik={formik} />
      <FormB formik={formik} />

      <button type="submit">Submit</button>
    </form>
  );
}
