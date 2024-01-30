import React from "react";
import { GoogleLogin } from "react-google-login";

const Auth = () => {
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    // Вывод данных в консоль профиля пользователя
    console.log(response.profileObj.email);
    console.log(response.profileObj.name);
    console.log(response.profileObj.imageUrl);
  };

  const responseError = (response) => {
    console.log("Login Failed", response);
    // Обработка ошибки авторизации
  };

  return (
    <div>
      <GoogleLogin
        clientId="114098492060-6bek2p0f2544ht483hrrb1munpejn9nq.apps.googleusercontent.com"
        buttonText="Войти через Google"
        onSuccess={responseGoogle}
        onFailure={responseError}
        cookiePolicy={'single_host_origin'}
        scope="https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
      />
    </div>
  );
};

export default Auth;