import React from "react";
import { signinWithGoogle } from "../../services/firebase.config";

function Login() {
  return (
    <div className="w-full h-[100vh] bg-[#979696]">
      <div className="w-[80%] h-[100vh] flex items-center my-0 mx-auto">
        <button className="my-0 mx-auto py-[10px] px-[15px] text-[#fff] bg-[green] rounded-xl" onClick={signinWithGoogle}>
          Login with google
        </button>
      </div>
    </div>
  );
}

export default Login;
