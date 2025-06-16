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
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
      <div className={`${styles.blob} ${styles.blob4}`} />

      {/* blur filter overlay */}
      <div className={styles.blurOverlay} />

      {/* center the app */}
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="relative z-10 w-[85%] h-[90%] flex flex-row items-center justify-center p-6 text-center bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow-lg">

          {/* Sidebar */}
          <div className="w-1/5 h-full bg-white/10 backdrop-blur-xl border-r border-white/20 flex flex-col items-center py-10 px-6">
            <div className="w-full h-full flex flex-col">

              {/* Top section: logo, name, resume */}
              <div className="flex flex-col items-center gap-4 pt-10">
                {/* Logo */}
                <div className="w-20 h-20 bg-white/20 rounded-xl" />

                {/* Name + role */}
                <div className="flex flex-col gap-0 items-center text-white">
                  <div className="text-base font-semibold">Haylie Tan</div>
                  <div className="text-sm text-white/80">Full-Stack Developer</div>
                </div>

                {/* Resume button */}
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center w-48 px-4 py-2 bg-white/20 text-white rounded-full border border-white/30 hover:bg-white/30 transition-all"
                >
                  <span className="text-sm font-medium">Download Resume →</span>
                </a>
              </div>

              {/* Nav buttons */}
              <div className="flex-grow flex flex-col gap-4 items-center justify-center mt-6">
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
              <div className="text-xs text-white/40 text-center pb-2">
                © {new Date().getFullYear()}
              </div>
            </div>
          </div>

          {/* Main carousel */}
          <div className="w-4/5 h-full flex items-center justify-center rounded-r-xl">
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
