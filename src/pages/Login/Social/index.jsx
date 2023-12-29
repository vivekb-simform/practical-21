import React from "react";
import IconGoogle from "../../../components/Icons/SocialMedia/Google";
import IconFacebook from "../../../components/Icons/SocialMedia/Facebook";
import "./Social.css";

const Social = () => {
  return (
    <div className="Social__wrapper">
      <span className="Social__text">or</span>
      <button className="Social__button Social__google-button">
        <IconGoogle />
        <span>Continue with Google</span>
      </button>
      <button className="Social__button Social__facebook-button">
        <IconFacebook />
        <span>Continue with Facebook</span>
      </button>
    </div>
  );
};

export default Social;
