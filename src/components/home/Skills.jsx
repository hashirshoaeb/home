import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import {
  hardSkills,
  softSkills,
} from "../../editable-stuff/configurations.json";

function Skills() {
  return (
    <Jumbotron fluid className="bg-white m-0" id="skills">
      <Container className=" p-5 ">
        <h2 className="display-4 pb-5 text-center">Skills</h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
        >
          <Tab
            tabClassName="skills-tab  "
            eventKey="hard-skills"
            title="Hard Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={hardSkills} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab "
            eventKey="soft-skills"
            title="Soft Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={softSkills} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
