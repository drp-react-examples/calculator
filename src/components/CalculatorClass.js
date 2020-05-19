import React, { Component } from "react";
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
  if (digit === ".") {
    if (value.indexOf(".") >= 0) {
      return value;
    } else if (value === "0") {
      return value + digit;
    }
  }
  return (value === "0" ? "" : value) + digit;
};

export default class Calculator extends Component {
  state = {
    left: "0",
    right: "",
    operator: "",
  };

  setResult(value, operator = "") {
    this.setState({ left: value.toString(), right: "", operator }, () => {
      //callback if needed :do something after setting the state
      console.log("1", this.state);
    });
    console.log("2", this.state);
  }

  operate(newOperator) {
    const { left, right, operator } = this.state;
    const result = actions[operator](left, right);
    this.setResult(result, newOperator);
  }

  changeValue = (digit) => {
    const { left, right, operator } = this.state;

    const action = actions[digit];

    if (action) {
      switch (digit) {
        case "C":
          this.setResult(action());
          break;

        case "=":
          if (operator && right) {
            this.operate();
          } else {
            this.setResult(left);
          }
          break;
        default:
          if (operator && right) {
            this.operate(digit);
          } else {
            this.setState({ operator: digit });
          }
      }
    } else {
      operator
        ? this.setState({ right: normalize(right, digit) })
        : this.setState({ left: normalize(left, digit) });
    }
  };

  render() {
    const { left, right, operator } = this.state;

    return (
      <div className="calculator">
        <Screen value={`${left}${operator}${right}`} />
        <Keyboard onPress={this.changeValue} />
      </div>
    );
  }
}
