import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menue = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whatis">What is GPT?</a>
      </p>
      <p>
        <a href="#openAi">Open AI</a>
      </p>
      <p>
        <a href="#case">Case Studies</a>
      </p>
      <p>
        <a href="#library">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menue />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>

        <button type="button">Sign Up</button>
      </div>

      {isOpen ? (
        <RiCloseLine
          color="white"
          fontSize={25}
          className="gpt3__navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <RiMenu3Line
          color="white"
          fontSize={25}
          className="gpt3__navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {isOpen && (
        <div className="gpt3__navbar-small scale-up-center">
          <Menue />
          <div className="gpt3__navbar-small-sign">
            <p>Sign in</p>

            <button type="button">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
