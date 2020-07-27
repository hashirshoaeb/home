import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import {
  footerMessage,
  emailAddress,
} from "../editable-stuff/configurations.json";
const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        <h2 className="display-4 pb-3 text-center">Get In Touch</h2>
        <p className="lead text-center pb-3">
          {footerMessage}, <a href={`mailto:${emailAddress}`}>here</a>.
        </p>
        <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        >
          Hashir Shoaib
        </a>{" "}
        using <i className="fab fa-react"></i>
        <p>
          <small className="text-muted">
            {" "}
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
