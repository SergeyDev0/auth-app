import React from "react"
import { GoogleLogin } from "@react-oauth/google";

const Auth = () => {
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    // Вывод данных профиля
    console.log(response.profileObj.email);
    console.log(response.profileObj.name);
    console.log(response.profileObj.imageUrl);
  };
  return (
    <>



        <GoogleLogin
          onSuccess={responseGoogle => {
            console.log(responseGoogle);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          scope="openid read write"
          useOneTap
        />;
    </>
  )
};

export default Auth;
