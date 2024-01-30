import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { hasGrantedAllScopesGoogle } from '@react-oauth/google';

const Auth = () => {
  const hasAccess = hasGrantedAllScopesGoogle(
    tokenResponse,
    'google-scope-1',
    'google-scope-2',
  );
  return (
    <>
      <GoogleLogin
        onSuccess={(response) => {
          const profile = response;
          console.log(profile);
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
