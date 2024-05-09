import React from "react";
import "./features.css";

import { Feature } from "../../components/index";

const listFeatures = [
  {
    heading: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    isRow: true,
  },
  {
    heading: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    isRow: true,
  },
  {
    heading: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    isRow: true,
  },
  {
    heading: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    isRow: true,
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding ">
      <div className="gpt3__features--heading">
        <h1>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <span>Request Early Access to Get Started</span>
      </div>
      <div className="gpt3__features--list">
        {listFeatures.map((feature) => (
          <Feature
            heading={feature.heading}
            text={feature.text}
            isRow={feature.isRow}
            className="gpt3__features--list-item"
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
