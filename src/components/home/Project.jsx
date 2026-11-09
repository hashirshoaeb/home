import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const API = "https://api.github.com";

const getJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`GitHub returned ${response.status} for ${url}`);
  return response.json();
};

// Shows the `length` most recently updated repos of `username`,
// followed by the repos named in `specfic` ("owner/repo").
const Project = ({ heading, username, length, specfic }) => {
  const [projectsArray, setProjectsArray] = useState([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchRepos = async () => {
      const requests = specfic.map((repoName) => getJson(`${API}/repos/${repoName}`));
      if (length > 0) {
        requests.unshift(
          getJson(`${API}/users/${username}/repos?sort=updated&direction=desc`).then((repos) =>
            repos.slice(0, length)
          )
        );
      }
      // One failed request must not hide the repos that did load.
      const results = await Promise.allSettled(requests);
      const repoList = results
        .filter((result) => result.status === "fulfilled")
        .flatMap((result) => result.value);
      results
        .filter((result) => result.status === "rejected")
        .forEach((result) => console.error(result.reason.message));

      if (cancelled) return;
      setProjectsArray(repoList);
      setFailed(repoList.length === 0);
    };

    fetchRepos();
    return () => {
      cancelled = true;
    };
  }, [username, length, specfic]);

  const dummyProjectsArr = new Array(length + specfic.length).fill(dummyProject);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        {failed ? (
          <p className="lead text-center">
            Projects could not be loaded right now. You can find them on{" "}
            <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
              my GitHub profile
            </a>
            .
          </p>
        ) : (
          <Row>
            {(projectsArray.length ? projectsArray : dummyProjectsArr).map((project, index) => (
              <ProjectCard key={project.id || `dummy-${index}`} value={project} />
            ))}
          </Row>
        )}
      </Container>
    </Jumbotron>
  );
};

export default Project;
