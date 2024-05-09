import React from "react";
import "./feature.css";

const Feature = ({ heading, text, isRow, className }) => {
  return (
    <div
      className={`gpt3__feature  ${!isRow ? "gpt3__feature--column" : ""} ${
        className ? className : ""
      }`}
    >
      <div>
        <div className="gpt3__feature-bar" />
        <h3>{heading}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Feature;
