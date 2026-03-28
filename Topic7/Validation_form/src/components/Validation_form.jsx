import { useState } from "react";

function ValidationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length < 3) {
      alert("Name must be at least 3 characters");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email");
      return;
    }

    alert("Form Submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Validation Form</h2>

      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidationForm;