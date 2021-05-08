import React from "react";
import { auth, authProvider } from "../vendors/firebase";

const LoginPage = () => {
  const handleLogin = () => {
    auth.signInWithPopup(authProvider);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
