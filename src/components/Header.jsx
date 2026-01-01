import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import { 
  FaBars, 
  FaTimes, 
  FaEnvelope, 
  FaHome, 
  FaUser, 
  FaCode, 
  FaCogs,
  FaPaperPlane 
} from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const contactRef = useRef(null);

  // Navigation items with icons and labels
  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'about', label: 'About', icon: <FaUser /> },
    { id: 'projects', label: 'Projects', icon: <FaCode /> },
    { id: 'skills', label: 'Skills', icon: <FaCogs /> },
    { id: 'contact', label: 'Contact', icon: <FaPaperPlane /> },
  ];

  // Handle scroll progress for timeline
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Update active section based on scroll
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close contact popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsContactOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle navigation click - scrolls to section
  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const contactLinks = [
    { label: 'Email', href: 'mailto:you@example.com', icon: '📧' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
    { label: 'GitHub', href: 'https://github.com', icon: '🐙' },
  ];

  return (
    <>
      <header className={styles.header}>
        {/* Clean Timeline Progress Bar - No markers, just progress */}
        <div className={styles.timelineContainer}>
          <div 
            className={styles.timelineProgress} 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Pinned Icons - Menu left, Contact right */}
        <div className={styles.pinnedIcons}>
          {/* Menu Button - Left Side - Toggles drawer */}
          <button 
            className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Contact Button - Right Side */}
          <button 
            className={`${styles.contactButton} ${isContactOpen ? styles.active : ''}`}
            onClick={() => setIsContactOpen(!isContactOpen)}
            aria-label="Contact options"
          >
            <FaEnvelope />
          </button>
        </div>
      </header>

      {/* Menu Drawer - Slides down from top */}
      <div className={`${styles.menuDrawer} ${isMenuOpen ? styles.open : ''}`}>
        {/* Drawer shows THE SAME HEADER */}
        <div className={styles.drawerHeader}>
          {/* Timeline in drawer */}
          <div className={styles.drawerTimelineContainer}>
            <div 
              className={styles.drawerTimelineProgress} 
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          
          {/* Menu and Contact buttons in drawer */}
          <div className={styles.drawerPinnedIcons}>
            <button 
              className={`${styles.drawerMenuButton} ${isMenuOpen ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            
            <button 
              className={`${styles.drawerContactButton} ${isContactOpen ? styles.active : ''}`}
              onClick={() => setIsContactOpen(!isContactOpen)}
              aria-label="Contact options"
            >
              <FaEnvelope />
            </button>
          </div>
        </div>

        {/* Navigation Icons Grid - Names only on hover */}
        <nav className={styles.navIconsGrid}>
          {navItems.map((item) => (
            <div 
              key={item.id}
              className={`${styles.navIconItem} ${activeSection === item.id ? styles.active : ''}`}
              onMouseEnter={() => setHoveredIcon(item.id)}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => handleNavClick(item.id)}
            >
              <div className={styles.iconContainer}>
                <div className={styles.navIcon}>
                  {item.icon}
                </div>
                {/* HOVER TOOLTIP - Only shows on hover */}
                <div className={`${styles.hoverTooltip} ${hoveredIcon === item.id ? styles.visible : ''}`}>
                  {item.label}
                </div>
              </div>
              {activeSection === item.id && (
                <div className={styles.activeIndicator}>
                  <div className={styles.activeDot} />
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Contact Popover */}
      <div 
        ref={contactRef}
        className={`${styles.contactPopover} ${isContactOpen ? styles.open : ''}`}
      >
        <div className={styles.popoverHeader}>
          <h4>Connect With Me</h4>
          <button 
            className={styles.popoverClose}
            onClick={() => setIsContactOpen(false)}
            aria-label="Close contact"
          >
            <FaTimes />
          </button>
        </div>
        
        <div className={styles.contactLinks}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.linkIcon}>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <input 
              type="email" 
              placeholder="Your email" 
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <textarea 
              placeholder="Your message..." 
              rows={3}
              className={styles.formTextarea}
              required
            />
          </div>
          <button type="submit" className={styles.formSubmit}>
            Send Message
          </button>
        </form>
      </div>

      {/* Overlay - ONLY for contact popover */}
      {isContactOpen && (
        <div 
          className={styles.overlay}
          onClick={() => {
            setIsContactOpen(false);
          }}
        />
      )}
    </>
  );
}

export default Header;