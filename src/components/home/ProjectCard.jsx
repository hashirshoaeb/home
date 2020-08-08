import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import ProjectLanguage from "./ProjectLanguage";

const ProjectCard = ({ value }) => {
  const [updated_at, setUpdatedAt] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(value.pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      return setUpdatedAt(`${hours.toString()} hours ago`);
    } else {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();

      return setUpdatedAt(`on ${day} ${monthNames[monthIndex]} ${year}`);
    }
  }, [value.pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  const { name, description, svn_url, stargazers_count, languages_url } = value;
  console.log(value);
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <Card.Body>
          <Card.Title as="h5">{value ? name : <Skeleton />} </Card.Title>
          <Card.Text>{value ? description : <Skeleton count={3} />} </Card.Text>
          {svn_url ? (
            <>
              <a
                href={`${svn_url}/archive/master.zip`}
                className="btn btn-outline-secondary mr-3"
              >
                <i className="fab fa-github" /> Clone Project
              </a>
              <a
                href={svn_url}
                target=" _blank"
                className="btn btn-outline-secondary"
              >
                <i className="fab fa-github" /> Repo
              </a>
            </>
          ) : (
            <Skeleton count={2} />
          )}
          <hr />
          {languages_url ? (
            <ProjectLanguage value={languages_url}></ProjectLanguage>
          ) : (
            <Skeleton count={3} />
          )}
          {value ? (
            stargazers_count ? (
              <p className="card-text">
                <span className="text-dark card-link mr-4">
                  <i className="fab fa-github" /> Stars{" "}
                  <span className="badge badge-dark">{stargazers_count}</span>
                </span>
                <small className="text-muted">Updated {updated_at}</small>
              </p>
            ) : null
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
