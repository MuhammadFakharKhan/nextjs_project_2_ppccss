import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div className="about-cont">
      <h1 className="about-head">About Me</h1>
      <div className="about-content">
        <Image 
          src="/images/fk pic5.png" 
          alt="About Me Image" 
          width={300} 
          height={300} 
          className="about-image"
        />
        <div className="about-text">
          <p className="text">
            Hi, My name is Muhammad Fakhar Khan. I'm a passionate developer with a knack for creating seamless user experiences and robust web applications. My journey in tech began 2 years ago, and I've loved every moment of it. Whether I'm working on a complex frontend interface or designing a sleek backend system, I always aim for excellence.
          </p>
          <p className="text">
            When I'm not coding, you can find me on the cricket ground. I believe in continuous learning and always strive to improve my skills and knowledge in the ever-evolving tech landscape.
          </p>
          <p className="text">
            As a TypeScript developer, I am constantly expanding my expertise in the language to build robust and scalable applications. My current focus is on learning about Next.js, Generative AI, and Agentic AI to leverage these technologies in my future projects and further enhance my development skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
