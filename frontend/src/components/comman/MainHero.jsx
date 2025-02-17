"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa"; // React icon for WhatsApp

const HeroSlider = ({ image, title, description,blur }) => {
  const [textVisible, setTextVisible] = useState(true);

  const handleSlideChange = () => {
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 500);
  };

  return (
    <div className="relative font-thin font-serif">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        spaceBetween={0}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 1, spaceBetween: 0 },
        }}
        onSlideChange={handleSlideChange}
        className="relative z-10 h-[100vh] "
      >
        <SwiperSlide className="relative h-[100vh] ">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              width={1920}
              height={1080}
              className={`w-full h-full object-cover filter blur-${blur}`} // Apply blur effect here
              priority
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-70 p-8 z-10 flex items-center transition-opacity duration-1000 ${
                textVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-full max-w-2xl ml-8 sm:ml-16 lg:ml-24 text-left">
                <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-6">{title}</h1>
                <p className="text-white text-lg sm:text-xl md:text-sm mb-8">{description}</p>
                <div className="flex space-x-4">
                  <Link href="/contact">
                    <button className="bg-[#ff6200] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#ff8500] transition duration-300 transform hover:scale-105">
                      Talk To Us
                    </button>
                  </Link>
                  <a
                    href="wa:6267144122"
                    className="flex items-center bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
                  >
                    <FaWhatsapp className="mr-3 text-xl" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
