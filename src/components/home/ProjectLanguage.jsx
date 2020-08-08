import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const ProjectLanguage = ({ value }) => {
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
  }

  return (
    <div className="pb-3">
      Languages:{" "}
      {array.length
        ? array.map((language) => (
            <p key={language} className="badge badge-light card-link">
              {language}:{" "}
              {Math.trunc((data[language] / total_count) * 1000) / 10} %
            </p>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

export default ProjectLanguage;
