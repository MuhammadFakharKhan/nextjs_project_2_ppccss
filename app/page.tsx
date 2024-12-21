import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'animate.css'; // If you're still using animate.css, keep this import
import '../app/globals.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div className="page-container"> {/* New class for the container */}
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing my projects and skills</p>
      </section>

      <section className="about-section"> 
  <h2 className="section-title">About Me</h2> 
  <div className="about-container"> 
    <Image  
      src="/images/fk pic5.png"  
      alt="About Me Image"  
      width={300}  
      height={300}  
      className="about-image" 
    /> 
    <p className="about-text"> 
      Hi, My name is Muhammad Fakhar Khan. I'm a passionate developer and graphic designer with a knack for creating seamless user experiences and robust web applications. Learn more about my journey and interests on the About Me page. 
    </p> 
  </div>
  <Link href="/about">

 <button className="about-me-button">About Me</button>

</Link> 
</section>

      <section className="skills">
        <h2 className='my-skills'>My Skills</h2>
        <div className="skills-container">
          <div className="skill-bar-container">
            <label className="html-label">HTML</label>
            <div className="skill-bar">
              <div className="skill-level html-level">90%</div>
            </div>
          </div>
          
          <div className="skill-bar-container">
            <label>CSS</label>
            <div className="skill-bar">
              <div className="skill-level css-level">85%</div>
            </div>
          </div>
          <div className="skill-bar-container">
            <label>JavaScript</label>
            <div className="skill-bar">
              <div className="skill-level javascript-level">75%</div>
            </div>
          </div>
          <div className="skill-bar-container">
            <label>TypeScript</label>
            <div className="skill-bar">
              <div className="skill-level typescript-level">80%</div>
            </div>
          </div>
          <div className="skill-bar-container">
            <label>Next.js</label>
            <div className="skill-bar">
              <div className="skill-level nextjs-level">70%</div>
            </div>
          </div>
          <div className="skill-bar-container">
            <label>Adobe Illustrator</label>
            <div className="skill-bar">
              <div className="skill-level illustrator-level">90%</div>
            </div>
          </div>
          <div className="skill-bar-container">
            <label>Adobe Photoshop</label>
            <div className="skill-bar">
              <div className="skill-level photoshop-level">85%</div>
            </div>
          </div>
          <div className="skill-bar-container">
            <label>Canva</label>
            <div className="skill-bar">
              <div className="skill-level canva-level">70%</div>
            </div>
          </div>
        </div>
      </section>

      <section>
  <h2 className="featured-projects-title">Featured Projects</h2>
  <div className="project-grid">
    <div className="project-card">
      <a href="https://hackathon-project-5.vercel.app/">
        <img src="/images/coding (1).png" alt="Project One" className="project-image" width="300" height="200" />
        <h3 className="project-title">HTML & CSS PROJECT</h3>
        <p className="project-description">Generate a unique URL for each resume based on the user’s username, and allow the resume to be shared and downloaded.</p>
      </a>
    </div>
    <div className="project-card">
      <a href="/path/to/project-two">
        <img src="/images/nextjs-img.png" alt="Project Two" className="project-image" width="300" height="200" />
        <h3 className="project-title">NEXTJS PROJECT</h3>
        <p className="project-description">This is a brief description of Project Two.</p>
      </a>
    </div>
    <div className="project-card">
      <a href="https://drive.google.com/file/d/1IE3F8eq-mxt0v3uT3grPqtoKra5jF9-C/view?usp=sharing&usp=embed_facebook">
        <img src="/images/adobe ai photo.png" alt="Project Three" className="project-image" width="300" height="300" />
        <h3 className="project-title">GRAPHIC DESIGNING PROJECT</h3>
        <p className="project-description">My graphic design portfolio.</p>
      </a>
    </div>
  </div>
  <p className="explore-more">
    Explore more on the <Link href="/projects">

<button className="projects-button">Projects</button>

</Link> page.
  </p>
  
</section>

      <section className="contact">  {/* New class name 'contact' */}
  <h2>Contact Me</h2>
  <p>Feel free to reach out to me via the following contact information:</p>
  <div className="contact-info">  {/* New class name 'contact-info' for the inner container */}
    <p><strong>Email:</strong> fk8201610@gmail.com</p>
    <p><strong>Phone:</strong> +923353610778</p>
    <p><strong>LinkedIn:</strong> 
      <Link href="https://linkedin.com/in/muhammad-fakhar-khan-291bb0226" className="linked-button">linkedin.com/in/muhammad-fakhar-khan-291bb0226</Link>
    </p>
    <p><strong>Github:</strong> 
      <Link href="https://github.com/MuhammadFakharKhan" className="github-button">github.com/MuhammadFakharKhan</Link>
    </p>
  </div>
</section>
    </div>
  );
};

export default HomePage;