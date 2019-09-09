import React, { Component } from "react";
import Typist from "react-typist";
import "./App.css";
import Configs from "./configurations.json";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Link } from "react-router-dom";
import $ from "jquery";
import Popper from "popper.js";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <hr />
        <hr />
        <h1>About</h1>
      </div>
    );
  }
}

export default About;
