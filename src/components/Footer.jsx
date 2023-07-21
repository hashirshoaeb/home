import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5", fontSize: "12px"};

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center " >
      <Container>
        {props.children}
      </Container>
    </footer>
  );
};

export default Footer;
