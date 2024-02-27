import {GoogleLogin} from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import {useDispatch} from "react-redux";
import {useNavigate, Link} from "react-router-dom";
import Input from "../UI/Input";

import {authActions} from "../../../User/store/auth-slice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div className=" h-fit bg-notePurple px-4 rounded-lg z-10 shadow-xl max-md:w-56">
        <form className="flex justify-center items-center flex-col h-56 gap-4">
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
        <div className="flex items-center ml-2 p-2 -mt-3 mb-3">
          <GoogleLogin
            width="300"
            ux_mode="popup"
            useOneTap={true}
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              const decoded = jwtDecode(credentialResponse.credential);
              console.log(decoded);
              dispatch(
                authActions.setCredentials({
                  user: decoded.name,
                  token: credentialResponse.credential,
                  image: decoded.picture,
                })
              );
              navigate("/user");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
