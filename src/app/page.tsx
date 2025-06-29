'use client';

import { useState } from 'react';
import EmblaCarousel, { SLIDES } from './(pages)/_components/EmblaCarousel';
import styles from './Page.module.scss';
import type { EmblaCarouselType } from 'embla-carousel';
import Navbar from './(pages)/_components/Navbar/Navbar';

export default function Page() {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (index: number) => {
    if (embla) embla.scrollTo(index);
  };

  return (
    <div className={styles.backgroundWrapper}>
      {/* animated blobs */}
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
      <div className={`${styles.blob} ${styles.blob4}`} />

      {/* blur filter overlay */}
      <div className={styles.blurOverlay} />

      {/* center the app */}
      <div className="w-screen min-h-screen pt-[4.5rem] md:pt-0 flex items-center justify-center overflow-auto">
        <div className="relative z-10 w-screen max-w-[1440px] h-auto md:h-[90%] flex flex-col md:flex-row items-stretch justify-center p-4 md:p-6 text-center bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow-lg overflow-hidden">

          {/* Responsive Navbar */}
          <Navbar
            slides={SLIDES}
            selectedIndex={selectedIndex}
            scrollTo={scrollTo}
          />

          {/* Main carousel */}
          <div className="w-full md:w-4/5 h-full flex items-center justify-center rounded-none md:rounded-r-xl">
            <EmblaCarousel
              onInit={(api) => setEmbla(api)}
              onSelect={(index) => setSelectedIndex(index)}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
