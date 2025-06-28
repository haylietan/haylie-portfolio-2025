import styles from './Hero.module.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <div className={styles.avatarBadge}>
          <Image src="/Images/Ocean.jpg" alt="Ocean" width={240} height={340} />
        </div>
      </div>

      <div className={styles.introWrapper}>
        <div className={styles.textBlock}>
          <p className={styles.midTextLeft}>Hi! My name is</p>
          <h1 className={styles.name}>Haylie Tan</h1>
          <p className={styles.midTextRight}>
            and I’m a
          </p>
          <p className={styles.role}>Full-Stack Developer.</p>
        </div>

        <div className={styles.textRectangle}>
          <p>I’m a collaborative full-stack developer passionate about making technical things human-friendly. I thrive in fast-paced teams where I can take ownership, debug under pressure, and build things people actually use.</p>
        </div>
      </div>
    </div>



  );
}