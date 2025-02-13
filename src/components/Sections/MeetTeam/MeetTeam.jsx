import styles from './MeetTeam.module.css';

export function MeetTeam() {
  return (
    <section className={styles.meetTeam}>
      <ul className={styles.teamList}>
        <li className={styles.teamCard}>
          <span className={styles.avatar}>👤</span>
          <div className={styles.teamDetails}>
            <a
              href="https://www.linkedin.com/in/sridhar-a-0723312b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sridhar A
            </a>
            <p>Founder & General Partner</p>
          </div>
        </li>
        <li className={styles.teamCard}>
          <span className={styles.avatar}>👤</span>
          <div className={styles.teamDetails}>
            <a
              href="https://www.linkedin.com/in/jeremy-kennelly-31b65625/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jeremy Kennelly
            </a>
            <p>Legal Counsel</p>
          </div>
        </li>
        <li className={styles.teamCard}>
          <span className={styles.avatar}>👤</span>
          <div className={styles.teamDetails}>
            <a
              href="https://www.linkedin.com/in/gparfenyuk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              George Parfenyuk
            </a>
            <p>Venture Partner</p>
          </div>
        </li>
        <li className={styles.teamCard}>
          <span className={styles.avatar}>👤</span>
          <div className={styles.teamDetails}>
            <a
              href="https://www.linkedin.com/in/balaji-vasudevan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Balaji Vasudevan
            </a>
            <p>Venture Partner</p>
          </div>
        </li>
      </ul>
      <p className={styles.callToAction}>
        🔥 <strong>Are you building the next AI or Tech unicorn?</strong>{' '}
        <a
          href="https://intro.co/sridhara"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let’s talk
        </a>.
      </p>
    </section>
  );
}
