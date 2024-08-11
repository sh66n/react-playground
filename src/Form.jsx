import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    // console.log(e.target.name);
    const fieldName = e.target.name;
    const change = e.target.value;
    setFormData({ ...formData, [fieldName]: change });
  };

  return (
    <form action="">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <button>Submit</button>
    </form>
  );
}
