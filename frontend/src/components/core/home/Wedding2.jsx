"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { IoLocation } from "react-icons/io5";
import Image from "next/image";

import sercice1 from "@/assets/service1.png";
import sercice2 from "@/assets/service2.png";
import sercice3 from "@/assets/service3.png";
import sercice4 from "@/assets/service4.png";
import sercice5 from "@/assets/service5.png";
import sercice6 from "@/assets/service6.png";

const work = [
  { id: 1, image: sercice4, tag: "Residential", location: "Lucknow" },
  { id: 2, image: sercice2, tag: "Residential", location: "Kanpur" },
  { id: 3, image: sercice5, tag: "Residential", location: "Allahabad" },
  { id: 4, image: sercice1, tag: "Residential", location: "Varanasi" },
  { id: 5, image: sercice3, tag: "Residential", location: "Mirzapur" },
  { id: 6, image: sercice6, tag: "Residential", location: "Ghaziabad" },
];

const Wedding2 = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 1, spaceBetween: 40 },
            1024: { slidesPerView: 1, spaceBetween: 50 },
          }}
        >
          {work.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative">
                <Image
                  src={item.image}
                  alt="Not found"
                  className="w-full h-56 object-cover rounded-md shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Wedding2;
