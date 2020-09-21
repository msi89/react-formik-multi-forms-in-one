import React from "react";

const FormB = ({ formik, onChange }) => {
  return (
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
  );
};

export default FormB;
