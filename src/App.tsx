import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./authentication/components/register";
import { useSignUp } from "./authentication/hooks/useSignUp";

function App() {
  const { doSignUp } = useSignUp();
  return (
    <div className="App">
      <header className="App-header">
        <Register onRegister={doSignUp} onFacebookAuth={() => {}} />
      </header>
    </div>
  );
}

export default App;
