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
        clientId="114098492060-6bek2p0f2544ht483hrrb1munpejn9nq.apps.googleusercontent.com"
        buttonText="Войти через Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default Auth;
