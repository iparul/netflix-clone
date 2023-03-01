import React, { useEffect, useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";
function SignUpScreen({ email }) {
  const emailRef = useRef(email);
  const passwordRef = useRef(null);
  useEffect(() => {
    emailRef.current.value = email;
  }, []);
  const register = (e) => {
    {
      console.log(
        "curentemail1",
        email,
        emailRef.current,
        emailRef.current.value
      );
    }
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    {
      console.log("curentemail", email, emailRef.current);
    }
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="SignUpScreen">
      <form>
        <h1>Sign In</h1>

        <input
          ref={emailRef}
          placeholder="Email"
          type="email"
          defaultValue={emailRef.current}
        />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signUpScreen_gray">New to Netflix? </span>
          <span className="signUpScreen_link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
