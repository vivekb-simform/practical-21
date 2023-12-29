import React from "react";
import LogoImage from "./Image";
import LogoTitle from "./Title";
import "./Logo.css";

const Logo = (props) => {
  const { image, title } = props;

  return (
    <section className="Logo__section">
      <LogoImage {...image} />
      <LogoTitle {...title} />
    </section>
  );
};

export default Logo;
