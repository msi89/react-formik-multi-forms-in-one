import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormB = ({ onChange, refId }) => {
  const formik = useFormik({
    initialValues: {
      phone: ""
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .required("This field is required")
        .min(6, "At least 06 characters")
    }),
    onSubmit: () => {
      watchForm();
    }
  });

  // React.useEffect(() => {
  //   watchForm();
  // }, [formik.values, formik.errors]);

  React.useImperativeHandle(refId, () => ({
    Submit: async () => {
      await formik.submitForm();
    }
  }));

  function watchForm() {
    if (onChange) {
      onChange({
        values: formik.values,
        validated: formik.isSubmitting
          ? Object.keys(formik.errors).length === 0
          : false
      });
    }
  }

  return (
    <form ref={refId}>
      <div className={"form"}>
        <h3>Form B</h3>
        <div>
          <label>Phone number </label>
          <input
            name="phone"
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.phone && (
            <div style={{ color: "red" }}>
              <small>{formik.errors.phone}</small>
            </div>
          )}
        </div>

        <pre>{JSON.stringify(formik.values, null, 2)}</pre>
      </div>
    </form>
  );
};

export default FormB;
