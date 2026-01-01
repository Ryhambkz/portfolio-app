import styles from './Debug.module.css';
import { FaCheckCircle, FaExclamationTriangle, FaSync, FaCss3, FaReact, FaBug } from 'react-icons/fa';

function Debug() {
  const checkCSS = () => {
    // Simple CSS check
    const testDiv = document.createElement('div');
    testDiv.style.cssText = 'width:100px;height:100px;background:linear-gradient(135deg,#667eea,#764ba2);';
    document.body.appendChild(testDiv);
    const computedStyle = window.getComputedStyle(testDiv);
    const hasGradient = computedStyle.backgroundImage.includes('gradient');
    document.body.removeChild(testDiv);
    return hasGradient;
  };

  const checkFlexbox = () => {
    const testDiv = document.createElement('div');
    testDiv.style.display = 'flex';
    document.body.appendChild(testDiv);
    const isFlex = window.getComputedStyle(testDiv).display === 'flex';
    document.body.removeChild(testDiv);
    return isFlex;
  };

  return (
    <div className={styles.debugContainer}>
      <div className={styles.debugTestBox}>
        <FaBug style={{ fontSize: '3rem', color: '#667eea', marginBottom: '20px' }} />
        
        <h1 className={styles.debugTitle}>CSS Debug Mode</h1>
        <p className={styles.debugSubtitle}>Testing CSS functionality...</p>
        
        <div className={styles.statusMessage}>
          <span className={`${styles.statusIndicator} ${checkCSS() ? styles.good : styles.bad}`}></span>
          CSS Gradient Support: {checkCSS() ? 'Working' : 'Not Working'}
        </div>
        
        <div className={styles.statusMessage}>
          <span className={`${styles.statusIndicator} ${checkFlexbox() ? styles.good : styles.bad}`}></span>
          Flexbox Support: {checkFlexbox() ? 'Working' : 'Not Working'}
        </div>
        
        <h2 className={styles.debugTestTitle}>Color Test</h2>
        <div className={styles.colorTestContainer}>
          <div className={`${styles.colorBox} ${styles.purple1}`}>#667eea</div>
          <div className={`${styles.colorBox} ${styles.purple2}`}>#764ba2</div>
          <div className={`${styles.colorBox} ${styles.black}`}>#333333</div>
          <div className={`${styles.colorBox} ${styles.white}`}>#f8f9fa</div>
        </div>
        
        <p className={styles.debugText}>
          If you can see colors above and this text is black on white background, 
          then CSS is loading correctly.
        </p>
        
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <h3><FaCss3 style={{ marginRight: '8px', color: '#667eea' }} /> CSS Modules</h3>
            <p>Check if CSS modules are imported correctly with `import styles from './file.module.css'`</p>
          </div>
          
          <div className={styles.gridItem}>
            <h3><FaReact style={{ marginRight: '8px', color: '#667eea' }} /> Vite Config</h3>
            <p>Ensure vite.config.js has proper CSS configuration for modules</p>
          </div>
        </div>
        
        <button 
          className={styles.debugButton} 
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          <FaSync /> Clear Cache & Reload
        </button>
        
        <button 
          className={styles.debugButton}
          style={{ marginLeft: '10px', background: '#48bb78' }}
          onClick={() => window.location.href = '/'}
        >
          <FaCheckCircle /> Back to Portfolio
        </button>
        
        <div style={{ marginTop: '30px', fontSize: '0.9rem', color: '#718096' }}>
          <FaExclamationTriangle style={{ marginRight: '5px' }} />
          If colors don't show, check browser console (F12) for CSS errors
        </div>
      </div>
    </div>
  );
}

export default Debug;