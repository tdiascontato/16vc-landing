import styles from './WhoWeAre.module.css';

export const WhoWeAre = () => {
  return (
    <div className={styles.whoWeAre}>
      <p className={styles.intro}>
        At <strong>16VC</strong>, we back <strong>bold founders building the future of AI & Tech</strong>.
      </p>
      
      <p className={styles.description}>
        We are a <strong>new venture fund</strong> actively deploying <strong>$20M AUM</strong> to invest in <strong>early-stage startups</strong> pushing the boundaries of innovation.
      </p>

      <div className={styles.ourStory}>
        <h3 className={styles.subtitle}>Our Story</h3>
        <ul className={styles.timeline}>
          <li>
            <strong>2022</strong> → Started as an angel group, investing in early-stage startups.
          </li>
          <li>
            <strong>2024</strong> → Transitioned into a <strong>Venture Capital firm</strong> with a $20M fund.
          </li>
          <li>
            <strong>2025</strong> → Actively deploying capital into <strong>our first 10 investments</strong>.
          </li>
        </ul>
        
        <div className={styles.callout}>
          🚀 <strong>We haven't invested yet—but we're ready.</strong> The right startups will be backed in 2025.
        </div>
      </div>
    </div>
  );
};