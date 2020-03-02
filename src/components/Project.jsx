import React, { Component } from "react";
import "../App.css";
import Configs from "../configurations.json";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProjectCard from "./ProjectCard"

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Recent Projects",
      projectsArray: []
    };
  }
  componentDidMount = () => {
    this.handleRequest();
  };

  handleRequest = e => {
    axios
      .get(Configs.gitHubLink + Configs.gitHubUsername + Configs.gitHubQuerry)
      .then(response => {
        // handle success
        // console.log(response.data.slice(0, 4));
        this.setState({
          projectsArray: response.data.slice(0, 4)
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  render() {
    return (
      <div
        id="divproject"
        className="jumbotron jumbotron-fluid bg-transparent m-0"
      >
        <div className=" container container-fluid p-5">
          <h1 className="display-4 pb-5">{this.state.heading}</h1>
          <div className=" row">
            {this.state.projectsArray.map(project => (
              <ProjectCard
                key={project.id}
                id={project.id}
                value={project}
              ></ProjectCard>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default  Project;