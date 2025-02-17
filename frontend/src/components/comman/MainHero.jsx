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
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const HeroSlider = ({ image, title, description, blur }) => {
  const [textVisible, setTextVisible] = useState(true);

  const handleSlideChange = () => {
    setTextVisible(false);
    setTimeout(() => setTextVisible(true), 500);
  };

  const socialIcons = [
    { Icon: FaFacebookF, href: "https://facebook.com", color: "bg-blue-600" },
    { Icon: FaInstagram, href: "https://instagram.com", color: "bg-pink-600" },
    { Icon: FaYoutube, href: "https://youtube.com", color: "bg-red-600" },
    { Icon: FaWhatsapp, href: "https://wa.me/6267144122", color: "bg-green-500" },
  ];

  return (
    <div className="relative font-sans">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        className="relative z-10 h-screen"
      >
        <SwiperSlide className="relative h-full">
          <div className="relative w-full h-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              layout="fill"
              objectFit="cover"
              className={`animated-zoom ${blur ? 'filter blur-sm' : ''}`}
              priority
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-60 flex items-center transition-opacity duration-1000 ${
                textVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center md:text-left">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  {title}
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                  <Link href="/contact">
                    <button className="w-full sm:w-auto bg-[#ff6200] text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-[#ff8500] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#ff6200] focus:ring-opacity-50">
                      Talk To Us
                    </button>
                  </Link>
                  <a
                    href="https://wa.me/6267144122"
                    className="w-full sm:w-auto flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    <FaWhatsapp className="mr-2 text-xl" />
                    WhatsApp
                  </a>
                </div>
                <div className="flex justify-center md:justify-start space-x-4">
                  {socialIcons.map(({ Icon, href, color }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${color} text-white p-3 rounded-full hover:opacity-80 transition duration-300`}
                    >
                      <Icon className="text-xl" />
                    </a>
                  ))}
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