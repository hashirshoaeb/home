import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";

function SkillsSection({ skills }) {
  return (
    <>
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
        />
      ))}
    </>
  );
}

function SkillsTab({ skills }) {
  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(0, Math.floor(skills.length / 2))}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(Math.floor(skills.length / 2), skills.length)}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
