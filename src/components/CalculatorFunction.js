import React, { useState } from "react";
import Screen from "./Screen";
import Keyboard from "./Keyboard";

import "./Calculator.css";

const actions = {
  "+": (a, b) => parseFloat(a) + parseFloat(b),
  "-": (a, b) => parseFloat(a) - parseFloat(b),
  "*": (a, b) => parseFloat(a) * parseFloat(b),
  "/": (a, b) => parseFloat(a) / parseFloat(b),
  C: () => "0",
  "=": true,
};

const normalize = (value, digit) => {
  if (digit === "." && value.indexOf(".") >= 0) {
    return value;
  }
  return (value === "0" ? "" : value) + digit;
};

const Calculator = () => {
  const [left, setLeft] = useState("0");
  const [right, setRight] = useState("");
  const [operator, setOperator] = useState("");

  const setResult = (value) => {
    setLeft(value.toString());
    setOperator("");
    setRight("");
  };

  const operate = () => {
    const result = actions[operator](left, right);
    setResult(result);
  };

  const changeValue = (digit) => {
    const action = actions[digit];

    if (action) {
      switch (digit) {
        case "C":
          setResult(action());
          break;

        case "=":
          if (operator && right) {
            operate();
          } else {
            setResult(left);
          }
          break;
        default:
          if (operator && right) {
            operate();
          }
          setOperator(digit);
      }
    } else {
      operator
        ? setRight(normalize(right, digit))
        : setLeft(normalize(left, digit));
    }
  };

  return (
    <div className="calculator">
      <Screen value={`${left}${operator}${right}`} />
      <Keyboard onPress={changeValue} />
    </div>
  );
};

export default Calculator;
