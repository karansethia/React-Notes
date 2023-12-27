import React from "react";
import LoginForm from "../Components/Login/LoginForm";
import loginImg from "../../assets/login.png";

const Login = () => {
  return (
    <div className="flex p-20  bg-[#11192C] h-screen">
      <LoginForm />
      <div className="absolute top-24 left-60 z-1">
        <img src={loginImg} alt="" className="w-[48rem]" />
      </div>
    </div>
  );
};

export default Login;
