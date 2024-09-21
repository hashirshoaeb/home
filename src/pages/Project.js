// Project.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./Project.css";

function Project() {
    const { projectId } = useParams();  // Get the projectId from the URL
  
    return (
      <div className="project-page">
        <Link to="/Contact">Contact me</Link> for more information about this project. I'm happy to chat about it
      </div>
    );
  }

export default Project;