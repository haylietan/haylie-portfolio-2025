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
              
              {/* Top section: logo, pills, resume */}
              <div className="flex flex-col items-center gap-6 mt-10">
                {/* Logo placeholder */}
                <div className="w-20 h-20 bg-white/20 rounded-xl" />

                {/* Pills */}
                <div className="flex flex-col gap-0 items-center">
                  <div className="w-32 h-6"> Haylie Tan </div>
                  <div className="w-50 h-6"> Full-Stack Developer </div>
                </div>

                {/* Download Resume Button */}
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center w-48 px-4 py-2 bg-white/20 text-white rounded-full border border-white/30 hover:bg-white/30 transition-all"
                >
                  <span className="text-sm font-medium">Download Resume →</span>
                </a>
              </div>

              {/* Navigation buttons */}
              <div className="flex flex-col gap-4 items-center mt-10">
                {SLIDES.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`h-14 w-48 flex items-center justify-center text-sm font-medium rounded-xl transition-all duration-200 border backdrop-blur-md ${
                      index === selectedIndex
                        ? 'bg-white/80 text-black border-white shadow-xl'
                        : 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-gray-200 hover:border-white/50'
                    }`}
                  >
                    {slide.title}
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="text-xs text-white/40 mt-8 text-center">
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
