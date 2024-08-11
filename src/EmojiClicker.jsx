import { v4 as uuid } from "uuid";
import React from "react";
import { useState } from "react";

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😂" }]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "😂" }]);
  };
  const deleteEmoji = (id) => {
    setEmojis((oldEmojis) => {
      return oldEmojis.filter((e) => e.id !== id);
    });
  };
  const makeHearts = () => {
    setEmojis((oldEmojis) => {
      return oldEmojis.map((e) => {
        return { ...e, emoji: "❤️" };
      });
    });
  };
  return (
    <>
      {emojis.map((e) => (
        <span
          key={e.id}
          style={{ fontSize: "5rem" }}
          onClick={() => deleteEmoji(e.id)}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>HAHAHAHA</button>
      <button onClick={makeHearts}>Make all hearts</button>
    </>
  );
}
