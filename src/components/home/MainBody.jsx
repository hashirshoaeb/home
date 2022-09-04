import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons, resume }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          <Typist>
            <div className="lead typist">
              {message}
            </div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                {icon.image === "fa-envelope" ? <i className={`fas fa-envelope fa-3x socialicons`} /> 
                : <i className={`fab ${icon.image}  fa-3x socialicons`} />}
                
              </a>
            ))}
             <a
                key={`social-icon-4`}
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:salilkhannawork@gmail.com"
                aria-label={`My Email`}
              >
                
              </a>
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            target="_blank"
            rel="noopener noreferrer"
            href={resume}
            role="button"
            aria-label="My Resume"
            style={{ marginTop: '0.8rem' }}
          >
            Resume
          </a>
          <span> &nbsp; </span>

          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
            style={{ marginTop: '0.8rem' }}
          >
            More about me
            
          </a>
          <span> &nbsp; </span>
          <a
            className="btn btn-outline-light btn-lg "
            target="_blank"
            rel="noopener noreferrer"
            href="https://salad-spinner.netlify.app/"
            role="button"
            aria-label="Salad Spinner"
            style={{ marginTop: '0.8rem' }}
          >
            My Game!
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
