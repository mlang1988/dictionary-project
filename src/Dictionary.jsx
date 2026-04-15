import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "b0c48dt2da1edfa05b13oc7376330d93";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="form">
        <h4>What word do you want to look up?</h4>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleChange}
            className="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <p className="suggestions">examples: sun, forest, yoga, whale</p>
      </section>
      <Results results={results} />
    </div>
  );
}
