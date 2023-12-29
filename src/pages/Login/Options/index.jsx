import React from "react";
import { Link } from "react-router-dom";
import "./Options.css";

const Options = () => {
  return (
    <div className="Options-wrapper">
      <Link className="Options-wrapper__Link" to="/reset-login">
        Can’t login?
      </Link>{" "}
      •{" "}
      <Link className="Options-wrapper__Link" to="/register">
        Sign up for new user?
      </Link>
    </div>
  );
};

export default Options;
