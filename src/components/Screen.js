import React from "react";

import "./Screen.css";

class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  render() {
    return <div className="screen">{this.state.value}</div>;
  }
}

export default Screen;
