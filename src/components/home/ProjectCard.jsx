import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    url,
    stargazers_count,
    languages_url,
    pushed_at,
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
          <CardButtons url={url} />
          <hr />
          {languages_url ? (
            <Language languages_url={languages_url} repo_url={svn_url} />
          ) : (
            <Skeleton count={0} />
          )}
          {value ? (
            <CardFooterSimple star_count={stargazers_count} repo_url={svn_url} pushed_at={pushed_at} name={name} url={url}/>
          ) : (
            <Skeleton />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ url }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      {/*
      <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fab fa-github" /> Clone Project
      </a>
      */}
      <a href={url} target=" _blank" className="btn btn-outline-secondary mx-2">
      View Project <i className="fa fa-arrow-circle-right" /> 
      </a>
    </div>
  );
};

const AltLink = ({ url }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      <a
        href={`${url}/`}
        target={"_blank"}
        className="btn btn-outline-secondary mx-2"
      >
        <i className="fa fa-external-link-square-alt" /> View
      </a>
    </div>
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
            className="card-link"
            href={repo_url + `/search?l=${language}`}
            target=" _blank"
            rel="noopener noreferrer"
          >
            <span className="badge bg-light text-dark">
              {language}:{" "}
              {Math.trunc((data[language] / total_count) * 1000) / 10} %
            </span>
          </a>

        ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at, name, url}) => {
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
        href={repo_url === null ? url : repo_url}
        target=" _blank"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <i className={repo_url === null ? "fa fa-external-link-square-alt" : "fab fa-github"} /> {name}{" "}
          <span className="badge badge-dark">{star_count}</span>
        </span>
      </a>
      {repo_url === null ? <></> : <small className="text-muted">Updated {updated_at}</small>}
    </p>
  );
};

const CardFooterSimple = ({ star_count, repo_url, pushed_at, name, url}) => {

  return (
    <p className="card-text">
      {repo_url === null ? <></> : 
        <a href={repo_url} className="text-dark text-decoration-none">
          <i className={repo_url === null ? "fa fa-external-link-square-alt" : "fab fa-github"} /> {" "}
          <small>Repository</small>
        </a>
      }
    </p>
  );
};

export default ProjectCard;
