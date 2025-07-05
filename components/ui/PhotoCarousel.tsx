'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Lightbox from 'yet-another-react-lightbox';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { PHOTOS } from '../../app/data'
import 'yet-another-react-lightbox/styles.css';

export default function PhotoCarousel() {
    const [emblaRef, embla] = useEmblaCarousel({ loop: true });
    const [lightboxIndex, setLightboxIndex] = useState(-1); // -1 means closed
  
    const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);
  
    return (
      <>
        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className="z-10 hidden h-16 w-10 items-center justify-center rounded-full bg-zinc-200 text-2xl text-zinc-800 shadow-md dark:bg-zinc-800 dark:text-white sm:flex"
          >
            ‹
          </button>
  
          <div className="mx-8 w-full max-w-5xl overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
            {PHOTOS.map((photo, idx) => (
                <button
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className="cursor-zoom-in flex min-w-full sm:min-w-[60%] lg:min-w-[40%] items-center justify-center rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 focus:outline-none"
                >
                    <Image
                    src={photo.src}
                    alt={`Photo ${idx + 1}`}
                    width={photo.orientation === 'portrait' ? 400 : 800}
                    height={500}
                    className={photo.orientation === 'portrait'
                        ? 'object-contain h-full w-auto'
                        : 'object-cover w-full h-full'}
                    />
                </button>
                ))}


            </div>
          </div>
  
          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="z-10 hidden h-16 w-10 items-center justify-center rounded-full bg-zinc-200 text-2xl text-zinc-800 shadow-md dark:bg-zinc-800 dark:text-white sm:flex"
          >
            ›
          </button>
        </div>
  
        {/* Lightbox */}
        <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={PHOTOS.map((photo) => ({ src: photo.src }))}
        />

      </>
    );
  }