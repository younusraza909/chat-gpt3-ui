import React from "react";
import "./feature.css";

const Feature = ({ heading, text, isRow }) => {
  return (
    <div className={`gpt3__feature  ${!isRow ? "gpt3__feature--column" : ""}`}>
      <div>
        <div className="gpt3__feature-bar" />
        <h3>{heading}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Feature;
