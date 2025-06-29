// src/app/(pages)/about.tsx

import Image from 'next/image';

import styles from './About.module.scss';

export default function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.bentoGrid}>
        <div className={`${styles.card} ${styles.cardTall}`}>
          <h2>👋 Hello!</h2>
          <p>
            I&#39;m a UC Davis CS student passionate about building things people actually use. Whether it&#39;s a hackathon platform or a research lab site, I love solving real problems with clean, thoughtful code.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardWide}`}>
          <h2>💻 Developer</h2>
          <p>
            I’ve built internal tools for one of California’s largest collegiate hackathons, developed 15+ research websites through the College of Biological Sciences, and collaborated with people from engineers to professors to bring ideas to life. I’m most at home when I’m writing clean, accessible code while bouncing ideas with a team. Currently, I’m looking for internship opportunities where I can keep learning, building, and helping real users.
          </p>
        </div>

        <div className={`${styles.card} ${styles.imageOnlyCard}`}>
          <Image
            src="/Images/Beach.png"
            alt="Collaboration visual"
            fill
            className={styles.cardImage}
          />
        </div>

        <div className={`${styles.card} ${styles.cardWide}`}>
          <h2>🌿 Outside of Code</h2>
          <ul>
            <li>🧋 I collect Hirono figurines and an unreasonable number of Jellycats.</li>
            <li>🍣 Favorite food: sushi and che ba mau.</li>
            <li>🎧 Most played artists lately: Malcolm Todd, Jimmy Brown, and Tecca.</li>
            <li>🍵 Current obsession: matcha everything—still on the hunt for a good matcha powder.</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h2>🎯 Mission</h2>
          <p>
            I want to keep building software that reflects care—for the users, for the systems behind it, and for the people I work with. 
          </p>
        </div>

        <div className={styles.card}>
          <h2>📬 Let’s Connect</h2>
          <p>
            I’m currently looking for 2025 internship opportunities where I can keep contributing to impactful projects and grow alongside an engineering team that values communication and craft.
          </p>
        </div>

      </div>
    </main>
  );
}
