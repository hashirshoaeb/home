import React, { Component } from "react";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer"

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
