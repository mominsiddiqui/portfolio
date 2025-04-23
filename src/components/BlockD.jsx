import React from 'react';
import styles from './Block.module.css';

const BlockD = () => {
  return (
    <div className={`${styles.block} ${styles.blockD}`}>
      <div className={styles.socialIcons} style={{ 
        display: 'grid', 
        gridTemplateColumns: '50px 50px 1fr',
        alignItems: 'center', 
        width: '100%'
      }}>
        {/* Column 1: Twitter icon */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://twitter.com/yourusername" 
          style={{ 
            display: 'flex',              // Make it a flex container
            lineHeight: 0,                // Remove line height
            fontSize: 0,                  // Remove font size influence
            height: '30px'                // Explicitly set height
          }}
          target="_blank" rel="noopener noreferrer">
            <img src="/twitter.svg" alt="Twitter" style={{ width: '30px', height: '30px' }}/>
          </a>
        </div>
        
        {/* Column 2: LinkedIn icon */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="https://linkedin.com/in/yourusername" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{ 
               display: 'flex',              // Make it a flex container
               lineHeight: 0,                // Remove line height
               fontSize: 0,                  // Remove font size influence
               height: '30px'                // Explicitly set height
             }}>
            <img src="/linkedin.svg" alt="LinkedIn" style={{ width: '30px', height: '30px' }}/>
          </a>
        </div>
        
        {/* Column 3: Green CV button that takes remaining space */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ 
            backgroundColor: 'green', 
            borderRadius: '8px', 
            width: '100%',
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            height: '30px'
          }}>
            <a href="/new_cv.pdf" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{
                 display: 'flex',
                 alignItems: 'center',
                 textDecoration: 'none',
                 color: 'white',
                 width: '100%',
                 justifyContent: 'center'
               }}>
                <span style={{ textAlign: 'center' }}>open cv</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockD; 