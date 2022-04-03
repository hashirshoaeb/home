import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills({ heading, techincalSkills, otherSkills }) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

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
        <Tabs
          className="skills-tabs"
          defaultActiveKey="technical-skills"
          id="skills-tabs"
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="technical-skills"
            title="Technical Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={techincalSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="other-skills"
            title="Other Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={otherSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
