import React from 'react';
import BlockB from './BlockB';
import MainContent from './MainContent';
import Profile from './Profile';
import Info from './Info';
import News from './News';
import Header from './Header';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.row}>
        <Header />
      </div>
      <div className={styles.row}>
        <div className={styles.column}>
          <Profile />
          <Info />
          <News />
        </div>
        <div className={styles.column}>
          <MainContent />   
        </div>
      </div>
    </div>
  );
};

export default Layout; 