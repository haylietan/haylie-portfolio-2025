'use client';
import styles from './Contact.module.scss';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Left Section */}
        <div className="space-y-8">
          <h1 className={styles.heading}>Get in touch.</h1>

          {/* Social Icons */}
          <div className={styles.iconGroup}>
            <a href="https://github.com/haylietan" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon} />
            </a>
            <a href="https://linkedin.com/in/haylietan27" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
            {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.icon} />
            </a> */}
            <a href="mailto:haylie.tan.college@gmail.com">
              <FaEnvelope className={styles.icon} />
            </a>
          </div>

          {/* Email + Phone */}
          <div className={styles.contactInfo}>
            <p>If you&#39;re building something impactful, I&#39;d love to be part of it.</p>
            <br/>
            <p className="text-lg">📧 haylie.tan.college@gmail.com</p>
            <p className="text-lg">📞 (510)358-1578</p>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightCard}>
          {/* <p>Let’s work together to build something great.</p> */}
          <div className={styles.floatingButton}>
            <a href="/Haylie_Tan_Resume.pdf" download>Resume →</a>
          </div>
        </div>
      </div>
    </div>
  );
}
