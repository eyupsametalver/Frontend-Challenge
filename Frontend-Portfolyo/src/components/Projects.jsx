import React from 'react';
import "./projects.css";

const Projects = () => {
  return (
    <div className='projects'>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        <div className="projects-container-item">
            <img src="./src/assets/img/axiosimg.png" alt="Axios" />
            <h4>Project1</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
          <div className="introduce-links">
          <a className="introduce-btn introduce-btn-primary" href="#">React</a>
          <a className="introduce-btn" href="#">Redux</a>
          <a className="introduce-btn" href="#">Axios</a>
        </div>
        <div className="projects-footers">
          <p>Github</p>
          <p>Wiev Site</p>
        </div>
        </div>
        <div className="projects-container-item">
        <img src="./src/assets/img/react.png" alt="react" />
        <h4>Project2</h4>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="introduce-links">
          <a className="introduce-btn introduce-btn-primary" href="#">React</a>
          <a className="introduce-btn" href="#">Redux</a>
          <a className="introduce-btn" href="#">Axios</a>
        </div>
        <div className="projects-footers">
          <p>Github</p>
          <p>Wiev Site</p>
        </div>
        </div>
        <div className="projects-container-item">
        <img src="./src/assets/img/workintechimg.png" alt="Workintech" />
        <h4>Project3</h4>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="introduce-links">
          <a className="introduce-btn introduce-btn-primary" href="#">React</a>
          <a className="introduce-btn" href="#">Redux</a>
          <a className="introduce-btn" href="#">Axios</a>
        </div>
        <div className="projects-footers">
          <p>Github</p>
          <p>Wiev Site</p>
        </div>
        </div>
      </div>
      <div className="projects-bottom-line"></div>
    </div>
  )
}

export default Projects;