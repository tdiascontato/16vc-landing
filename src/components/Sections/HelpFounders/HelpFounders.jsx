import styles from './HelpFounders.module.css';

export const HelpFounders = () => {
  return (
    <div className={styles.helpFounders}>
      <p className={styles.intro}>
        We partner with <strong>visionary founders</strong> working on <strong>big ideas in emerging tech</strong>.
      </p>
      
      <p className={styles.description}>
        Our support comes in <strong>four ways</strong>: <strong>Capital, Studio, Fellowship, and Accelerator.</strong>
      </p>

      <div className={styles.tableWrapper}>
        <div className={styles.tableRow}>
          <div className={styles.tableHeader}>What We Offer</div>
          <div className={styles.tableHeader}>How We Help</div>
          <div className={styles.tableHeader}>Your Situation</div>
        </div>
        
        {[
          {
            offer: 'Capital',
            help: 'We invest in high-growth enterprise software companies.',
            situation: '🔹 Need funding & have traction?'
          },
          {
            offer: 'Studio',
            help: 'We co-build with founders, providing strategic and technical support.',
            situation: '🔹 Have an idea but need a team & execution?'
          },
          {
            offer: 'Fellowship',
            help: 'We provide mentorship & guidance for early-stage founders.',
            situation: '🔹 Idea-stage, need mentorship?'
          },
          {
            offer: 'Accelerator',
            help: 'We help early products scale quickly with funding and growth support.',
            situation: '🔹 Early product, need rapid growth?'
          },
        ].map((item, index) => (
          <div key={index} className={styles.tableRow}>
            <div className={styles.tableCell}>
              <strong>{item.offer}</strong>
            </div>
            <div className={styles.tableCell}>{item.help}</div>
            <div className={styles.tableCell}>{item.situation}</div>
          </div>
        ))}
      </div>

      <div className={styles.callout}>
        We don't just invest—we <strong>work alongside founders to scale, iterate, and win.</strong>
      </div>
    </div>
  );
};