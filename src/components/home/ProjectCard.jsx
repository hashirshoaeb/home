import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const {
    name, // github + gitlab
    description, // github + gitlab
    svn_url, // github, gitlab uses web_url
    web_url,
    stargazers_count, // github, gitlab uses star_count
    star_count,
    languages_url, // github, gitlab uses APIURL/languages (which is also what gitlab uses, but isn't included in response)
    pushed_at, // github, gitlab has last_activity_at (which more closely matches github's updated_at)
    last_activity_at,
    fetched_from, // gitlab or github
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{(!description)?"":description || <Skeleton count={3} />} </Card.Text>
          <CardButtons svn_url={svn_url} fetched_from="github" />
          <hr />
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={3} />
          )}
          {value ? (
            <CardFooter star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} fetched_from="github" />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const GitlabProjectCard = ({ value }) => {
  const {
    name, // github + gitlab
    description, // github + gitlab
    web_url,
    star_count,
    languages_url, // github, gitlab uses APIURL/languages (which is also what gitlab uses, but isn't included in response)
    last_activity_at,
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{(!description)?"":description || <Skeleton count={3} />} </Card.Text>
          <CardButtons svn_url={web_url} fetched_from="gitlab" />
          <hr />
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={web_url} />
          ) : (
            <Skeleton count={3} />
          )}
          {value ? (
            <CardFooter star_count={star_count} repo_url={web_url} pushed_at={last_activity_at} fetched_from="gitlab" />
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url, fetched_from }) => {
  return (
    <>
      <a href={svn_url} target=" _blank" className="btn btn-outline-secondary">
        <i className={`fab fa-${fetched_from}`} /> Repo
      </a>
    </>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
            <a
              key={language} 
              className="badge badge-light card-link"
              href={repo_url + `/search?l=${language}`}
              target=" _blank"
            >
              {language}:{" "}
              {Number((data[language] / total_count * 1000) / 10).toFixed(2)} %
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at, fetched_from }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className={`fab fa-${fetched_from}`} /> Stars{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
export {ProjectCard, GitlabProjectCard};
