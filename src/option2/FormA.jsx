import React from "react";

const FormA = ({ formik }) => {
  return (
    <div className={"form"}>
      <h3>Form A</h3>
      <div>
        <label>Name </label>
        <input
          name="name"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <div style={{ color: "red" }}>
            <small>{formik.errors.name}</small>
          </div>
        )}
      </div>
      <br />
      <div>
        <label>Email </label>
        <input
          name="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
          <div style={{ color: "red" }}>
            <small>{formik.errors.email}</small>
          </div>
        )}
      </div>
      <pre>{JSON.stringify(formik.values, null, 2)}</pre>
    </div>
  );
};

export default FormA;
