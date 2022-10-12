import React from "react";
import Login from "./Login";
import login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours;
console.log(currentTime);


function App() {
  return (
    <div className="container">
      {/* ternary operator */}
      {/* CONDITION ? DO IF TRUE : DO IF FALSE */}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
