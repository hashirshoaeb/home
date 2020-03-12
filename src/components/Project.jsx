import React, { Component } from "react";
import "../App.css";
import Configs from "../configurations.json";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProjectCard from "./ProjectCard";

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "Recent Projects",
      projectsArray: [],
      projectsLength: Configs.projectsLength,
    };
  }
  componentDidMount = () => {
    this.handleRequest();
  };

  handleRequest = (e) => {
    axios
      .get(Configs.gitHubLink + Configs.gitHubUsername + Configs.gitHubQuerry)
      .then(response => {
        // handle success
        // console.log(response.data.slice(0, 4));
        return this.setState({
          projectsArray: response.data.slice(0, this.state.projectsLength)
        });
      })
      .catch(error => {
        // handle error
        return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  };

  render() {
    return (
      <div
        id="projects"
        className="jumbotron jumbotron-fluid bg-transparent m-0"
      >
        <div className="container container-fluid p-5">
          <h1 className="display-4 pb-5">{this.state.heading}</h1>
          <div className="row">
            {this.state.projectsArray.map(project => (
              <ProjectCard
                key={project.id}
                id={project.id}
                value={project}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default  Project;
