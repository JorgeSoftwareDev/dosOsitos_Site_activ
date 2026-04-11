import EmblaCarousel from "@/app/components/EmblaCarousel"
import Image from "next/image"
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa"

const cookieSlides = [
  { src: "/cookies/cookie1.png", alt: "Fresh baked cookie 1" },
  { src: "/cookies/cookie2.png", alt: "Fresh baked cookie 2" },
  { src: "/cookies/cookie3.png", alt: "Fresh baked cookie 3" },
]

const carouselSlides = [...cookieSlides, ...cookieSlides, ...cookieSlides]

export default function Home() {
  return (
    <section
      id="home"
      className="w-full px-4 py-4 sm:px-6 md:px-6 lg:px-12 lg:py-3"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-4 lg:gap-3">

        {/* Top row: Logo + Brown Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:h-[68dvh] xl:h-[72dvh] items-center">

          {/* Logo - mobile first */}
          <div className="order-1 md:order-2 flex items-center justify-center md:h-full">
            <div className="w-full max-w-[500px] md:max-w-[650px] flex items-center justify-center md:h-full">
              <Image
                src="/mains/TShirtDosLogo.png"
                alt="Dos Ositos Logo"
                width={500}
                height={300}
                quality={75}
                priority
                className="block w-full h-auto lg:max-h-[58dvh] xl:max-h-[64dvh] object-contain"
              />
            </div>
          </div>

          {/* Brown Box */}
          <div className="order-2 md:order-1 flex items-center justify-center md:h-full">
            <div className="w-full rounded-[1.25rem] sm:rounded-3xl border border-[#6A3920] bg-[#4C2816] px-6 py-7 min-[360px]:px-7 min-[360px]:py-7 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-10 text-[#F1B146] shadow-[0_18px_40px_rgba(76,40,22,0.38)]">
              <h1 className="text-center text-[1.6rem] min-[360px]:text-[1.85rem] sm:text-[2.15rem] md:text-[clamp(2.2rem,3vw,3.2rem)] font-bold leading-[1.1] text-[#F1B146] break-words">
                Treats baked with...
                <br />
                <span className="logo-text leading-relaxed font-normal text-[#FCB7C7]">
                  Amor
                </span>{" "}
                ❤️
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-center text-[1rem] min-[360px]:text-[1.05rem] sm:text-[1.12rem] md:text-[clamp(1.05rem,1.35vw,1.25rem)] leading-relaxed text-[#F1B146]">
                The Dos Ositos page is{" "}
                <span className="logo-text font-normal text-[#FCB7C7]">
                  Almost
                </span>{" "}
                here.
                <br />
                Follow us on Instagram for updates, cookie drops, and behind-the-scenes
                baking, or email us for pre-orders and event inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery - full width underneath
        <div className="flex flex-col justify-center">
          <div className="mb-3 text-center px-1">
            <p className="text-[0.64rem] min-[360px]:text-[0.7rem] sm:text-[0.8rem] md:text-[0.82rem] uppercase tracking-[0.16em] sm:tracking-[0.22em] font-semibold text-[#7A2E12]">
              Warm cookies incoming
            </p>
            <h2 className="mt-1 text-[1.25rem] min-[360px]:text-[1.5rem] sm:text-[1.9rem] md:text-[clamp(1.35rem,2vw,2.2rem)] font-bold leading-tight text-[#4C2816]">
              Fresh from the oven
            </h2>
            <p className="mt-1 text-[0.82rem] min-[360px]:text-[0.88rem] sm:text-[0.95rem] md:text-[0.95rem] text-[#6B5A57]">
              The first batches are almost ready.
            </p>
          </div>

          <div className="w-full">
            <EmblaCarousel slides={carouselSlides} />
          </div>
        </div> */}

        {/* Socials */}
        <div className="lg:h-[10dvh] xl:h-[12dvh] flex flex-col items-center justify-center pt-1">
          <p className="mb-3 sm:mb-4 text-center text-[1.64rem] min-[500px]:text-[1.7rem] sm:text-[1.8rem] md:text-[2.2rem] uppercase tracking-[0.16em] sm:tracking-[0.22em] font-semibold text-[#4C2816]">
            Stay connected
          </p>

          <div className="flex gap-4 min-[360px]:gap-5">
            <a
              href="https://www.facebook.com/people/Dos-Ositos-Bakery/61577932839472/#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 min-[360px]:h-12 min-[360px]:w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-[#4C2816] text-[#4C2816] transition hover:bg-[#4C2816] hover:text-[#F1B146]"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://www.instagram.com/dosositosbakery"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 min-[360px]:h-12 min-[360px]:w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-[#4C2816] text-[#4C2816] transition hover:bg-[#4C2816] hover:text-[#F1B146]"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="mailto:info@dosositosbakery.com?subject=Request%20from%20Dos%20Ositos%20website"
              aria-label="Email"
              className="flex h-11 w-11 min-[360px]:h-12 min-[360px]:w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-[#4C2816] text-[#4C2816] transition hover:bg-[#4C2816] hover:text-[#F1B146]"
            >
              <FaEnvelope size={19} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}