import React from "react";

const Button = ({ children }) => {
  return (
    <a
      href="#"
      type="button"
      className="myButton"
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </a>
  );
};

export default Button;
