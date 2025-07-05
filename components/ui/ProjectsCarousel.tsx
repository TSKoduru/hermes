// components/ProjectsCarousel.tsx
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import {
    PROJECTS,
  } from '../../app/data'
  import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogClose,
    MorphingDialogContainer,
  } from '@/components/ui/morphing-dialog'
  import { XIcon } from 'lucide-react'
type ProjectVideoProps = {
    src: string
  }
  
  function ProjectVideo({ src }: ProjectVideoProps) {
    return (
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.3,
        }}
      >
        <MorphingDialogTrigger>
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video w-full cursor-zoom-in rounded-xl"
          />
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
            <video
              src={src}
              autoPlay
              loop
              muted
              className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
            />
          </MorphingDialogContent>
          <MorphingDialogClose
            className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <XIcon className="h-5 w-5 text-zinc-500" />
          </MorphingDialogClose>
        </MorphingDialogContainer>
      </MorphingDialog>
    )
  }

  export default function ProjectsCarousel() {
    const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  
    const scrollPrev = useCallback(() => embla?.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla?.scrollNext(), [embla]);
  
    return (
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          className="z-10 hidden h-16 w-10 items-center justify-center rounded-full bg-zinc-200 text-xl text-zinc-800 shadow-md dark:bg-zinc-800 dark:text-white sm:flex"
        >
          ‹
        </button>
  
        {/* Carousel viewport */}
        <div className="mx-8 w-full max-w-6xl overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.name}
                className="min-w-full sm:min-w-[60%] lg:min-w-[40%] space-y-2"
              >
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProjectVideo src={project.video} />
                </div>
                <div className="px-1">
                  <a
                    className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                  </a>
                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          className="z-10 hidden h-16 w-10 items-center justify-center rounded-full bg-zinc-200 text-xl text-zinc-800 shadow-md dark:bg-zinc-800 dark:text-white sm:flex"
        >
          ›
        </button>
      </div>
    );
  }