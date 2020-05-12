import React from "react";
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
  return (
    <div className="keyboard">
      {KEYS.map((key) => (
        <Button onClick={props.onPress} key={key}>
          {key}
        </Button>
      ))}
    </div>
  );
};

export default Keyboard;
