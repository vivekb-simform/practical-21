import React from "react";
import Logo from "../../components/Logo";
import LoginForm from "./LoginForm";
import LoginMenu from "./Menu";
import "./Login.css";

const logoProps = {
  title: {
    size: 26,
    color: "white",
    text: "Square",
  },
  image: {
    size: 50,
    color: "white",
  },
};

const Login = () => {
  return (
    <section className="Login__section">
      <Logo {...logoProps} />
      <LoginForm />

      <LoginMenu />
    </section>
  );
};

export default Login;
