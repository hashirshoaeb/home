import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import config from "../../editable-stuff/config.js";
import axios from "axios";

const Project = () => {
  const {
    projectHeading,
    gitHubLink,
    gitHubUsername,
    gitHubQuery,
    projectsLength,
  } = config;
  const [projectsArray, setProjectsArray] = useState([]);
  const dummyProject = {
    name: null,
    description: null,
    svn_url: null,
    stargazers_count: null,
    languages_url: null,
    pushed_at: null,
  };
  const dummyProjectsArr = new Array(projectsLength).fill(dummyProject);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(
        gitHubLink + gitHubUsername + gitHubQuery
      );
      setProjectsArray(response.data.slice(0, projectsLength));
    } catch (error) {
      console.error(error.message);
    }
  }, [gitHubLink, gitHubUsername, gitHubQuery, projectsLength]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="p-5">
        <h2 className="display-4 pb-5 text-center">{projectHeading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
