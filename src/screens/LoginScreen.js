import React, { useState } from "react";
import "./loginscreen.css";
import SignUpScreen from "./SignUpScreen";
function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className="LoginScreen">
      <div className="loginscreen_background">
        <img
          className="loginScreen_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Sign IN
        </button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen email={email} />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="loginScreen_getStarted"
                  onClick={() => setSignIn(true)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
