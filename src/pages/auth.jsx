import React from "react";
import { GoogleLogin } from "@react-oauth/google";
const Auth = () => {
  return (
    <>
      <GoogleLogin
        onSuccess={(responseGoogle) => {
          console.log(responseGoogle);
          console.log(responseGoogle.profileObj.email);
          console.log(responseGoogle.profileObj.name);
          console.log(responseGoogle.profileObj.imageUrl);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        scope="openid read write"
        useOneTap
      />
      ;
    </>
  );
};

export default Auth;
