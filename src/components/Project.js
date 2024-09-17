// src/components/Project.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './Project.css';

const projectData = {
    project1: {
      image: '/images/DfT.jpg',
      name: 'DFT',
      description: 'Description of DFT work'
    },
    project2: {
      image: '/images/TPR.jpg',
      name: 'TPR',
      description: 'Description of TPR work'
    },
    project3: {
        image: '/images/BEIS.jpg',
        name: 'BEIS',
        description: 'Description of BEIS work'
      },
    // Add more projects as necessary
  };

const Project = () => {
  const { projectId } = useParams();  // Get the projectId from the URL
  const project = projectData[projectId];

  // If the projectId doesn't match any in projectData, show "Project not found"
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} style={{ width: '100%', height: 'auto' }} />
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
