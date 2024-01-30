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
        clientId="ваш_client_id"
        buttonText="Войти через Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default Auth;
