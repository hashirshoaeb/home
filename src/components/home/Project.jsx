import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
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
const org = "rice-apps";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/anyagu/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const orgReposAPI = `${API}/orgs/${org}/repos`;
  // const orgReposAPI = `${API}/repos/${org}`
  console.log("orgReposAPI: " + orgReposAPI);
  // should be https://api.github.com/orgs/rice-apps/repos
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    let filteredList = [];
    try {
      // getting all repos
      const response = await axios.get(username ? allReposAPI : orgReposAPI);
      console.log("username ? ", username);
      console.log("response: " + JSON.stringify(response.data));

      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos // TODO: should we FILTER instead?
      try {
        for (let repoName of specfic) {
          console.log("getting specific: ", repoName);
          const request = username ? `${specficReposAPI}/${repoName}` : `${orgReposAPI}/${repoName}`;
          console.log("request: ", request);
          const response = await axios.get(request);
          console.log("individual response: " + JSON.stringify(response.data));
          repoList.push(response.data);
          filteredList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
      setProjectsArray(filteredList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, orgReposAPI, length, specfic, specficReposAPI, username]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="m-0">
      <Container className="">
        <h2 style={{ color: "black"}} className="display-4 pb-5 text-center">{heading}</h2>
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
