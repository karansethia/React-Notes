import React from "react";
import Input from "../UI/Input";
import {Link} from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="flex justify-center items-center flex-col h-56 gap-4 bg-notePurple px-4 rounded-lg z-10 shadow-xl max-md:w-56">
      <p className="font-noteFont">Login or Signup</p>
      <Input iotype="text" field="Username" />
      <Input iotype="password" field="Password" />
      <Link
        to="/user"
        className="text-white bg-royal border-none rounded-lg px-12 h-7"
      >
        Submit
      </Link>
    </form>
  );
};

export default LoginForm;
