import React from "react";

const Title = (props) => {
  const { text } = props;

  return (
    <span
      style={{ fontSize: `${props.size}px`, color: `${props.color}` }}
      className="Logo__Title"
    >
      {text}
    </span>
  );
};

export default Title;
