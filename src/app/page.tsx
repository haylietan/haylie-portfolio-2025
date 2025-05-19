'use client';

// import Image from 'next/image';
// import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "./(pages)/_components/EmblaCarousel";

// const OPTIONS: EmblaOptionsType = { axis: 'y' }
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg text-gray-500">I build beautiful, responsive web apps.</p>
      <EmblaCarousel/>
    </main>
  );
}

