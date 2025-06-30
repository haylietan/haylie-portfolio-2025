'use client';

import type { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback, useState } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Experience from './Experience/Experience';

const SLIDES = [
  { title: 'Hero', color: 'bg-white/10', component: <Hero /> },
  { title: 'About', color: 'bg-blue/20', component: <About /> },
  { title: 'Experience', color: 'bg-white/20', component: <Experience /> },
  { title: 'Projects', color: 'bg-white/30', component: <Projects /> },
  { title: 'Contact', color: 'bg-white/40', component: <Contact /> },
];

type EmblaCarouselProps = {
  onInit?: (api: EmblaCarouselType) => void;
  onSelect?: (index: number) => void;
};

export default function EmblaCarousel({ onInit, onSelect }: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: 'y', loop: false });
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = useCallback(() => {
    if (emblaApi && onSelect) {
      const index = emblaApi.selectedScrollSnap();
      onSelect(index);
      setCurrentIndex(index);
    }
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit?.(emblaApi);
    handleSelect();
    emblaApi.on('select', handleSelect);
  }, [emblaApi, onInit, handleSelect]);

  if (isMobile) {
    return <div className="h-full w-full">{SLIDES[currentIndex].component}</div>;
  }

  return (
    <div className="h-full w-full">
      <div className="overflow-hidden h-full max-h-screen" ref={emblaRef}>
        <div className="flex flex-col h-full">
          {SLIDES.map((slide, index) => (
            <div key={index} className="h-screen flex-shrink-0">
              {slide.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { SLIDES };
