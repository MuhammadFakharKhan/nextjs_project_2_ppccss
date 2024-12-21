import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  const projects = [
    {
      id: 'project-one',
      title: 'HTML & CSS PROJECTS',
      description: 'This is a brief description of Project One. It includes details about the technologies used and the problem it solves.',
      image: '/images/coding (1).png',
      subprojects: []
    },
    {
      id: 'project-two',
      title: 'NextJs Projects',
      description: 'This is a brief description of Project Two. It includes details about the technologies used and the problem it solves.',
      image: '/images/nextjs-img.png',
      subprojects: []
    },
    {
      id: 'project-three',
      title: 'Typescript Projects',
      description: 'This is a brief description of Project Three. It includes details about the technologies used and the problem it solves.',
      image: '/images/typescript.png',
      subprojects: []
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-header">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Link href={`/projects/${project.id}`} key={index} className="project-card">
            <Image 
              src={project.image} 
              alt={project.title} 
              width={300} 
              height={200} 
              className="project-image"
            />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}  
  export default Projects;