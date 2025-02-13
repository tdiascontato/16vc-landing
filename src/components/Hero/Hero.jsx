import styles from './Hero.module.css';

export const Hero = () => (
  <section className={styles.hero}>
    <div className="container">
      <h1 className={styles.title}>Hi there, we are <strong>16VC</strong></h1>
      <p className={styles.subtitle}>Yes, this really is our website 😎</p>
      
      <div className={styles.links}>
        {[
          ['LinkedIn', 'https://linkedin.com/company/16vc'],
          ['X (Twitter)', 'https://x.com/16vchq'],
          ['Instagram', 'https://www.instagram.com/16vchq/'],
          ['Crunchbase', 'https://www.crunchbase.com/organization/pinnacle-2982'],
          ['Events Calendar', 'https://lu.ma/16vc'],
          ['Substack', 'https://16vc.substack.com/'],
          ['Jobs', 'https://www.linkedin.com/company/16vc/jobs'],
        ].map(([text, href]) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        ))}
      </div>
    </div>
  </section>
);