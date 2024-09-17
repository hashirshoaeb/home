// src/components/WorkCard.js
import React from 'react';
import './WorkCard.css';

function WorkCard({ client, description, image }) {
  return (
    <div className="work-card">
      <img src={image} alt={`${client} project`} />
      <div className="work-card-content">
        <h2>{client}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default WorkCard;
