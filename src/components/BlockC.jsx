import React from 'react';
import styles from './Block.module.css';

const BlockC = () => {
  return (
    <div className={`${styles.block} ${styles.blockC}`}>
      <img 
        src="/profile.jpeg" 
        alt="Person lying in a field of wildflowers" 
        className={styles.blockImage}
      />
    </div>
  );
};

export default BlockC; 