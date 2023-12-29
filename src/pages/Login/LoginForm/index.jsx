import React from "react";
import LoginSocial from "../Social";
import LoginFormSubmit from "./Submit";
import LoginOptions from "../Options";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <section className="LoginForm__section">
      <h3>Login to your account</h3>
      <LoginFormSubmit />
      <LoginSocial />
      <LoginOptions />
    </section>
  );
};

export default LoginForm;
