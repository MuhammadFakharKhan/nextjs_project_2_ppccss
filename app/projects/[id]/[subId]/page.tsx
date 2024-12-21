"use client";

import { url } from 'inspector';
import { useParams } from 'next/navigation';

const projects = [
  {
    id: 'project-one',
    title: 'Project One',
    subprojects: [
      {
        id: 'html-project-1',
        title: 'HTML Project 1',
        description: 'Description for HTML Project 1.',
        url: 'https://hackathon-project-4-c6ng.vercel.app/'
      },
      {
        id: 'html-project-2',
        title: 'HTML Project 2',
        description: 'Description for HTML Project 2.',
        url: 'https://hackathon-project-4-c6ng.vercel.app/'
      },
    ]
  },
  // Add other projects and subprojects as needed
];

const SubprojectPage = () => {
  const { id, subId } = useParams();

  const project = projects.find((project) => project.id === id);
  const subproject = project?.subprojects.find((sub) => sub.id === subId);

  if (!subproject) {
    return <p>Subproject not found</p>;
  }
  return (
    <div className="projects-container">
      <h1 className="projects-header">{subproject.title}</h1>
      <p className="description">{subproject.description}</p>
    </div>
  );
}
export default SubprojectPage;