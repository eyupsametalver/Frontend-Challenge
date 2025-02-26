import React from "react";
import "./introduce.css";

const Introduce = () => {
  return (
    <div className="introduce">
      <div className="introduce-section">
        <div className="introduce-name">
          <span className="introduce-line"></span>
          <span className="introduce-text">Eyüp Samet Alver</span>
        </div>
        <h1 className="introduce-title">
          Creative thinker <br />
          Minimalism lover
        </h1>
        <p className="introduce-description">
        Hello,I am Samet, a motivated Junior Full Stack Developer.
        I am currently in training. Even though I am new to this field, I have a good
        foundation in web development and I
        really want to improve my skills. I am
        committed to learning and keeping up
        with the latest technology
        </p>

        <div className="introduce-links">
          <a className="introduce-btn introduce-btn-primary" href="#">Hire me</a>
          <a className="introduce-btn" href="#">Github</a>
          <a className="introduce-btn" href="#">Linkedin</a>
        </div>
      </div>
      <div className="introduce-image">
      <img src="./src/assets/img/photom.JPG" alt="Profil Fotoğrafı" />
      </div>
    </div>
  );
};

export default Introduce;