import React, { useState, useEffect } from "react";
import "./Dictionary.css";
import Results from "./Results";

import axios from "axios";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  useEffect(() => {
    if (!loaded) {
      load();
    }
  }, []);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePictureResponse(response) {
    if (
      response.data &&
      response.data.photos &&
      response.data.photos.length > 0
    ) {
      setPhotos(response.data);
    }
  }

  function search() {
    let apiKey = "b0c48dt2da1edfa05b13oc7376330d93";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    let pictureApiKey = "b0c48dt2da1edfa05b13oc7376330d93";
    let pictureApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pictureApiKey}`;

    axios.get(pictureApiUrl).then(handlePictureResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="form">
          <h4>What word do you want to look up?</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              className="search-input"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
          <p className="suggestions">examples: sun, forest, yoga, whale</p>
        </section>
        <Results results={results} />
        <div className="row mt-4 img-container">
          {photos?.photos.map((photos, index) => (
            <img
              src={photos.src.landscape}
              alt={photos.alt}
              key={index}
              className="col-4 img-fluid dictionary-img"
            />
          ))}
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
