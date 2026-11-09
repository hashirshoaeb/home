import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ikigaitribe.com/vlog/nana-korobi-ya-oki/"
          aria-label="Nana korobi ya oki: fall seven times, rise eight"
        > <span className="badge bg-dark">
            七転び八起き
          </span>
        </a>
        <p>
          <small className="text-muted">
          Nana Korobi Ya Oki
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
