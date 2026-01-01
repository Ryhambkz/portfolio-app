import { useState } from 'react';
import styles from './Skills.module.css';
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs,
  FaGitAlt, FaGithub, FaFigma, FaAws, FaDatabase
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb,
  SiPostgresql, SiGraphql, SiDocker, SiVercel, SiFirebase
} from 'react-icons/si';

function Skills() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Frontend",
      icon: <FaReact />,
      skills: [
        {
          icon: <FaReact />,
          name: "React",
          description: "Building interactive UIs with hooks and components"
        },
        {
          icon: <SiNextdotjs />,
          name: "Next.js",
          description: "Full-stack React framework with SSR"
        },
        {
          icon: <SiTypescript />,
          name: "TypeScript",
          description: "Type-safe JavaScript for better code quality"
        },
        {
          icon: <FaJs />,
          name: "JavaScript",
          description: "Modern ES6+ features and patterns"
        },
        {
          icon: <FaHtml5 />,
          name: "HTML5",
          description: "Semantic markup and accessibility"
        },
        {
          icon: <FaCss3Alt />,
          name: "CSS3",
          description: "Modern styling with Flexbox and Grid"
        }
        
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      skills: [
        {
          icon: <FaNodeJs />,
          name: "Node.js",
          description: "JavaScript runtime for server-side"
        },
        {
          icon: <SiMongodb />,
          name: "MongoDB",
          description: "NoSQL database for modern apps"
        },
        {
          icon: <SiPostgresql />,
          name: "PostgreSQL",
          description: "Relational database management"
        },
        {
          icon: <SiGraphql />,
          name: "GraphQL",
          description: "API query language for precise data"
        },
        {
          icon: <SiFirebase />,
          name: "Firebase",
          description: "Backend-as-a-service platform"
        }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <FaGitAlt />,
      skills: [
        {
          icon: <FaGitAlt />,
          name: "Git",
          description: "Version control system"
        },
        {
          icon: <FaGithub />,
          name: "GitHub",
          description: "Code hosting and collaboration"
        },
        {
          icon: <SiDocker />,
          name: "Docker",
          description: "Containerization platform"
        },
        {
          icon: <FaAws />,
          name: "AWS",
          description: "Cloud services and infrastructure"
        },
        {
          icon: <SiVercel />,
          name: "Vercel",
          description: "Frontend cloud platform"
        },
        {
          icon: <FaFigma />,
          name: "Figma",
          description: "Design and prototyping tool"
        }
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Technical Stack</h2>
          <p className={styles.subtitle}>
            Tools and technologies I use to bring ideas to life
          </p>
        </div>

        {/* Navigation Line */}
        <div className={styles.navigation}>
          {sections.map((section, index) => (
            <div key={index} className={styles.navItem}>
              <button
                className={`${styles.navButton} ${activeSection === index ? styles.active : ''}`}
                onClick={() => setActiveSection(index)}
              >
                <span className={styles.navIcon}>{section.icon}</span>
                <span className={styles.navText}>{section.title}</span>
              </button>
              {index < sections.length - 1 && (
                <div className={styles.connector} />
              )}
            </div>
          ))}
        </div>

        {/* Skills Display */}
        <div className={styles.skillsDisplay}>
          <div className={styles.skillsGrid}>
            {sections[activeSection].skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <div className={styles.skillContent}>
                  <h4 className={styles.skillName}>{skill.name}</h4>
                  <p className={styles.skillDescription}>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;