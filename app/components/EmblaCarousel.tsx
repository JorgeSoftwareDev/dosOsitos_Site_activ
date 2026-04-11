"use client"

import { useEffect } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"

type Slide = {
  src: string
  alt: string
}

type EmblaCarouselProps = {
  slides: Slide[]
}

export default function EmblaCarousel({ slides }: EmblaCarouselProps) {
  const autoScroll = AutoScroll({
    speed: 0.7,
    startDelay: 0,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [autoScroll]
  )

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.plugins().autoScroll?.play()
  }, [emblaApi])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-2 min-[360px]:gap-3">
        {slides.map((slide, index) => (
          <div
            key={`${slide.src}-${index}`}
            className="min-w-[50%] min-[360px]:min-w-[50%] sm:min-w-[50%] md:min-w-[42%] lg:min-w-[36%] xl:min-w-[31%]"
          >
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-white/40 shadow-sm">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={500}
                height={800}
                className="h-40 min-[560px]:h-40 sm:h-40 md:h-40 lg:h-40 xl:h-44 w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}