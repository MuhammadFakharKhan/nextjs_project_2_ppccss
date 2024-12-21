"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "project-one",
    title: "HTML & CSS Projects",
    description: "This is a brief description of Project One. It includes details about the technologies used and the problem it solves.",
    image: "/images/coding (1).png",
    subprojects: [
      {
        id: "html-project-1",
        title: "HTML Project 1",
        description: "Milestone 1: Static Interactive Resume Builder. Build a static resume using HTML, CSS, and TypeScript.",
        image: "/images/coding (1).png",
        url: "https://hackathon-project-01-brown.vercel.app/"
      },
      {
        id: "html-project-2",
        title: "HTML Project 2",
        description: "Milestone 3: Dynamic Resume Builder with Form. Convert the static resume into a Dynamic Resume Builder where users can fill out a form, and the resume is generated based on their input.",
        image: "/images/coding (1).png",
        url: "https://hackathon-project-3-chi.vercel.app/"
      },
      {
        id: "html-project-3",
        title: "HTML Project 3",
        description: "Milestone 4: Editable Resume. Make the generated resume editable after its created.",
        image: "/images/coding (1).png",
        url: "https://hackathon-project-4-c6ng.vercel.app/"
      },
    ]
  },
  {
    id: "project-two",
    title: "NextJs Projects",
    description: "This is a brief description of Project Two. It includes details about the technologies used and the problem it solves.",
    image: "/images/nextjs-img.png",
    subprojects: [
      {
        id: "NextJs-Project-1",
        title: "NextJs Project 1",
        description: "Description for NextJs Project 1.",
        image: "/images/nextjs-img.png",
        url: "https://example.com/nextjs-project-1"
      },
      {
        id: "NextJs-Project-2",
        title: "NextJs Project 2",
        description: "Description for NextJs Project 2.",
        image: "/images/nextjs-img.png",
        url: "https://example.com/nextjs-project-2"
      },
      {
        id: "NextJs-Project-3",
        title: "NextJs Project 3",
        description: "Description for NextJs Project 3.",
        image: "/images/nextjs-img.png",
        url: "https://example.com/nextjs-project-3"
      },
    ]
  },
  {
    id: "project-three",
    title: "Typescript Projects",
    description: "This is a brief description of Project Three. It includes details about the technologies used and the problem it solves.",
    image: "/images/typescript.png",
    subprojects: [
      {
        id: "Typescript-Project-1",
        title: "Typescript Project 1",
        description: "Description for Typescript Project 1.",
        image: "/images/typescript.png",
        url: "https://example.com/typescript-project-1"
      },
      {
        id: "Typescript-Project-2",
        title: "Typescript Project 2",
        description: "Description for Typescript Project 2.",
        image: "/images/typescript.png",
        url: "https://example.com/typescript-project-2"
      },
      {
        id: "Typescript-Project-3",
        title: "Typescript Project 3",
        description: "Description for Typescript Project 3.",
        image: "/images/typescript.png",
        url: "https://example.com/typescript-project-3"
      },
    ]
  },
  // Add more projects as needed
];

const ProjectPage = () => {
  const { id } = useParams();

  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="projects-container">
      <h1 className="projects-header">{project.title}</h1>
      <Image 
        src={project.image} 
        alt={project.title} 
        width={300} 
        height={200} 
        className="main-image"
      />
      <p className="description">{project.description}</p>
  
      {project.subprojects.length > 0 && (
        <div className="subprojects-section">
          <h2 className="subprojects-header">Subprojects</h2>
          <div className="subprojects-grid">
            {project.subprojects.map((subproject, index) => (
              <div key={index} className="subproject-card">
                <Image 
                  src={subproject.image} 
                  alt={subproject.title} 
                  width={300} 
                  height={200} 
                  className="subproject-image"
                />
                <h3 className="subproject-title">{subproject.title}</h3>
                <p className="subproject-description">{subproject.description}</p>
                {subproject.url && (
                  <Link href={subproject.url} passHref
                     target="_blank" rel="noopener noreferrer" className="subproject-link">
                      Visit Project
                    
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;

  