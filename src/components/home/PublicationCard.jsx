import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const PublicationCard = ({ value }) => {
  const { title, authors, journal, year, doi, url } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">
            <a
              className="text-dark text-decoration-none"
              href={doi ? `https://doi.org/${doi}` : url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </Card.Title>
          <Card.Text className="small text-muted">{authors.join(", ")}</Card.Text>
          <Card.Text>
            <strong>Journal:</strong> {journal}
            {year && ` (${year})`}
          </Card.Text>
          {doi && (
            <Card.Text>
              <strong>DOI:</strong>{" "}
              <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer">
                {doi}
              </a>
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PublicationCard;
