import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { config, getInTouch, skills, repos } from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import { ConfigProvider } from "react-avatar";
import GetInTouch from "./components/home/GetInTouch.jsx";

const { avatarRedirectUrl, showNavigationbar, showBlog } = config;

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody ref={ref} />
      <AboutMe />
      <Project
        heading={repos.heading}
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specfic={repos.specificRepos}
      />
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
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
        <Footer>
          {getInTouch.show && (
            <GetInTouch
              heading={getInTouch.heading}
              message={getInTouch.message}
              email={getInTouch.email}
            />
          )}
        </Footer>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
