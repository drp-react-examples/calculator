import React from "react";

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

export default Loader;
