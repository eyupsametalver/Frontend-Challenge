import React, { useContext } from "react";
import "./skills.css";
import { ContextLanguage } from "../context/LanguageContexts";

const Skills = () => {
  const { content } = useContext(ContextLanguage);

  return (
    <div className="skills">
      <h2 className="skills-title">{content.skills}</h2>
      <div className="skills-container">
        {content.skills_list.map((skill, index) => (
          <div key={index} className="skills-container-item">
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
      <div className="skills-bottom-line"></div>
    </div>
  );
};

export default Skills;