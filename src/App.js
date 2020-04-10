import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => (
  <Fragment>
    <Navbar />
    <MainBody />
    <AboutMe />
    <Project />
    <Footer />
  </Fragment>
);

export default App;
