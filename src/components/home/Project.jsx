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

const Project = ({ heading }) => {
  // const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos`;
  const dummyProjectsArr = new Array(3).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
        const response = await axios.get(`${specficReposAPI}/mogarcia626/letseat`);
        response.data.liveLink = 'https://let-s-eat.herokuapp.com/#/'
        response.data.imageUrl = 'https://i.imgur.com/oqsGTlD.gif'
        repoList.push(response.data);
    } catch (error) {
      console.error(error.message);
    }
    try {
        const response = await axios.get(`${specficReposAPI}/mmbarness/home_court`);
        response.data.liveLink = 'https://www.homecourt.club/#/splash'
        response.data.imageUrl = 'https://i.imgur.com/nMvzDeO.gif'
        repoList.push(response.data);
    } catch (error) {
      console.error(error.message);
    }
    try {
        const response = await axios.get(`${specficReposAPI}/mogarcia626/light_show`);
        response.data.liveLink = 'https://mogarcia626.github.io/light_show/'
        response.data.imageUrl = 'https://i.imgur.com/eyvVg9l.gif'
        repoList.push(response.data);
    } catch (error) {
      console.error(error.message);
    }
    // setting projectArray
    // TODO: remove the duplication.
    setProjectsArray(repoList);
  }, [specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
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