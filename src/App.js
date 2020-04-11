import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Blog } from "./components/blog/Blog";

const Home = () => {
  return (
    <Fragment>
      <MainBody />
      <AboutMe />
      <Project />
    </Fragment>
  );
};

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    <div>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/blog" component={Blog} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
