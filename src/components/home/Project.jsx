import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import {
  projectHeading,
  gitHubLink,
  gitHubUsername,
  gitHubQuerry,
  projectsLength,
} from "../../editable-stuff/configurations.json";

const Project = () => {
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

  const handleRequest = useCallback((e) => {
    axios
      .get(gitHubLink + gitHubUsername + gitHubQuerry)
      .then((response) => {
        // handle success
        // console.log(response.data.slice(0, 4));
        return setProjectsArray(response.data.slice(0, projectsLength));
      })
      .catch((error) => {
        // handle error
        return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  }, []);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
      <div className="container container-fluid p-5">
        <h1 className="display-4 pb-5">{projectHeading}</h1>
        <div className="row">
          {projectsArray.length
            ? projectsArray.map((project) => (
                <ProjectCard key={project.id} id={project.id} value={project} />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
