import styles from './Section.module.css';

export const Section = ({ title, children }) => (
  <section className={styles.section}>
    <div className="container">
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </div>
  </section>
);