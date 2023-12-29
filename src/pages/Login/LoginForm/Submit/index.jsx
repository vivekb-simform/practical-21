import React from "react";
import Input from "../../../../components/Input";
import InputSubmit from "../../../../components/InputSubmit";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const [user, setUser] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login-form");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setUser(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Your login"
        name="login"
        onChange={handleChange}
        value={user.login}
      />
      <InputSubmit type="submit" value="Continue" disabled={!user} />
    </form>
  );
};

export default Submit;
