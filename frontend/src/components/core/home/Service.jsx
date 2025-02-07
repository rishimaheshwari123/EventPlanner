import Link from "next/link";
import { FaHome, FaCamera, FaPray, FaBook, FaHeart } from "react-icons/fa";

const services = [
  { id: 1, title: "Home Decoration", icon: <FaHome /> },
  { id: 2, title: "Professional Photoshoot", icon: <FaCamera /> },
  { id: 3, title: "Ram Katha", icon: <FaPray /> },
  { id: 4, title: "Bhagwat Katha", icon: <FaBook /> },
  { id: 6, title: "Pre Wedding Photoshoot", icon: <FaHeart /> },
];

const Services = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
        Our Services
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            href={"/service"}
            key={service.id}
            className="flex flex-col items-center justify-center p-5 rounded-xl shadow-lg bg-white/70 backdrop-blur-md transition transform hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-4xl text-red-600">{service.icon}</div>
            <p className="mt-3 text-center text-gray-700 font-medium">
              {service.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
