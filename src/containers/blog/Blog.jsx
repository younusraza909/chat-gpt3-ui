import React from "react";
import "./blog.css";

import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

const Blog = () => {
  return (
    <div className="gpt3-blogs section__padding">
      <h1>A lot is happening, We are blogging about it.</h1>
      <div className="gpt3-blogs__cards-container">
        <div className="card">
          <div className="card-img">
            <img src={blog01} alt="" />
          </div>
          <div className="card-content">
            <div>
              <span className="card-date">Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            </div>
            <span className="card-author">Read Full Article</span>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={blog02} alt="" />
          </div>

          <div className="card-content">
            <div>
              <span className="card-date">Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            </div>
            <span className="card-author">Read Full Article</span>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={blog03} alt="" />
          </div>

          <div className="card-content">
            <div>
              <span className="card-date">Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            </div>
            <span className="card-author">Read Full Article</span>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={blog04} alt="" />
          </div>

          <div className="card-content">
            <div>
              <span className="card-date">Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            </div>
            <span className="card-author">Read Full Article</span>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={blog05} alt="" />
          </div>
          <div className="card-content">
            <div>
              <span className="card-date">Sep 26, 2021</span>
              <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            </div>
            <span className="card-author">Read Full Article</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
