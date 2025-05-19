'use client';

type EmblaSlideProps = {
    title: string;
    color: string; // Tailwind class string
  };
  
  export default function EmblaSlide({ title, color }: EmblaSlideProps) {
    return (
      <section
        className={`flex-none w-full h-screen flex items-center justify-center ${color}`}
      >
        <h2 className="text-4xl font-bold text-white">{title}</h2>
      </section>
    );
  }
  