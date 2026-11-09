import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
    default_branch,
  } = value;
  const loaded = Boolean(name);
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{loaded ? description : <Skeleton count={3} />} </Card.Text>
          {svn_url ? (
            <CardButtons svn_url={svn_url} default_branch={default_branch} />
          ) : (
            <Skeleton count={2} />
          )}
          <hr />
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )}
          {loaded ? (
            <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url, default_branch }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a
        href={`${svn_url}/archive/refs/heads/${default_branch || "main"}.zip`}
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fa-brands fa-github" /> Clone Project
      </a>
      <a
        href={svn_url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fa-brands fa-github" /> Repo
      </a>
    </div>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let cancelled = false;
    fetch(languages_url)
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
        return response.json();
      })
      .then((languages) => {
        if (!cancelled) setData(languages);
      })
      .catch((error) => console.error(error.message));
    return () => {
      cancelled = true;
    };
  }, [languages_url]);

  const languages = Object.keys(data);
  const total_count = languages.reduce((sum, language) => sum + data[language], 0);

  return (
    <div className="pb-3">
      Languages:{" "}
      {languages.length
        ? languages.map((language) => (
            <a
              key={language}
              className="card-link"
              href={repo_url + `/search?l=${encodeURIComponent(language)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge bg-light text-dark">
                {language}: {Math.trunc((data[language] / total_count) * 1000) / 10} %
              </span>
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

const formatUpdated = (pushed_at) => {
  const date = new Date(pushed_at);
  const hours = Math.trunc((Date.now() - date.getTime()) / 1000 / 60 / 60);
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  const options = { day: "numeric", month: "long", year: "numeric" };
  return `on ${new Intl.DateTimeFormat("en-US", options).format(date)}`;
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  return (
    <p className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link me-4">
          <i className="fa-brands fa-github" /> Stars{" "}
          <span className="badge bg-dark">{star_count}</span>
        </span>
      </a>
      {pushed_at && <small className="text-muted">Updated {formatUpdated(pushed_at)}</small>}
    </p>
  );
};

export default ProjectCard;
