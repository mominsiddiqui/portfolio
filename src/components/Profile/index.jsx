import React from 'react';
import styles from '../Block.module.css';
import './index.css';

const Profile = () => {
  return (
    <div className={`${styles.block}`} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1em'}}>
      <img 
        src="/profile.jpeg" 
        alt="Person lying in a field of wildflowers" 
        className="image-container"
      />
    </div>
  );
};

export default Profile; 