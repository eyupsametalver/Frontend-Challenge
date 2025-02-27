import React from "react";
import "./introduce.css";
import { useContext } from "react";
import { ContextLanguage } from "../context/LanguageContexts";


const Introduce = () => {
  const { content } = useContext(ContextLanguage);

  return (
   
    <div className="introduce">
      <div className="introduce-section">
        <div className="introduce-name">
          <span className="introduce-line"></span>
          <span className="introduce-text">{content.name}</span>
        </div>
        <h1 className="introduce-title">{content.title}</h1>
        <p className="introduce-description">{content.description}</p>

        <div className="introduce-links">
          <a className="introduce-btn introduce-btn-primary" href="mailto:smtalvr@gmail.com">
            Hire me
          </a>
          <a
            className="introduce-btn"
            href="https://github.com/eyupsametalver"
            target="blank"
          >
            {content.github}
          </a>
          <a
            className="introduce-btn"
            href="https://www.linkedin.com/in/sametalver/"
            target="blank"
          >
            {content.linkedin}
          </a>
        </div>
      </div>

      <div className="introduce-image">
        <img src="./src/assets/img/photom.JPG" alt="Profile" />
      </div>
    </div>
  );
};

export default Introduce;