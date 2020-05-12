import React from "react";

import "./Button.css";

const Button = (props) => {
  const handleClick = (e) => {
    props.onClick(e.target.innerHTML);
  };
  return (
    <div className="button" onClick={handleClick}>
      {props.children}
    </div>
  );
};

export default Button;
