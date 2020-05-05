import React from "react";

import "./Calculator.css";

class Loader extends React.Component {
  componentDidMount() {
    console.log("loader Component did mount");
  }

  componentWillUnmount() {
    console.log("loader Component will unmount");
  }

  render() {
    console.log("loader render");

    return <div className="calculator">loading....</div>;
  }
}

const CalculatorRoot = (props) => {
  console.log("render root", props);
  return <div className="calculator">{props.children}</div>;
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    console.log("Component was mounted");
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3000);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    console.log("render");
    console.log(this.state);

    if (this.state.loading) {
      return <Loader />;
    }

    return (
      <CalculatorRoot name="Calculadora 1" initialValue={{ value: 0 }}>
        I'm a calculator
      </CalculatorRoot>
    );
  }
}

export default Calculator;
