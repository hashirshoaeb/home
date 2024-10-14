import React from "react";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";
// import SkillsTab from "./SkillsTab";
import Certifications from "./Certifications";

const Skills = React.forwardRef(({ heading, hardSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );

  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Row className="pt-3 px-1">
          <Certifications certifications={hardSkills} isScrolled={isScrolled} />
        </Row>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
