import React, { Component } from "react";
import Typist from "react-typist";
import "../App";
import Configs from "../editable-stuff/configurations.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class MainBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundType: Configs.backgroundType,
      devInfo: Configs.devIntro,
      devDesc: Configs.devDesc,
      hoverstatus: ["socialicons", "socialicons", "socialicons", "socialicons"],
    };
  }

  toggleHover = (data) => {
    const newhoverStatus = [...this.state.hoverstatus];

    if (data.event === "enter") {
      newhoverStatus[data.icon.id] = "socialiconshover";
      return this.setState({ hoverstatus: newhoverStatus });
    } else if (data.event === "leave") {
      newhoverStatus[data.icon.id] = "socialicons";
      return this.setState({ hoverstatus: newhoverStatus });
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
          <div className="container container-fluid text-center ">
            <h1 className="display-1">
              {this.state.devInfo}
            </h1>
            <Typist className="lead"> {this.state.devDesc}</Typist>
            <div className="p-5">
              {icons.map(icon => (
                <a
                  key={icon.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}
                >
                  <i
                    className={`fab ${icon.image}  fa-3x ${
                      this.state.hoverstatus[icon.id]
                    }`}
                    onMouseOver={() => this.toggleHover({ icon, event: "enter" })}
                    onMouseOut={() => this.toggleHover({ icon, event: "leave" })}
                  />
                </a>
              ))}
            </div>
            <a
              className="btn btn-outline-light btn-lg"
              href="#aboutme"
              role="button"
              aria-label="Learn more about me"
            >
              More about me
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBody;
