import React from "react";
import { GoogleLogin } from "@react-oauth/google";
const Auth = () => {
  return (
    <>
      <GoogleLogin
        onSuccess={(responseGoogle) => {
          console.log(responseGoogle);
          console.log(response.profileObj.email);
          console.log(response.profileObj.name);
          console.log(response.profileObj.imageUrl);
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
