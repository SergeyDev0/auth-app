import React, { useState } from 'react';
import GoogleLogin from 'react-google-button';

const GoogleAuth = () => {
  const [profile, setProfile] = useState(null);

  const responseGoogle = (response) => {
    console.log(response);
    setProfile(response.profileObj);
  };

  return (
    <div>
      {profile ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <img src={profile.imageUrl} alt={profile.name} />
        </div>
      ) : (
        <GoogleLogin
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      )}
    </div>
  );
};

export default GoogleAuth;