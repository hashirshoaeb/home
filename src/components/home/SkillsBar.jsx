import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <ProgressBar now={value} />
    </div>
  );
}

export default SkillsBar;
