import React from "react";
import "./Input.css";

const Input = (props) => {
  const { error, ...rest } = props;
  return (
    <div className="input-group">
      <input {...rest} className="input-text" />
      <label className="input-label">{error ? error : ""}</label>
    </div>
  );
};

export default Input;
