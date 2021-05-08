import React from "react";
import ReactDOM from "react-dom";
import App from "./components/FirebaseApp";
import { auth } from "./vendors/firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("Logged In");
  } else {
    console.log("Logged Out");
  }
});
