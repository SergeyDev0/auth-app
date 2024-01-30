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
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        scope="profile email"
        useOneTap
      />
      ;
    </>
  );
};

export default Auth;
