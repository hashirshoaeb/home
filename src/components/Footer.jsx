import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/FedericoIglesias"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Federico Iglesias
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Este proyecto no es de mi autoria pero sos libre de hacer un fork.
            Su autor es https://github.com/hashirshoaeb
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
