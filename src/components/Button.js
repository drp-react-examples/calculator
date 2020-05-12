import React from "react";

import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.children,
    };
  }

  render() {
    return <div className="button">{this.state.value}</div>;
  }
}

export default Button;
