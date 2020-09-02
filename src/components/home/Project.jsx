import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchAllRepos = useCallback(async () => {
    try {
      const response = await axios.get(allReposAPI);
      setProjectsArray(response.data.slice(0, length));
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length]);

  const fetchSpecficRepos = useCallback(async () => {
    try {
      for (let repoName of specfic) {
        const response = await axios.get(`${specficReposAPI}/${repoName}`);
        setProjectsArray((projectsArray) => [...projectsArray, response]);
      }
    } catch (error) {}
  }, [projectsArray, specfic, specficReposAPI]);

  useEffect(() => {
    fetchAllRepos();
    // fetchSpecficRepos();
  }, [fetchAllRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="p-5">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
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
