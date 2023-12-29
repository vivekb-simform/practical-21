import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="Menu-wrapper">
      <Link className="Menu-wrapper__Link" to="/privacy-policy">
        Privacy policy
      </Link>{" "}
      •{" "}
      <Link className="Menu-wrapper__Link" to="/terms-of-use">
        Terms of use
      </Link>
    </div>
  );
};

export default Menu;
