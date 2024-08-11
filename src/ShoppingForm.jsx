import React, { useState } from "react";

export default function ShoppingForm({ modify }) {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    completed: false,
  });

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setFormData((currData) => {
      return { ...currData, [field]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    modify(formData);
  };

  return (
    <form action="">
      <input
        type="text"
        placeholder="Item Name"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <br />
      <input
        type="number"
        placeholder="Item Quantity"
        name="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
