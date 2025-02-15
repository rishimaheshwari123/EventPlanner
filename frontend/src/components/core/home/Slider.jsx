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
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import slide1 from "@/assets/slider1.jpg";
import slide2 from "@/assets/slider2.jpg";
import slide3 from "@/assets/slider3.jpg";
import home from "@/assets/home.png";
import home2 from "@/assets/home2.jpg";

const Slider = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    {
      id: 1,
      image: home,
      title: "Luxury Wedding Planning",
      headline: "Crafting Your Dream Wedding",
      description:
        "From elegant venues to exquisite décor, we make your wedding a truly unforgettable experience with our expert planning services.",
      buttonText: "Contact Us",
      buttonLink: "/contact",
    },
    // {
    //   id: 2,
    //   image: slide2,
    //   title: "Exclusive Event Management",
    //   headline: "Creating Moments That Last",
    //   description:
    //     "Whether it's a corporate event or a private celebration, our team ensures every detail is taken care of with perfection.",
    //   buttonText: "Contact Us",
    //   buttonLink: "/contact",
    // },
    // {
    //   id: 3,
    //   image: slide1,
    //   title: "Destination Weddings",
    //   headline: "Say 'I Do' in Style",
    //   description:
    //     "Plan a breathtaking destination wedding at the most stunning locations, tailored to your dreams and desires.",
    //   buttonText: "Contact Us",
    //   buttonLink: "/contact",
    // },
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
        onSlideChange={handleSlideChange}
        className="relative z-10 h-[90vh] lg:h-[100vh]"
      >
       
          <SwiperSlide
         
            className="relative mt-10 h-[90vh]  lg:h-[80vh] group"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={home}
                alt="Slider "
                width={1920}
                height={1080}
                className="w-full hidden lg:block md:block  h-full object-cover animated- zoom transition-transform duration-300 "
                priority
              />
              <Image
                src={home2}
                alt="Slider "
                width={1920}
                height={1080}
                className="w-full lg:hidden h-full object-cover animated -zoom transition-transform duration-300 "
                priority
              />
          


              {/* <div className="absolute inset-0 bg-black bg-opacity-65"></div> */}

              {/* <div
                className={`absolute left-10 md:left-16 top-1/4 p-6 z-10 flex flex-col justify-center transition-opacity duration-1000 max-w-lg ${
                  textVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white  uppercase text-xs sm:text-sm md:text-base font-bold mb-2">
                  {item.title}
                </p>
                <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                  {item.headline}
                </h2>
                <p className="text-white text-sm sm:text-base md:text-lg mb-6">
                  {item.description}
                </p>
         
                <div className="flex gap-4 ">
                  <Link href="#">
                    <FaFacebookF className="text-white text-lg hover:text-[#4267B2] transition duration-300 cursor-pointer" />
                  </Link>
                  <Link href="https://www.instagram.com/_wedding_event_planner?igsh=MWk0NGQ1aGg5a2VyYg==">
                    <FaInstagram className="text-white text-lg hover:text-[#E4405F] transition duration-300 cursor-pointer" />
                  </Link>
                  <Link href="#">
                    <FaTwitter className="text-white text-lg hover:text-[#1DA1F2] transition duration-300 cursor-pointer" />
                  </Link>
                </div>
                {item.buttonText && (
                  <Link href={item.buttonLink || "#"}>
                    <button className="bg-white mt-6 text-[#62000f] px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-[#ffc107] transition duration-300">
                      {item.buttonText}
                    </button>
                  </Link>
                )}
              </div> */}
            </div>
          </SwiperSlide>
    
      </Swiper>
    </div>
  );
};

export default Slider;
