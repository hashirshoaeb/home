import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import config from "../editable-stuff/config.js";
import GetInTouch from "./home/GetInTouch";
const Footer = () => {
  const { showGetInTouch } = config;
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {showGetInTouch && <GetInTouch />}
        <i className="fas fa-code"></i> with <i className="fas fa-heart"></i> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/bibinvargheset"
          aria-label="My GitHub"
        >
         Bibin Varghese
        </a>{" "}
        using <i className="fab fa-react"></i>
       
      </Container>
    </footer>
  );
};

export default Footer;
