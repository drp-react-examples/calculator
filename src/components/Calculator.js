import React from "react";
import Loader from "./Loader";
import CalculatorRoot from "./CalculatorRoot";

import "./Calculator.css";

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

    return <CalculatorRoot>I'm a calculator</CalculatorRoot>;
  }
}

export default Calculator;
