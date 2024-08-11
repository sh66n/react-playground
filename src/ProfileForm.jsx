import React, { useState } from "react";

export default function ProfileForm({ search }) {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    search(username);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
