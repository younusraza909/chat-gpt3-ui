import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components/index";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__what-card section__margin">
      <div className="gpt3__what-feature">
        <Feature
          heading="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          isRow={true}
        />
      </div>
      <div className="gpt3__what-heading-container">
        <h1>The possibilities are beyond your imagination</h1>
        <span>Explore The Library</span>
      </div>
      <div className="gpt3__what-features-container">
        <Feature
          heading="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          isRow={false}
        />
        <Feature
          heading="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments by."
          isRow={false}
        />
        <Feature
          heading="Education"
          isRow={false}
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments by."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
