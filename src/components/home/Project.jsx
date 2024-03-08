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
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    /*
    Need to:
    1. update authorization information to pull from an env secret, from aws amplify
    2. update mapping of response to front-end objects
    */

    //authentication
    const config = {
      headers: { Authorization: `Bearer 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` }
    };
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);

      //adding custom card
      var temp_item = {...response.data[0]};
      temp_item.name = 'Hexient';
      temp_item.description = 
      `Our goal is to improve hiring, by making it more transparent and data-driven.\n\nAs the primary architect and developer, I built an enterprise-grade Recruiting Tool, using React and a number of AWS services for the back-end and authentication.`;
      temp_item.svn_url = null;
      temp_item.url = 'https://hexient.io';
      temp_item.languages_url = null;
      repoList.push(temp_item);
      //repoList.push({name:"Hexient"});

      //iterate over each of our selected projects (coming from config.specificRepos)
      //and show the projects in the order they appear in our conifg projects array
      for(var selectedRepoIndex in specfic){
        var selectedRepo = specfic[selectedRepoIndex];
        for(var receivedReposIndex in response.data){
          var receivedRepo = response.data[receivedReposIndex];
          var foundSelectedRepo = (receivedRepo.name === selectedRepo);
          if(foundSelectedRepo) repoList.push(receivedRepo);
        }
      }

      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
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
