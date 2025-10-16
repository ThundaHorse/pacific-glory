'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Slide = { src: string; caption: string };

export default function Carousel({
  slides,
  interval = 4500
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIdx((v) => (v + 1) % slides.length),
      interval
    );
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <div className='relative w-full overflow-hidden rounded-lg'>
      <div
        className='flex transition-transform duration-700'
        style={{ transform: `translateX(-${idx * 100}%)` }}>
        {slides.map((s, i) => (
          <div
            key={i}
            className='relative min-w-full h-72 sm:h-96'>
            <Image
              src={s.src}
              alt={s.caption}
              fill
              className='object-cover'
            />
            <div className='absolute inset-x-0 bottom-0 bg-black/40 text-white p-3 text-sm'>
              {s.caption}
            </div>
          </div>
        ))}
      </div>
      <div className='absolute bottom-3 right-3 flex gap-2'>
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-2.5 w-2.5 rounded-full ${
              i === idx ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
