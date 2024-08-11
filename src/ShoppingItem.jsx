import React from "react";

export default function ShoppingItem({ item }) {
  return (
    <li style={{ textDecoration: item.completed ? "line-through" : "none" }}>
      {item.name} - {item.quantity}
    </li>
  );
}
