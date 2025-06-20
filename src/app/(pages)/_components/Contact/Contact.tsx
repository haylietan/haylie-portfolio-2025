'use client';
import styles from './Contact.module.scss';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Left Section */}
        <div className="space-y-8">
          <h1 className={styles.heading}>Get in touch.</h1>

          {/* Social Icons */}
          <div className={styles.iconGroup}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.icon} />
            </a>
            <a href="mailto:you@example.com">
              <FaEnvelope className={styles.icon} />
            </a>
          </div>

          {/* Email + Phone */}
          <div className={styles.contactInfo}>
            <p className="text-lg">📧 haylie.tan.college@gmail.com</p>
            <p className="text-lg">📞 (510)358-1578</p>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightCard}>
          <p className="text-white/60">Let’s work together to build something great.</p>
          <div className={styles.floatingButton}>
            <a href="/resume.pdf" download>Resume →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
