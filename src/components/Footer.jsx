import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-brush" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/naman-agg"
          aria-label="My GitHub"
        >
          Naman Aggarwal
        </a>{" "}
        on <i className="fab fa-github" />
        <p>
          <small className="text-muted">

          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
