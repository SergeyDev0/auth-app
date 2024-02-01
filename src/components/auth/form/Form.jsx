import React from "react"
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { Link } from "react-router-dom";
import Input from "../../input/Input";
import './form.scss';

const Form = () => {
  const [userInfo, setUserInfo] = React.useState({});
  const [isToken, setIsToken] = React.useState();

  const login =  useGoogleLogin({
    onSuccess:token=>{
      console.log(token) // it will have the access token
    },
    onError:error=>{
      console.log(error)
    }
  })
  return (
    <form className="login">
      <div className="input_group-wrapper">
        <Input placeholder="Enter Email" type="email" />
        <Input placeholder="Enter Password" type="password" />
      </div>
      <div className="form__wrapper-link">
        <Link className="form__link" to="/">Recover Password ?</Link>
      </div>
      <button onClick={login}>
        {userInfo.name}asfasf
      </button> 
    </form>
  )
};
{/* */}
export default Form;
