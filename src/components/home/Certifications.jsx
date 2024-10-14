import React from "react";
import { Table, Container } from "react-bootstrap";

function Certifications({ certifications }) {
  return (
    <Container style={{ width: "95%", margin: "20px auto" }}>
      <Table striped bordered hover responsive>
        <tbody>
          {certifications.map((cert, index) => (
            <tr key={index}>
              <td>{cert.name}</td>
              <td>{cert.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Certifications;
