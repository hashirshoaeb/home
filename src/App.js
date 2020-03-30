import React, { Fragment } from "react";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";

const App = () =>  (
  <Fragment>
    <MainBody />
    <AboutMe />
    <Project />
    <Footer />
  </Fragment>
);
  


export default App;
