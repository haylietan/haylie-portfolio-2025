'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback, useState } from 'react';
import EmblaSlide from './Slide';

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: 'y',
    loop: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="max-h-screen h-screen overflow-hidden">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex flex-col h-full">
          <EmblaSlide title="Hero" color="bg-blue-500" />
          <EmblaSlide title="About" color="bg-green-500" />
          <EmblaSlide title="Projects" color="bg-pink-500" />
          <EmblaSlide title="Contact" color="bg-yellow-500" />
        </div>
      </div>

      {/* Vertical dot nav (optional on right edge) */}
      <div className="absolute left-4 top-3/4 -translate-y-1/2 flex flex-col gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full border-2 transition-colors duration-200 ${
              index === selectedIndex
                ? 'bg-gray-900 border-gray-900'
                : 'bg-transparent border-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
