import React, { Component } from "react";
import Typist from "react-typist";
import "./App.css";
import Configs from "./configurations.json";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-transparent fixed-top">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Features
            </a>
            <a className="nav-item nav-link" href="#">
              Pricing
            </a>
            <a
              className="nav-item nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundType: "gradient",
      devInfo: "Hashir Shoaib",
      devDesc:
        "🧔🏻Engineer | Programmer | 👨🏻‍💻Web Developer | 📸 Photographer | 🥋Athlete | 👩‍🎨 Artist",
      icons: [
        {
          image: "fa-github",
          url: "https://github.com/hashirshoaeb"
        },
        {
          image: "fa-facebook",
          url: "https://www.facebook.com/hashir.shoaeb"
        },
        {
          image: "fa-instagram",
          url: "https://www.instagram.com/hashir.shoaeb/"
        },
        {
          image: "fa-linkedin",
          url: "https://www.linkedin.com/in/hashir-shoaeb/"
        }
      ]
    };
  }

  handleScroll = e => {
    this.setState({ devInfo: "Hashir Shoaib" });
    console.log("scroll trigered");
  };
  toggleHover = e => {
    console.log("hover trigered");
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const socialicons = {
      color: "white",
      paddingLeft: "5px",
      paddingRight: "5px",
      transition: "all 0.8s"
    };
    return (
      <div className="jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center flex-wrap m-0">
        <div className=" container container-fluid text-center ">
          <h1 className="display-1" onScroll={this.handleScroll}>
            {this.state.devInfo}
          </h1>
          <p className="lead">
            <Typist>{this.state.devDesc}</Typist>
          </p>

          <div className=" p-5">
            {this.state.icons.map(icon => (
              <a target="_blank" rel="noopener noreferrer" href={`${icon.url}`}>
                <i
                  className={`fab ${icon.image}  fa-3x`}
                  style={socialicons}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}
                />
              </a>
            ))}
          </div>

          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
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
      devDesc: "asdj kjahs jash yg tf rdfhjg jaygd hjgbv jbhvhc"
    };
  }
  render() {
    return (
      <div className="jumbotron jumbotron-fluid m-0">
        <div className=" container container-fluid p-5">
          <h1 className="display-1">{this.state.heading}</h1>
          <p className="lead">
            <Typist>{this.state.devDesc}</Typist>
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </div>
      </div>
    );
  }
}

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "My Projects"
    };
  }
  render() {
    return (
      <div className="jumbotron jumbotron-fluid m-0">
        <div className=" container container-fluid p-5">
          <h1 className="display-1">{this.state.heading}</h1>
          <div className=" card-columns">
            <ProjectCard></ProjectCard>
          </div>
        </div>
      </div>
    );
  }
}

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
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
        <strong> &copy; 2019 </strong> Built with Reactjs
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
        {/* <Navbar></Navbar> */}
        <MainBody></MainBody>
        {/* <AboutMe></AboutMe> */}
        {/* <Project></Project> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       darkBackgroundModes: ["day"],
//       lightBackgroundModes: ["night"],
//       backgroundType: Configs.backgroundType || "plain",
//       appClass: Configs.plainBackgroundMode || "daylight",
//       devIntro: Configs.devIntro || "Lorem Ipsum",
//       devDesc:
//         Configs.devDesc ||
//         "Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.",
//       backgroundMode: "default",
//       backgroundIndex: 0,
//       bgStyle: {},
//       icons: Configs.icons || []
//     };
//   }

//   componentWillMount = () => {
//     if (this.checkIfPlainTypeEnabled()) {
//       return true;
//     } else if (this.checkIfGradientTypeEnabled()) {
//       this.setState({
//         appClass: "gradient",
//         bgStyle: this.prepareGradientStyleSheets()
//       });
//     }
//   };

//   checkIfNightModeEnabled = () => {
//     return (
//       this.state.backgroundType === "plain" &&
//       this.state.appClass === "nightlight"
//     );
//   };

//   checkIfDayModeEnabled = () => {
//     return (
//       this.state.backgroundType === "plain" &&
//       this.state.appClass === "daylight"
//     );
//   };

//   checkIfGradientTypeEnabled = () => {
//     return this.state.backgroundType === "gradient";
//   };

//   checkIfPlainTypeEnabled = () => {
//     return this.state.backgroundType === "plain";
//   };

//   prepareGradientStyleSheets = () => {
//     if (Configs.gradientColors) {
//       return {
//         background: "linear-gradient(-45deg, " + Configs.gradientColors + ")",
//         backgroundSize: "400% 400%"
//       };
//     } else {
//       return {
//         background:
//           "linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)",
//         backgroundSize: "400% 400%"
//       };
//     }
//   };

//   getDefaultModeBasedOnBackgroundType = () => {
//     if (this.checkIfNightModeEnabled()) {
//       return this.state.lightBackgroundModes[0];
//     } else if (this.checkIfDayModeEnabled()) {
//       return this.state.darkBackgroundModes[0];
//     }
//   };

//   changeThemeMode = e => {
//     if (this.checkIfNightModeEnabled()) {
//       this.setState({
//         appClass: "daylight",
//         backgroundIndex: 0,
//         backgroundMode: this.state.darkBackgroundModes[0]
//       });
//     } else if (this.checkIfDayModeEnabled()) {
//       this.setState({
//         appClass: "nightlight",
//         backgroundIndex: 0,
//         backgroundMode: this.state.lightBackgroundModes[0]
//       });
//     }
//   };

//   render() {
//     const {
//       appClass,
//       bgStyle,
//       backgroundMode,
//       devIntro,
//       devDesc,
//       icons
//     } = this.state;

//     return (
//       <div className={appClass} style={bgStyle}>
//         <div className="change-mode" onClick={this.changeThemeMode} />
//         <div className={backgroundMode}>
//           <main className="App-main">
//             <h1 className="intro">{devIntro}</h1>
//             <div className="tagline">
//               <Typist>{devDesc}</Typist>
//             </div>
//             <div className="icons-social">
//               {icons.map(icon => (
//                 <a
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   href={`${icon.url}`}
//                 >
//                   <i className={`fab ${icon.image}`} />
//                 </a>
//               ))}
//             </div>
//           </main>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
