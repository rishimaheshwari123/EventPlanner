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
import sercice1 from "@/assets/service1.png";
import sercice2 from "@/assets/service2.png";
import sercice3 from "@/assets/service3.png";
import sercice4 from "@/assets/service4.png";
import sercice5 from "@/assets/service5.png";
import sercice6 from "@/assets/service6.png";

import Image from "next/image";

const work = [
  {
    id: 1,
    image: sercice1,
    teg: "Residential",
    location: "Lucknow",
  },
  {
    id: 2,
    image: sercice2,
    teg: "Residential",
    location: "Kanpur",
  },
  {
    id: 3,
    image: sercice3,
    teg: "Residential",
    location: "Allahabad",
  },
  {
    id: 4,
    image: sercice4,
    teg: "Residential",
    location: "Varanasi",
  },
  {
    id: 5,
    image: sercice5,
    teg: "Residential",
    location: "Mirzapur",
  },

  {
    id: 6,
    image: sercice6,
    teg: "Residential",
    location: "Ghaziabad",
  },
];

const PreWork = () => {
  return (
    <div className=" py-10  relative">
      <div className="text-center">
        <p className=" text-xl lg:text-3xl font-bold pb-3 border-b-4 border-yellow-400 inline-block">
          Work We Have Done
        </p>
      </div>
      <br />
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {work.map((item) => (
            <SwiperSlide key={item.id} className="">
              <div className="relative">
                <Image
                  src={item.image}
                  alt={"not found"}
                  className="w-full h-80 object-cover rounded-md shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PreWork;
