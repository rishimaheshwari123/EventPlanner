import React from "react";
import Image from "next/image";
import service1 from "@/assets/service1.png";
import service2 from "@/assets/service2.png";
import service3 from "@/assets/service3.png";
import service4 from "@/assets/service4.png";
import service5 from "@/assets/service5.png";
import service6 from "@/assets/service6.png";
import service from "@/assets/slider3.jpg";

const services = [
  { id: 1, title: "Home Decoration", image: service1 },
  { id: 2, title: "Professional Photoshoot", image: service2 },
  { id: 3, title: "Ram katha", image: service3 },
  { id: 4, title: "Bhagwat Katha", image: service4 },
  { id: 5, title: "Home Decoration", image: service5 },
  { id: 6, title: "Pre Wedding Photoshoot", image: service6 },
];

const Services = () => {
  return (
    <div>
      <div className="fixed -z-40">
        <Image
          src={service}
          alt="Not Found"
          objectFit="cover"
          className="h-[70vh] object-cover opacity-85"
        />
      </div>

      <div className="min-h-[68vh]"></div>

      <div className="bg-gray-100">
        <section className="max-w-7xl mx-auto py-12 px-4 ">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Our Services
          </h2>
          <hr className="w-16 text-center mx-auto border-yellow-500 mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative group overflow-hidden s shadow-lg"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={350}
                  className="w-full h-[70vh] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300">
                  <div className="bg-[#1d3432]/95 w-[90%] h-[90%] flex items-center justify-center px-8 py-4  text-center">
                    <h3 className="text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
