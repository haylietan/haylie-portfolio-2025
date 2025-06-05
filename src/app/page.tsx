'use client';

// import Image from 'next/image';
// import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "./(pages)/_components/EmblaCarousel";
import styles from './Page.module.scss';

// const OPTIONS: EmblaOptionsType = { axis: 'y' }
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Page() {
  return (
    <div className={styles.backgroundWrapper}>
      {/* animated blobs */}
      <div className={`${styles.blob} ${styles.blob1}`}></div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>
      <div className={`${styles.blob} ${styles.blob3}`}></div>
      <div className={`${styles.blob} ${styles.blob4}`}></div>

      {/* blur filter overlay */}
      <div className={styles.blurOverlay}></div>

    {/* this centers it */}
      <div className="w-screen h-screen flex items-center justify-center">
        <main className="relative z-10 w-[85%] h-[85%] flex flex-row items-center justify-center p-6 text-center bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow-lg">
          <div className="w-1/5 h-full bg-white-100 flex items-center justify-center rounded-lg">SideBar</div>
          <div className="w-4/5 h-full flex flex-row bg-white-200 overflow-hidden">
            <EmblaCarousel/>
          </div>
        </main>
      </div>
    </div>
  );
}

