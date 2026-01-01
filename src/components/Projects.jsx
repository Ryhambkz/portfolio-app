import { useState } from 'react';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt, FaLaptop, FaMobileAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
  title: "Hotel PMS - Memory Project",
  type: "web",
  description: "Property Management System for hotels. Manage rooms, reservations, guests, services, and payments efficiently with a modern interface.",
  tech: ["React", "Node.js", "Express", "MongoDB", "CSS Modules"],
  github: "https://github.com/mayastuds/PMS-PROJECT",
  demo: "",
  size: "large"
  },
  {
    id: 2,
    title: "Lab 2",
    type: "web",
    description: "Initial project setup and learning core JavaScript concepts.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ryhambkz/nodejs-lab3",
    demo: "",
    size: "small"
  
  },
  {
    id: 3,
    title: "Lab 3: Node.js & NPM",
    type: "web",
    description: "Creating a Node.js project and managing dependencies with NPM.",
    tech: ["Node.js", "NPM", "JavaScript"],
    github: "https://github.com/Ryhambkz/lab3",
    demo: "",
    size: "medium"
  },
  {
     id: 4,
    title: "Lab 4: Unit Testing with JEST",
    type: "web",
    description: "Writing unit tests for JavaScript functions and React components using JEST.",
    tech: ["Jest", "React Testing Library", "JavaScript"],
    github: "https://github.com/Ryhambkz/lab4_jest",
    demo: "",
    size: "medium"
  },
  {
    id: 5,
    title: "Lab 5: React Components",
    type: "web",
    description: "Building reusable React components with proper props, state, and styling.",
    tech: ["React", "JSX", "CSS Modules"],
    github: "https://github.com/Ryhambkz/lab5",
    demo: "",
    size: "medium"
  },
  {
    id: 6,
    title: "Lab 6: Vite Project",
    type: "web",
    description: "A project built with Vite, showcasing modern frontend tooling and fast bundling.",
    tech: ["Vite", "JavaScript", "CSS"],
    github: "https://github.com/Ryhambkz/caw-labs",
    demo: "",
    size: "medium"
  },
  {
    id: 7,
    title: "Lab 7: Kanban Board",
    type: "web",
    description: "A drag-and-drop task management application with real-time updates and team collaboration features.",
    tech: ["React", "Vite", "TypeScript", "DnD Kit"],
    github: "https://github.com/Ryhambkz/lab7-react",
    demo: "",
    size: "large"
  }
];

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const getDeviceIcon = (type) => {
    switch(type) {
      case 'web': return <FaLaptop />;
      case 'mobile': return <FaMobileAlt />;
      case 'both': return <><FaLaptop /> & <FaMobileAlt /></>;
      default: return <FaLaptop />;
    }
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Interactive showcase of my work across different platforms and technologies
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map(project => (
            <div 
              key={project.id} 
              className={`${styles.projectCard} ${styles[project.size]}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className={styles.projectHeader}>
                <div className={styles.projectType}>
                  <span className={styles.deviceIcon}>{getDeviceIcon(project.type)}</span>
                  <span className={styles.typeText}>
                    {project.type === 'web' ? 'Web Application' : 
                     project.type === 'mobile' ? 'Mobile App' : 'Cross-Platform'}
                  </span>
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>

              {/* Device Mockup */}
              <div className={styles.deviceMockup}>
                <div className={`${styles.device} ${styles[project.type]}`}>
                  <div className={styles.screen}>
                    {project.type === 'web' && (
                      <div className={styles.websitePreview}>
                        <div className={styles.browserBar}>
                          <div className={styles.browserButtons}>
                            <span className={styles.browserButton}></span>
                            <span className={styles.browserButton}></span>
                            <span className={styles.browserButton}></span>
                          </div>
                        </div>
                        <div className={styles.websiteContent}>
                          <div className={styles.contentLine}></div>
                          <div className={styles.contentLine}></div>
                          <div className={styles.contentLine}></div>
                        </div>
                      </div>
                    )}
                    {project.type === 'mobile' && (
                      <div className={styles.mobilePreview}>
                        <div className={styles.mobileNotch}></div>
                        <div className={styles.mobileContent}>
                          <div className={styles.mobileLine}></div>
                          <div className={styles.mobileLine}></div>
                          <div className={styles.mobileLine}></div>
                        </div>
                      </div>
                    )}
                    {project.type === 'both' && (
                      <div className={styles.bothPreview}>
                        <div className={styles.deviceGroup}>
                          <div className={styles.laptopPreview}></div>
                          <div className={styles.phonePreview}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Overlay with Description */}
              <div className={`${styles.projectOverlay} ${hoveredProject === project.id ? styles.visible : ''}`}>
                <div className={styles.overlayContent}>
                  <h4 className={styles.overlayTitle}>Project Overview</h4>
                  <p className={styles.overlayDescription}>{project.description}</p>
                  
                  <div className={styles.techStack}>
                    <h5 className={styles.techTitle}>Technologies Used</h5>
                    <div className={styles.techList}>
                      {project.tech.map((tech, index) => (
                        <span key={index} className={styles.techItem}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Footer with Links */}
              <div className={styles.projectFooter}>
                <div className={styles.projectLinks}>
                  <a 
                       href={project.github} 
                    className={styles.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className={styles.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;