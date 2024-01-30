import React from "react"
import { GoogleLogin } from "@react-oauth/google";

const Auth = () => {
  return (
    <>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        scope={"profile email"}
        useOneTap
      />;

      useGoogleOneTapLogin({
        ...
        auto_select
      });
    </>
  )
};

export default Auth;
