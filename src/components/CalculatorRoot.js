import React from "react";
import Screen from "./Screen";
import Button from "./Button";

const CalculatorRoot = (props) => {
  console.log("render root", props);
  return (
    <div className="calculator">
      {props.children}
      <div className="innerRoot">
        <Screen />
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button>+</Button>
        <Button>-</Button>
        <Button>*</Button>
        <Button>/</Button>
        <Button>=</Button>
        <Button>C</Button>
      </div>
    </div>
  );
};

export default CalculatorRoot;
