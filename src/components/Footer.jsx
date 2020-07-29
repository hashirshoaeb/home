import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { showGetInTouch } from "../editable-stuff/configurations.json";
import GetInTouch from "./home/GetInTouch";
const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {showGetInTouch && <GetInTouch />}
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
