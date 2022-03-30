import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import { ProjectCard, GitlabProjectCard } from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
// Support both github and gitlab projects, not just user github repos
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";
const GitlabAPI = "https://gitlab.com/api/v4";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos`;
  const gitlabReposAPI = `${GitlabAPI}`
  const gitlabSpecificRepoAPI = `${GitlabAPI}/projects`
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);
  const [gitlabProjectsArray, setGitlabProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    let gitlabRepoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          if (repoName.source == "github") {
            let github_response = await axios.get(`${specficReposAPI}/${repoName.org}/${repoName.repo}`);
            repoList.push(github_response.data);
          } else if (repoName.source == "gitlab") {
            let gitlab_response = await axios.get(`${gitlabSpecificRepoAPI}/${repoName.org}%2F${repoName.repo}`);
            // Gitlab doesn't return the language URL in the response, but it's at a well known location
            gitlab_response.data.languages_url = `${gitlabSpecificRepoAPI}/${repoName.org}%2F${repoName.repo}/languages`;
            gitlabRepoList.push(gitlab_response.data);
          }
        }
        setProjectsArray(repoList);
        setGitlabProjectsArray(gitlabRepoList);
      } catch (error) {
        console.error(error.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {gitlabProjectsArray.length
            ? gitlabProjectsArray.map((project, index) => (
                <GitlabProjectCard
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
