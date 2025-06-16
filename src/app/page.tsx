'use client';

import { useState } from 'react';
import EmblaCarousel, { SLIDES } from './(pages)/_components/EmblaCarousel';
import styles from './Page.module.scss';
import type { EmblaCarouselType } from 'embla-carousel';


export default function Page() {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (index: number) => {
    if (embla) embla.scrollTo(index);
  };

  return (
    <div className={styles.backgroundWrapper}>
      {/* animated blobs */}
      <div className={`${styles.blob} ${styles.blob1}`}></div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>
      <div className={`${styles.blob} ${styles.blob3}`}></div>
      <div className={`${styles.blob} ${styles.blob4}`}></div>

      {/* blur filter overlay */}
      <div className={styles.blurOverlay}></div>

      {/* this external div centers it */}
      <div className="w-screen h-screen flex items-center justify-center">
        <main className="relative z-10 w-[85%] h-[85%] flex flex-row items-center justify-center p-6 text-center bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow-lg">

          {/* Sidebar with nav */}
          <div className="w-1/5 h-full bg-white/20 backdrop-blur-md flex flex-col items-center justify-between p-6 rounded-l-xl border-3">
            <div className="h-screen pt-16 pb-16 px-10 m-10 flex flex-col justify-between border-4 border-gray-400 rounded-xl">
              <p className="text-xl font-semibold">[insert logo here]</p>
              <div className="space-y-2">
                {SLIDES.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`px-3 py-1 w-full text-sm rounded-full border-2 transition-colors duration-200 ${
                      index === selectedIndex
                        ? 'bg-gray-900 text-white border-gray-900'
                        : 'bg-transparent text-gray-800 border-gray-400'
                    }`}
                  >
                    {slide.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main carousel area */}
          <div className="w-4/5 h-full flex items-center justify-center rounded-r-xl">
            <EmblaCarousel
              onInit={(api) => setEmbla(api)}
              onSelect={(index) => setSelectedIndex(index)}
            />
          </div>

        </main>
      </div>
    </div>
  );
}
