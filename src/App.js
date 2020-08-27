import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import config from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import ProjectTimeline from "./editable-stuff/ProjectTimeline"; 
import Experience from "./editable-stuff/Experience";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import { ConfigProvider } from "react-avatar";

const { avatarRedirectUrl, showNavigationbar, showBlog, showSkills } = config;

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody ref={ref} />
      <AboutMe />
	  {/*<ProjectTimeline />*/}
	  {showSkills && <Skills />}
	  {/*<Project />*/}
      <Experience />
	 
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <ConfigProvider avatarRedirectUrl={avatarRedirectUrl}>
      <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
        {showNavigationbar && <Navbar ref={titleRef} />}
        <Route path="/" exact component={() => <Home ref={titleRef} />} />
        {showBlog && <Route path="/blog" exact component={Blog} />}
        {showBlog && <Route path="/blog/:id" component={BlogPost} />}
        <Footer />
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
