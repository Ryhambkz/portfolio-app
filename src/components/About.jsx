import { useEffect, useRef } from 'react';
import styles from './About.module.css';
import { FaSearch, FaLightbulb, FaCode, FaCheckCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const approachRefs = useRef([]);
  const workflowRefs = useRef([]);

  useEffect(() => {
    // Animate approach cards with 3D effect
    approachRefs.current.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: -100,
          rotationX: -30,
          scale: 0.8,
          transformOrigin: "center center"
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    // Animate workflow steps with alternating sides
    workflowRefs.current.forEach((step, index) => {
      const isLeft = index % 2 === 0;
      
      gsap.fromTo(step,
        {
          opacity: 0,
          x: isLeft ? -100 : 100,
          rotationY: isLeft ? -15 : 15,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            delay: index * 0.2
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Approach</h2>
          <p className={styles.subtitle}>
             How I transform ideas into functional and elegant digital solutions
          </p>
        </div>
        
        <div className={styles.approachContainer}>
          <div className={styles.approachGrid}>
            <div 
              ref={el => approachRefs.current[0] = el}
              className={`${styles.approachCard} ${styles.card1}`}
            >
              <div className={styles.card3D}>
                <div className={styles.cardFace}>
                  <div className={styles.cardIcon}>
                    <FaSearch />
                  </div>
                  <h3 className={styles.cardTitle}>Analyze & Research</h3>
                </div>
                <div className={styles.cardBack}>
                  <p className={styles.cardText}>
                  I start by analyzing requirements from Labs 2-7 and the PMS Hotel project. 
                    I identify objectives, challenges, and the best technical solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              ref={el => approachRefs.current[1] = el}
              className={`${styles.approachCard} ${styles.card2}`}
            >
              <div className={styles.card3D}>
                <div className={styles.cardFace}>
                  <div className={styles.cardIcon}>
                    <FaLightbulb />
                  </div>
                  <h3 className={styles.cardTitle}>Planning & Architecture</h3>
                </div>
                <div className={styles.cardBack}>
                  <p className={styles.cardText}>
                    I define a clear plan and project structure, designing scalable architectures  
                    and mapping out features for each lab and the PMS Hotel system.</p>
                </div>

              </div>
            </div>
            
            <div 
              ref={el => approachRefs.current[2] = el}
              className={`${styles.approachCard} ${styles.card3}`}
            >
              <div className={styles.card3D}>
                <div className={styles.cardFace}>
                  <div className={styles.cardIcon}>
                    <FaCode />
                  </div>
                  <h3 className={styles.cardTitle}>Development & Implementation</h3>
                </div>
                <div className={styles.cardBack}>
                  <p className={styles.cardText}>
                     I implement features using React, Node.js, Vite, and other modern technologies, 
                      writing clean, maintainable, and efficient code.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              ref={el => approachRefs.current[3] = el}
              className={`${styles.approachCard} ${styles.card4}`}
            >
              <div className={styles.card3D}>
                <div className={styles.cardFace}>
                  <div className={styles.cardIcon}>
                    <FaCheckCircle />
                  </div>
                  <h3 className={styles.cardTitle}>Testing & Quality Assurance</h3>
                </div>
                <div className={styles.cardBack}>
                  <p className={styles.cardText}>
                    Rigorous testing ensures reliability and performance. 
                    I deliver bug-free, polished products that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.workflow}>
          <h3 className={styles.workflowTitle}>My Development Workflow</h3>
          <div className={styles.workflowSteps}>
            <div 
              ref={el => workflowRefs.current[0] = el}
              className={`${styles.workflowStep} ${styles.left}`}
            >
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepInfo}>
                  <h4 className={styles.stepTitle}>Analyze & Plan</h4>
                  <p className={styles.stepDescription}>
                    Study project requirements (Labs 2-7, PMS Hotel), define objectives, and plan elegant, functional solutions. </p>
                </div>
              </div>
            </div>
            
            <div 
              ref={el => workflowRefs.current[1] = el}
              className={`${styles.workflowStep} ${styles.right}`}
            >
              <div className={styles.stepContent}>
                <div className={styles.stepInfo}>
                  <h4 className={styles.stepTitle}>Design & Prototype</h4>
                  <p className={styles.stepDescription}>
                     Create wireframes, mockups, and prototypes to visualize the project before development.
                  </p>
                </div>
                <div className={styles.stepNumber}>02</div>
              </div>
            </div>
            
            <div 
              ref={el => workflowRefs.current[2] = el}
              className={`${styles.workflowStep} ${styles.left}`}
            >
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepInfo}>
                  <h4 className={styles.stepTitle}>Develop & Iterate</h4>
                  <p className={styles.stepDescription}>
                    Build features iteratively (Labs 2-7, PMS Hotel), integrate feedback, and improve code quality continuously.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              ref={el => workflowRefs.current[3] = el}
              className={`${styles.workflowStep} ${styles.right}`}
            >
              <div className={styles.stepContent}>
                <div className={styles.stepInfo}>
                  <h4 className={styles.stepTitle}>Test & Refine</h4>
                  <p className={styles.stepDescription}>
                     Conduct unit testing (Jest), functional testing, and refine for performance and usability.
                  </p>
                </div>
                <div className={styles.stepNumber}>04</div>
              </div>
            </div>
            
            <div 
              ref={el => workflowRefs.current[4] = el}
              className={`${styles.workflowStep} ${styles.left}`}
            >
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepInfo}>
                  <h4 className={styles.stepTitle}>Deploy & Suppor</h4>
                  <p className={styles.stepDescription}>
                     Deploy projects live, provide maintenance, and ensure smooth operation for end-users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.philosophy}>
          <div className={styles.philosophyContent}>
            <h3 className={styles.philosophyTitle}>My Development Philosophy</h3>
            <p className={styles.philosophyText}>
              I focus on building solutions that are not only functional but also elegant and intuitive.
               Every line of code has a purpose, every design choice enhances the user experience, and every feature delivers real value.
            </p>
            <p className={styles.philosophyText}>
              I’m passionate about clean code, thoughtful design, and continuous learning. As technology evolves rapidly, 
              I stay ahead by exploring new tools and methodologies that improve results and efficiency.
            </p>
          </div>
          <div className={styles.philosophyImage}>
            <div className={styles.animatedShape}>
              <div className={styles.shapeInner}>
                <FaCode />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;