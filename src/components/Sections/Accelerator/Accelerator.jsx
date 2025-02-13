import styles from './Accelerator.module.css';

export const Accelerator = () => {
  return (
    <div className={styles.accelerator}>
      <p className={styles.intro}>
        A premier accelerator designed to <strong>help startups secure funding, gain traction, and scale fast</strong>.
      </p>

      <div className={styles.investment}>
        <h3 className={styles.subtitle}>Investment Structure:</h3>
        
        <div className={styles.investmentItem}>
          <span>💰</span>
          <p><strong>$150K for 7% <strong>SAFE</strong> investment</strong> in your startup.</p>
        </div>
        <div className={styles.investmentItem}>
          <span>📈</span>
          <p><strong>$350K in follow-on funding</strong> in <strong>Year 2</strong> for growth.</p>
        </div>
        <div className={styles.investmentItem}>
          <span>🎁</span>
          <p><strong>$500K+</strong> in perks & credits from Microsoft, OpenAI, Notion, Stripe, and more.</p>
        </div>
        <div className={styles.investmentItem}>
          <span>🛠</span>
          <p><strong>Exclusive mentorship & network access</strong> from top investors and operators.</p>
        </div>
      </div>
    </div>
  );
};