import React from 'react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          Copyright © 2025 16VC Limited (Company No. 16224768) is a company registered in England and Wales.
        </p>
      </div>
    </footer>
  );
}
