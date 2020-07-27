import React, { useState, useEffect, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const [updated_at, setUpdatedAt] = useState("0 mints");

  const handleUpdatetime = useCallback(
    (e) => {
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
    },
    [value.pushed_at]
  );

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  const { name, description, svn_url, stargazers_count, languages_url } = value;
  return (
    <div className="col-md-6">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        {/* <img src="" className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{name || <Skeleton />} </h5>
          <p className="card-text">{description || <Skeleton count={3} />} </p>
          {svn_url ? (
            <>
              {" "}
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
            <Language value={languages_url}></Language>
          ) : (
            <Skeleton count={3} />
          )}
          {stargazers_count ? (
            <p className="card-text">
              <span className="text-dark card-link mr-4">
                <i className="fab fa-github" /> Stars{" "}
                <span className="badge badge-dark">{stargazers_count}</span>
              </span>
              <small className="text-muted">Updated {updated_at}</small>
            </p>
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
    </div>
  );
};

const Language = ({ value }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(value);
      return setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [value]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
    // console.log(index, this.state.data[index]);
  }
  // console.log("array contains ", array, this.state.data[array[0]]);

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.map((language) => (
        <p key={language} className="badge badge-light card-link">
          {language}: {Math.trunc((data[language] / total_count) * 1000) / 10} %
        </p>
      ))}
    </div>
  );
};

export default ProjectCard;
