import styles from './Fellowship.module.css';

export const Fellowship = () => {
  return (
    <div className={styles.fellowship}>
      <p className={styles.intro}>
        A <strong>high-intensity founder residency program</strong> designed to take startups from <strong>idea to investable seed-stage business</strong>.
      </p>

      <div className={styles.benefits}>
        <h3 className={styles.subtitle}>What You Get:</h3>
        
        <div className={styles.benefitItem}>
          <span>🏡</span>
          <p><strong>$5,000 stipend</strong> for 3 months.</p>
        </div>
        <div className={styles.callout}>
          <span>🎯</span>
          <p><strong>Up to $15,000</strong> in equity-free funding to focus on building.</p>
        </div>
        <div className={styles.callout}>
          <span>🌍</span>
          <p>Work from<strong> global residency locations</strong> with top founders and operators.</p>
        </div>    
        <div className={styles.callout}>
          <span>🚀</span>
          <p><strong>Fast-track to our Accelerator or direct investment.</strong></p>
        </div>
      </div>
    </div>
  );
};