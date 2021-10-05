import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import loginImage from "../../../images/login image.png";
import firebaseConfig from "../firebaseConfig";

initializeApp(firebaseConfig);

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const userInfo = {
          isLoggedIn: true,
          name: displayName,
          email: email,
        };

        setLoggedInUser(userInfo);
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="row">
        <div className="col-md-5 offset-md-1 text-center mt-5">
          <form
            style={{
              boxShadow: "5px 5px 10px lightGray",
              height: "500px",
              width: "550px",
            }}
            className="p-5 m-5 rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h4 className="text-center mt-4 pt-4 text-secondary">Login</h4>
            <input
              className="mt-5 form-input"
              defaultValue="User name"
              {...register("example")}
            />
            <br />
            <input
              className="mt-4 form-input"
              defaultValue="User Password"
              {...register("exampleRequired", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <input
              className="mt-4 form-input btn-brand"
              onClick={handleGoogleSignIn}
              type="submit"
            />
          </form>
        </div>
        <div className="col-md-6">
          <img
            className="mt-4 pt-5 mx-5 px-5 fluid"
            src={loginImage}
            alt="loginImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
