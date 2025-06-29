import styles from './Hero.module.scss';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const rotatingWords = [
  'full-stack developer',
  'student',
  'matcha lover',
  'challenge seeker',
  'jellycat collector',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <div className={styles.avatarBadge}>
          <Image
            className={styles.star1}
            src="/Images/Star.svg"
            alt="White Star"
            width={200}
            height={200}
          />
          <Image
            src="/Images/HaylieTanCutOut.png"
            alt="Haylie Tan"
            width={240}
            height={340}
          />
          <Image
            className={styles.star2}
            src="/Images/Star.svg"
            alt="White Star"
            width={100}
            height={100}
          />
        </div>
        {/* <div className={styles.textRectangle}>
          <p>
            I’m a collaborative full-stack developer passionate about making
            technical things human-friendly. I thrive in fast-paced teams where
            I can take ownership, debug under pressure, and build things people
            actually use.
          </p>
        </div> */}
      </div>

      <div className={styles.introWrapper}>
        <div className={styles.textBlock}>
          <p className={styles.midTextLeft}>Hi! My name is</p>
          <h1 className={styles.name}>Haylie Tan</h1>
          <p className={styles.midTextRight}>and I’m a</p>
          
          {/* Scroll Animation */}
          <div className={styles.scrollContainer}>
            <div
              className={styles.scrollInner}
              style={{ transform: `translateY(-${currentIndex * 2.5}rem)` }}
            >
              {rotatingWords.map((word, index) => (
                <div key={index} className={styles.word}>
                  {word}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.iconGroup}>
            <a
              href="https://github.com/haylietan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={styles.icon} />
            </a>
            <a
              href="https://linkedin.com/in/haylietan27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={styles.icon} />
            </a>
            <a href="mailto:haylie.tan.college@gmail.com">
              <FaEnvelope className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={styles.skillsBox}>
            <ul>
              <li><strong>Languages:</strong> TypeScript, JavaScript, HTML/CSS, Python, C, C++, Java, R, MATLAB</li>
              <li><strong>Frameworks:</strong> React, Next.js, Tailwind CSS, Node.js</li>
              <li><strong>Tools:</strong> Git, SiteFarm CMS, Figma, Adobe After Effects, Google Suite</li>
              <li><strong>Other:</strong> Accessibility, Debugging, Cross-functional Collaboration</li>
            </ul>
          </div>
      </div>
    </div>
  );
}
