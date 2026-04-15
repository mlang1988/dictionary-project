import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <div>
          <div className="definition">
            Definition: {props.meaning.definition}
          </div>
          <div className="example">{props.meaning.example}</div>
        </div>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}
