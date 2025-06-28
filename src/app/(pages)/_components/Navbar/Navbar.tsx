'use client';

import { useState } from 'react';
import styles from './Navbar.module.scss';

type NavBarProps = {
  slides: { title: string }[];
  selectedIndex: number;
  scrollTo: (index: number) => void;
};

export default function Navbar({ slides, selectedIndex, scrollTo }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (index: number) => {
    scrollTo(index);
    setIsOpen(false); // Close menu after selecting on mobile
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.inner}>
        {/* Top section */}
        <div className={styles.topSection}>
          <div className={styles.logo}/>

          <div className={styles.nameBlock}>
            <div className={styles.name}>Haylie Tan</div>
            <div className={styles.role}>Full-Stack Developer</div>
          </div>

          {/* Hamburger Button (visible on small screens) */}
          <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </button>

          {/* Resume Button (hidden on mobile via CSS) */}
          <a href="/Haylie_Tan_Resume.pdf" download className={styles.resumeBtn}>
            <span>Download Resume →</span>
          </a>
        </div>

        {/* Nav buttons (show/hide on mobile via isOpen) */}
        <div className={`${styles.navSection} ${isOpen ? styles.open : ''}`}>
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleScroll(index)}
              className={`${styles.navBtn} ${
                index === selectedIndex ? styles.active : ''
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>

        {/* Footer (optional hide on mobile) */}
        <div className={styles.footer}>
          <p>Made with 🤍 and matcha 👩🏻‍💻.</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </aside>
  );
}
