import React, { useState, useEffect } from 'react';
import styles from '../Block.module.css';
import './index.css';

const Info = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className={`${styles.block} ${styles.blockD}`}>
      <div className="socialIcons">
        <div className="icon-wrap">
          <button onClick={() => window.open('https://twitter.com/mominnsiddiqui', '_blank')}>
            <span>
              <div className="icon-shadow"></div>
              <a href="https://twitter.com/mominnsiddiqui" 
                className="socialLink"
                target="_blank" rel="noopener noreferrer"
              >
                <img src="/twitter.svg" alt="Twitter" />
              </a>
            </span>
          </button>                  
        </div>
        
        
        <div className="icon-wrap">
          <button onClick={() => window.open('https://www.linkedin.com/in/mominsiddiqui/', '_blank')}>
            <span>
              <div className="icon-shadow"></div>
              <a href="https://www.linkedin.com/in/mominsiddiqui/" 
                className="socialLink"
                target="_blank" rel="noopener noreferrer"
              >
                <img src="/linkedin.svg" alt="LinkedIn" />
              </a>
            </span>
          </button>                  
        </div>

        <div className="icon-wrap">
          <button onClick={() => window.open('https://scholar.google.com/citations?user=JNiuopIAAAAJ&hl=en', '_blank')}>
            <span>
              <div className="icon-shadow"></div>
              <a href="https://scholar.google.com/citations?user=JNiuopIAAAAJ&hl=en" 
                className="socialLink"
                target="_blank" rel="noopener noreferrer"
              >
                <img src="/scholar.svg" alt="Scholar" />
              </a>
            </span>
          </button>                  
        </div>
        <div className="icon-wrap">
          <button onClick={() => window.open('/new_cv.pdf', '_blank')}>
            <span>
              <div className="icon-shadow"></div>
              <div className="socialLink cv-button">
                {windowWidth < 1300 ? 'CV' : 'OPEN CV'}
              </div>
            </span>
          </button>                  
        </div>
      </div>
    </div>
  );
};

export default Info; 