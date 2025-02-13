import Link from "next/link";
import { FaHome, FaCamera, FaBook } from "react-icons/fa";
import { GiDiamondRing, GiFlowerEmblem, GiLoveLetter } from "react-icons/gi";

const services = [
  { id: 1, title: "Wedding Decoration", icon: <GiFlowerEmblem /> },
  { id: 2, title: "Home Decoration", icon: <FaHome /> },
  { id: 3, title: "Professional Photoshoot", icon: <FaCamera /> },
  { id: 4, title: "Bhagwat & Ram Katha", icon: <FaBook /> },
  { id: 5, title: "Pre Wedding Photoshoot", icon: <GiDiamondRing /> },
];

const Services = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            href={"/service"}
            key={service.id}
            className="flex flex-col items-center justify-center p-6 rounded-2xl shadow-xl bg-white/80 backdrop-blur-xl border border-gray-200 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl text-pink-600">{service.icon}</div>
            <p className="mt-4 text-center text-gray-800 font-semibold">
              {service.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
