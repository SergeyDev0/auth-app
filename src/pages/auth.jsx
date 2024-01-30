import React from "react";
import { GoogleLogin } from "@react-oauth/google";
const Auth = () => {
  return (
    <>
      <GoogleLogin
        onSuccess={(response) => {
          const profile = response.profileObj;
          console.log(profile.email);
          console.log(profile.name);
          console.log(profile.imageUrl);
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
