import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        Made with <i className="fas fa-heart" /> by{" "}
        <text> 
          <a>
            href="www.github.com/akhilvreddy"
          <span className="badge bg-black">
            Akhil Reddy
          </span>
          </a>
          <text> and </text>
          <a>
          <span className="badge bg-black">
            Advait Borkar
          </span>
          </a>
        </text>{" "}
        <p>
        Made using:  <i className="fab fa-react" /> <i className="fab fa-git" /> <i className="fab fa-js" /> <i className="fab fa-html5" /> <i className="fab fa-css3-alt" /> <i className="fab fa-node" />
        </p>
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
