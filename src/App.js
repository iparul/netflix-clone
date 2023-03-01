import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import Player from "./screens/Player";
import MyList from "./screens/MyList";
function App() {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        {user && user.email == null ? (
          <LoginScreen />
        ) : (
          <Routes>
            <>
              <Route path="/" element={<HomeScreen />} extact></Route>
              <Route path="/profile" element={<ProfileScreen />} extact></Route>
              <Route path="/player" element={<Player />} extact></Route>
              <Route path="/myList" element={<MyList />} extact></Route>
            </>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
