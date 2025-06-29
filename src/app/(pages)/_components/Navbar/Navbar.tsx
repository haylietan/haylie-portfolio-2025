'use client';

import { useState, useEffect } from 'react';
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

  // Optional: lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.inner}>
          <div className={styles.topSection}>
            <div className={styles.logo} />

            <div className={styles.nameBlock}>
              <div className={styles.name}>Haylie Tan</div>
              <div className={styles.role}>Full-Stack Developer</div>
            </div>

            <a href="/Haylie_Tan_Resume.pdf" download className={styles.resumeBtn}>
              <span>Download Resume →</span>
            </a>
          </div>

          <div className={styles.navSection}>
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleScroll(index)}
                className={`${styles.navBtn} ${index === selectedIndex ? styles.active : ''}`}
              >
                {slide.title}
              </button>
            ))}
          </div>

          <div className={styles.footer}>
            <p>Made with 🤍 and matcha 👩🏻‍💻.</p>
            <p>© {new Date().getFullYear()}</p>
          </div>
        </div>
      </aside>

      {/* Mobile Navbar */}
      <nav className={styles.mobileNav}>
        <div className={styles.topBar}>
          <div className={styles.logoText}>Haylie Tan</div>

          <button
            className={styles.hamburger}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div className={styles.bar} />
            <div className={styles.bar} />
            <div className={styles.bar} />
          </button>
        </div>

        {isOpen && (
          <div className={styles.dropdown}>
            {slides.map((slide, index) => (
              <button
                key={index}
                className={`${styles.dropdownItem} ${selectedIndex === index ? styles.active : ''}`}
                onClick={() => handleScroll(index)}
              >
                {slide.title}
              </button>
            ))}

            <a href="/Haylie_Tan_Resume.pdf" download className={styles.resumeLink}>
              Download Resume →
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
