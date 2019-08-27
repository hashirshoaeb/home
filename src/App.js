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
      <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

class MainBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundType: "gradient",
      devInfo: "Hi, I'm Hashir Shoaib",
      devDesc:
        "🧔🏻Engineer | Programmer | 👨🏻‍💻Web Developer | 📸 Photographer | 🥋Athlete | 👩‍🎨 Artist"
    };
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-transparent bgstyle text-light">
        <div className=" container container-fluid text-center">
          <h1 className="display-1">{this.state.devInfo}</h1>
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <MainBody></MainBody>
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
