import React from 'react';
import { Link } from 'react-router-dom';
import './Work.css';

const projects = [
  {
    id: 'project1',
    client: 'DFT',
    description: 'A description of the first project.',
    image: '/images/project1_thumbnail.jpg' // Thumbnail for the project
  },
  {
    id: 'project2',
    client: 'TPR',
    description: 'A description of the second project.',
    image: '/images/project2_thumbnail.jpg'
  },
  {
    id: 'project3',
    client: 'BEIS',
    description: 'A description of the third project.',
    image: '/images/project3_thumbnail.jpg'
  },
  // Add more projects as needed
];

const Work = () => {
  return (
    <div className="work">
      {projects.map(project => (
        <Link to={`/project/${project.id}`} key={project.id} className="project-card-link">
          <div className="project-card">
            <img src={project.image} alt={project.client} />
            <div className="project-details">
              <h2>{project.client}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Work;
