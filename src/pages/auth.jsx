import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userInfo) => {
    setUser(userInfo);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}{console.log(user)}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <GoogleLogin
          clientId="114098492060-6bek2p0f2544ht483hrrb1munpejn9nq.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
};

export default App;