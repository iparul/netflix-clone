import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import PlanScreen from "./PlanScreen";
import "./ProfileScreen.css";
function ProfileScreen() {
  const { user } = useSelector(selectUser);
  const navigate = useNavigate();
  function signOutFun() {
    auth.signOut();
    navigate("/");
  }
  return (
    <div className="ProfileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1> Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          />
          <div className="profileScreen_detalis">
            <h2>{user && user.email}</h2>
            <div className="proflieScreen_plans">
              <h3>Plans</h3>
              <PlanScreen />
              <button
                onClick={() => signOutFun()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
