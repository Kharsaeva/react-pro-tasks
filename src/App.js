import logo from './logo.svg';
import React from "react";
import {Tasks} from "./Tasks";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          React-Pro tasks
      </header>
        <Tasks />
    </div>
  );
}

export default App;
