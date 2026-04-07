import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary Project</h1>
        <Dictionary />
      </div>
    </div>
  );
}
