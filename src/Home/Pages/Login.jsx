import React from "react";
import LoginForm from "../Components/Login/LoginForm";
import loginImg from "../../assets/login.png";
import loginMob from "../../assets/loginmob.png";

const Login = () => {
  return (
    <div className="flex p-20  bg-[#11192C] h-screen w-full max-md:justify-center max-md:mt-[-1rem]">
      <LoginForm />
      <div className="absolute top-24 left-60 z-1 max-md:top-[21rem] max-md:w-48 max-md:left-12 max-md:z-20">
        <img src={loginImg} alt="" className="w-[48rem] max-md:hidden" />
        <img src={loginMob} alt="" className="md:hidden" />
      </div>
    </div>
  );
};

export default Login;
