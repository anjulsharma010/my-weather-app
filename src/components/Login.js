import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validateLogic";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    // Sign In sign up Logic

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute px-12 pt-4 pb-12 bg-black w-1/4 mx-auto right-0 left-0 top-28 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Login" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full rounded-sm bg-gray-600 outline-0 bg-opacity-50"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-3 w-full rounded-sm bg-gray-600 outline-0 bg-opacity-50"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full rounded-sm bg-gray-600 outline-0 bg-opacity-50"
        />
        <p className="text-red-500 font-bold-sm text-sm py-2">{errorMessage}</p>
        
        <button
          className="px-3 py-2 my-3 bg-red-600 rounded-sm w-full"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign in" : "Sign up"}
        </button>
       {(password?.current?.value &&errorMessage) && <div className="text-red-500 font-bold-sm text-xs">
          <ul className="list-none">
            <li>Minimum 8 characters</li>
            <li>First letter uppercase</li>
            <li>At least one number</li>
            <li>At least one Special character</li>
          </ul>
        </div>}
        <p
          className="py-4 text-center cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New user? Sign up Now"
            : "Already Registered? Sign in Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
