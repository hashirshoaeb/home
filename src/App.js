import React, { Component } from "react";
import Typist from "react-typist";
import "./App.css";
import Configs from "./configurations.json";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundType: Configs.backgroundType,
      devInfo: Configs.devIntro,
      devDesc: Configs.devDesc,
      hoverstatus: ["socialicons", "socialicons", "socialicons", "socialicons"]
    };
  }
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    //this.setState({ devInfo: "Hashir Shoaib" });
    // console.log("scroll trigered");
  };
  toggleHover = data => {
    const newhoverStatus = [...this.state.hoverstatus];
    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconshover";
      this.setState({ hoverstatus: newhoverStatus });
      if (data.icon.id === 0) {
      }
    } else {
      newhoverStatus[data.icon.id] = "socialicons";
      this.setState({ hoverstatus: newhoverStatus });
      if (data.icon.id === 0) {
      }
    }
  };

  render() {
    const icons = Configs.icons;
    return (
      <div>
        <div
          id="divmainbody"
          className="jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        >
          <div className=" container container-fluid text-center ">
            <h1 className="display-1" onScroll={this.handleScroll}>
              {this.state.devInfo}
            </h1>
            <Typist className="lead"> {this.state.devDesc}</Typist>
            <div className=" p-5">
              {icons.map(icon => (
                <a
                  key={icon.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${icon.url}`}
                >
                  <i
                    className={`fab ${icon.image}  fa-3x ${
                      this.state.hoverstatus[icon.id]
                    }`}
                    onMouseEnter={() =>
                      this.toggleHover({ icon: icon, event: "enter" })
                    }
                    onMouseLeave={() =>
                      this.toggleHover({ icon: icon, event: "leave" })
                    }
                  />
                </a>
              ))}
            </div>
            <a
              className="btn btn-outline-light btn-lg"
              href="#divaboutme"
              role="button"
            >
              More about me
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "About me",
      aboutDev: Configs.aboutDev,
      instaProfilePic: "bad request"
    };
  }
  componentDidMount = () => {
    this.handleRequest();
  };

  handleRequest = e => {
    axios
      .get(Configs.instaLink + Configs.instaUsername + Configs.instaQuerry)
      .then(response => {
        // handle success
        // console.log(response.data.graphql);
        this.setState({
          instaProfilePic: response.data.graphql.user.profile_pic_url_hd
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
      <div id="divaboutme" className="jumbotron jumbotron-fluid m-0">
        <div className=" container container-fluid p-5">
          <div className="row">
            <div className=" col-5 d-none d-lg-block align-self-center">
              <img
                className=" border border-secondary rounded-circle"
                src={this.state.instaProfilePic}
              ></img>
            </div>
            <div className=" col-lg-7">
              <h1 className="display-4 mb-5 text-center">
                {this.state.heading}
              </h1>
              <p className=" lead text-center">{this.state.aboutDev}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      updated_at: "0 mints",
      stargazers_count: this.props.value.stargazers_count,
      download_url: this.props.value.svn_url + "/archive/master.zip",
      repo_url: this.props.value.svn_url
    };
  }
  componentDidMount = () => {
    this.handleUpdatetime();
  };

  handleUpdatetime = () => {
    const date = new Date(this.state.value.pushed_at);
    const nowdate = new Date();
    var diff = nowdate.getTime() - date.getTime();
    var hours = Math.trunc(diff / 1000 / 60 / 60);
    if (hours < 24) {
      this.setState({ updated_at: hours.toString() + " hours ago" });
    } else {
      var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      this.setState({
        updated_at: "on " + day + " " + monthNames[monthIndex] + " " + year
      });
    }
  };

  render() {
    return (
      <div className="col-md-6">
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          {/* <img src="" className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{this.state.value.name} </h5>
            <p className="card-text">{this.state.value.description} </p>
            <a
              href={this.state.download_url}
              className=" btn btn-outline-secondary mr-3"
            >
              <i className="fab fa-github" /> Clone Project
            </a>
            <a
              href={this.state.repo_url}
              target=" _blank"
              className=" btn btn-outline-secondary"
            >
              <i className="fab fa-github" /> Repo
            </a>
            <hr />
            <Language value={this.state.value.languages_url}></Language>
            <p className="card-text">
              <a href="" className=" text-dark card-link mr-4">
                <i className="fab fa-github" /> Stars{" "}
                <span className="badge badge-dark">
                  {this.state.stargazers_count}
                </span>
              </a>
              <small className="text-muted">
                Updated {this.state.updated_at}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class Language extends Component {
  state = {
    data: []
  };
  componentDidMount = () => {
    this.handleRequest();
  };

  handleRequest = () => {
    axios
      .get(this.props.value)
      .then(response => {
        // handle success
        // console.log(response.data);
        this.setState({ data: response.data });
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
    const array = [];
    var total_count = 0;
    for (var index in this.state.data) {
      array.push(index);
      total_count = total_count + this.state.data[index];
      // console.log(index, this.state.data[index]);
    }
    // console.log("array contains ", array, this.state.data[array[0]]);
    return (
      <div className="pb-3">
        Languages:{" "}
        {array.map(language => (
          <a key={language} className="badge badge-light card-link">
            {language}:{" "}
            {Math.trunc((this.state.data[language] / total_count) * 1000) / 10}{" "}
            %
          </a>
        ))}
      </div>
    );
  }
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgStyle: { backgroundColor: "#f5f5f5" }
    };
  }
  render() {
    return (
      <footer style={this.state.bgStyle} className=" mt-auto py-3 text-center">
        {/* <strong> &copy; 2019 </strong>*/}
        <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
        <a
          className=" badge badge-dark"
          target="_blank"
          href={"https://github.com/hashirshoaeb"}
        >
          Hashir Shoaib
        </a>{" "}
        using <i className="fab fa-react"></i>
        <p>
          <small className="text-muted">
            {" "}
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </footer>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MainBody></MainBody>
        <AboutMe></AboutMe>
        <Project></Project>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
