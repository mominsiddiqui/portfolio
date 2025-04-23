import React from 'react';
import styles from './Block.module.css';

const BlockA = () => {
  return (
    <div className={`${styles.block} ${styles.blockA}`}>
      A
    </div>
  );
};

export default BlockA; 