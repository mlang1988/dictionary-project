import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./assets/dictionary-logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <div className="logo-container">
          <img src={logo} alt="dictionary-logo" className="dictionary-logo" />
        </div>

        <Dictionary defaultKeyword="summer" />
      </div>
      <footer className="text-center mt-5">
        This app was coded by{" "}
        <a
          href="https://github.com/mlang1988"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mona Lang
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/mlang1988/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://teal-biscotti-736287.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
