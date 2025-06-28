import styles from './Hero.module.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.introWrapper}>
    <div className={styles.textBlock}>
      <p className={styles.midTextLeft}>Hi! My name is</p>
      <h1 className={styles.name}>Haylie Tan</h1>
      <p className={styles.midTextRight}>
        and I’m a
      </p>
      <p><span className={styles.role}>Full-Stack Developer.</span></p>
    </div>
    <div className={styles.avatarBadge}>
      <Image src="/avatar.jpg" alt="avatar" width={40} height={40} />
    </div>
  </div>

  );
}