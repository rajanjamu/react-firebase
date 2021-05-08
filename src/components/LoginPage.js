import React from "react";
import { auth, authProvider } from "../vendors/firebase";

const LoginPage = () => {
  const handleLogin = () => {
    auth.signInWithPopup(authProvider);
  };
  return (
    <div>
      <h1>Login to Firebase-React</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
