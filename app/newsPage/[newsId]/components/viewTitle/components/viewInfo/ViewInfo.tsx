import React from 'react';
import styles from './styles.module.css';

const ViewInfo = ({ oneNewsInfo }: { oneNewsInfo: OneNews }) => {
  return (
    <div className={styles.viewInfo}>
      <div className={styles.viewTitle}>
        <h1>{oneNewsInfo.title}</h1>
      </div>
    </div>
  );
};

export default ViewInfo;
