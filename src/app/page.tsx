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
            <div className="w-1/5 h-full bg-white/10 backdrop-blur-xl border-r border-white/20 flex flex-col items-center py-10 px-6">
              {/* Inner container */}
              <div className="w-full flex flex-col justify-between h-full">
                {/* Logo section */}
                <div className="text-center mb-8">
                  <p className="text-2xl font-bold text-white tracking-wide">[insert logo here]</p>
                </div>

                {/* nav bar */}
                <div className="flex flex-col gap-4 items-center">
                  {SLIDES.map((slide, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={`h-15 w-50 flex items-center justify-center text-sm rounded-xl transition-all duration-200 border backdrop-blur-md ${
                        index === selectedIndex
                          ? 'bg-white/80 text-black border-white shadow-xl'
                          : 'bg-black/10 text-white border-white/30 hover:bg-white/20 hover:text-gray-200 hover:border-white/50'
                      }`}
                    >
                      {slide.title}
                    </button>
                  ))}
                </div>

            
                {/* Optional footer space if needed */}
                <div className="text-xs text-black/40 mt-8 text-center">
                  © {new Date().getFullYear()}
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
