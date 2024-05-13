import React from "react";
import "./possibility.css";

import possiblity from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3-possiblity section__padding">
      <div className="gpt3-possiblity__image">
        <img src={possiblity} alt="Possiblity" />
      </div>

      <div className="gpt3-possiblity__content">
        <span>Request Early Access to Get Started</span>
        <h1>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <span>Request Early Access to Get Started</span>
      </div>
    </div>
  );
};

export default Possibility;
