import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        <a href= {data.link} target="_blank" rel="noreferrer"><img className=" bg-white mb-3" width={data.width} height={data.height} src={data.companylogo} alt=""/> </a>
         
        <p className="lead">
          <b>{data.role}</b>
          <br />
          {data.date}
          <br />
          {data.info}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;