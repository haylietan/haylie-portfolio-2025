'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback, useState } from 'react';
import EmblaSlide from './Slide';

const SLIDES = [
  { title: 'Hero', color: 'bg-white/10' },
  { title: 'About', color: 'bg-white/20' },
  { title: 'Projects', color: 'bg-white/30' },
  { title: 'Contact', color: 'bg-white/40' },
];

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: 'y',
    loop: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    // setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="h-full w-full">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex flex-col h-full">
          {SLIDES.map((slide, index) => (
            <EmblaSlide key={index} title={slide.title} color={slide.color} />
          ))}
        </div>
      </div>

      {/* Vertical dot nav (optional on right edge) */}
     <div className="flex left-4 top-3/4 -translate-y-1/2 flex flex-col gap-2 border-3">
      {SLIDES.map((slide, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          className={`px-3 py-1 text-sm rounded-full border-2 transition-colors duration-200 ${
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
  );
}
