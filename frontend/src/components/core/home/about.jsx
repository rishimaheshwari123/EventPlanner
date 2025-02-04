import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import about from "@/assets/about.png";

export default function About() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <hr className="w-16 border-yellow-500 mb-4" />
          <p className="text-lg font-semibold text-gray-600 mb-6">
            Let us make your event memorable!
          </p>
          <p className="text-gray-700 mb-4">
            Parties | Couple Surprises | Baby Shower | Wedding | Corporate |
            Farewell
          </p>
          <p className="text-gray-700 mb-6">
            From planning weddings to organizing unforgettable events, we are
            here to take care of every detail. Trust us to bring your vision to
            life.
          </p>
          <div className="text-gray-800 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-yellow-600" />
            <span>Office Address: Platinum Plaza, New Market, Bhopal</span>
          </div>
        </div>

        <div className="md:w-1/2 px-6 pl-6 md:pl-0 mt-6 md:mt-0">
          <div className="border-4 border-yellow-500   w-[90vw] h-[30vh] md:h-[60vh] md:w-full ">
            <Image
              src={about}
              alt="Aditya Wedding & Event Planner"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-2 text-yellow-600 text-xl italic font-handwriting text-center md:text-right">
            Aditya Wedding & Event Planner
          </p>
        </div>
      </div>
    </section>
  );
}
