import React from "react";
import "../styles.css";
import FormA from "./FormA";
import FormB from "./FormB";

export default function App() {
  const [formData, setFormData] = React.useState({
    formA: { values: null, validated: false },
    formB: { values: null, validated: false },
  });

  const formAref = React.useRef();
  const formBref = React.useRef();

  React.useEffect(() => {
    if (formData.formB.validated && formData.formA.validated) {
      alert("Ready to save");
    }
  }, [formData]);

  async function handleSubmit() {
    await formAref.current.Submit();
    await formBref.current.Submit();
  }

  function handleChangeFormA(data) {
    setFormData({ ...formData, formA: data });
  }

  function handleChangeFormB(data) {
    setFormData({ ...formData, formB: data });
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <FormA onChange={handleChangeFormA} refId={formAref} />
      <FormB onChange={handleChangeFormB} refId={formBref} />

      <button
        onClick={() => {
          console.log(formData);
        }}
        type="button"
      >
        set
      </button>

      <button onClick={handleSubmit} type="button">
        Submit
      </button>
    </div>
  );
}
