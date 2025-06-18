import { useState } from "react";
import { v4 as uuid } from "uuid";

function randomEmojis() {
  const choices = ["🍑", "🤤", "🫠", "🍒", "😍", "😩", "😋", "🥵", "🫦", "👀"];
  return choices[Math.floor(Math.random() * choices.length)];
}

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmojis() }]);
  const addEmoji = () => {
    setEmojis((oldEmojis) => [
      ...oldEmojis,
      { id: uuid(), emoji: randomEmojis() },
    ]);
  };
  const deleteEmoji = (id) => {
    setEmojis((prevEmojis) => {
      return prevEmojis.filter((e) => e.id != id);
    });
  };

  const makeEverythingAHeart = () => {
    setEmojis((prevEmojis) => {
      return prevEmojis.map((e) => {
        return { ...e, emoji: "❤️" };
      });
    });
  };

  return (
    <div>
      {emojis.map((e) => (
        <span
          key={e.id}
          onClick={() => deleteEmoji(e.id)}
          style={{ fontSize: "4rem" }}
        >
          {e.emoji}
        </span>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
      <button onClick={makeEverythingAHeart}>Make them all hearts</button>
    </div>
  );
}
