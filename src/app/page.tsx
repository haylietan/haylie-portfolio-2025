'use client';

// import Image from 'next/image';
// import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "./(pages)/_components/EmblaCarousel";

// const OPTIONS: EmblaOptionsType = { axis: 'y' }
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Page() {
  return (
    <main className="max-h-screen flex flex-row items-center justify-center p-6 text-center border-3 bg-red-100 grow-0">
      {/* <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg text-gray-500">I build beautiful, responsive web apps.</p> */}
      <div className="w-1/5 h-full bg-blue-300 max-h-screenw-full h-screen flex border-3 radius-10">SideBar</div>
      <div className="w-4/5 h-full flex flex-row bg-red-200 border-3 h-screen overflow-hidden">
        <EmblaCarousel/>
      </div>
    </main>
  );
}

