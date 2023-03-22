import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./authentication/components/register";
import { useSignUp } from "./authentication/hooks/useSignUp";

function App() {
  const { doSignUp, data, error, loading } = useSignUp();
  useEffect(() => {
    console.log(data, error, loading);
  }, [data, error, loading]);
  if (loading) return <div>"Submitting..."</div>;
  if (error) return <div>`Submission error! ${error.message}`</div>;
  return (
    <div className="App">
      <header className="App-header">
        <Register
          onRegister={(input) => doSignUp(input)}
          onFacebookAuth={() => {}}
        />
      </header>
    </div>
  );
}

export default App;
