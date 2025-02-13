import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <img 
        src="/logo.png" 
        alt="16VC Logo" 
        className={styles.logo} 
        width="70" 
        height="70"
      />
    </div>
  </header>
);