"use client";
import React, { useState, useEffect } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";
import slide1 from "@/assets/slider1.jpg";
import slide2 from "@/assets/slider2.jpg";
import slide3 from "@/assets/slider3.jpg";

const Slider = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Luxury Wedding Planning",
      headline: "Crafting Your Dream Wedding",
      description:
        "From elegant venues to exquisite décor, we make your wedding a truly unforgettable experience with our expert planning services.",
      buttonText: "Plan Your Wedding",
      buttonLink: "/contact",
    },
    {
      id: 2,
      image: slide2,
      title: "Exclusive Event Management",
      headline: "Creating Moments That Last",
      description:
        "Whether it's a corporate event or a private celebration, our team ensures every detail is taken care of with perfection.",
      buttonText: "Explore Events",
      buttonLink: "/contact",
    },
    {
      id: 3,
      image: slide3,
      title: "Destination Weddings",
      headline: "Say 'I Do' in Style",
      description:
        "Plan a breathtaking destination wedding at the most stunning locations, tailored to your dreams and desires.",
      buttonText: "Get Started",
      buttonLink: "/contact",
    },
  ];

  const handleSlideChange = () => {
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 500);
  };

  return (
    <div className="relative">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectFade,
        ]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 1, spaceBetween: 0 },
        }}
        onSlideChange={handleSlideChange}
        className="relative z-10 h-[80vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh]"
      >
        {slides.map((item) => (
          <SwiperSlide
            key={item.id}
            className="relative h-[80vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh]"
          >
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                priority
              />
              <div
                className={`absolute inset-0 p-8 z-10 flex flex-col justify-center transition-opacity duration-1000 ${
                  textVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="bg-[#eae369] bg-opacity-60 text-white p-5 sm:p-6 md:p-8 lg:p-12 max-w-full md:max-w-lg ml-auto">
                  <p className="text-[#000] text-xs sm:text-sm md:text-base font-bold mb-2">
                    {item.title}
                  </p>
                  <h2 className="text-black text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                    {item.headline}
                  </h2>
                  <p className="text-black text-sm sm:text-base md:text-lg mb-6">
                    {item.description}
                  </p>
                  {item.buttonText && (
                    <Link href={item.buttonLink || "#"}>
                      <button className="bg-[#efcc41] text-[#62000f] px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-[#ffc107] transition duration-300">
                        {item.buttonText}
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
