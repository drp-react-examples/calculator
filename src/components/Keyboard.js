import React, { useEffect } from "react";
import Button from "./Button";

const KEYS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "+",
  "-",
  "*",
  "/",
  "=",
  "C",
];

const Keyboard = (props) => {
  const { onPress } = props;

  useEffect(() => {
    const onKeyDown = (e) => {
      console.log(e);

      console.log(e.key.toUpperCase());

      let key = (e.keyCode === 13 ? "=" : e.key);

      if (KEYS.indexOf(key.toUpperCase()) !== -1) {
        onPress(key.toUpperCase());
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onPress]);

  return (
    <div className="keyboard">
      {KEYS.map((key) => (
        <Button onClick={onPress} key={key}>
          {key}
        </Button>
      ))}
    </div>
  );
};

export default Keyboard;
