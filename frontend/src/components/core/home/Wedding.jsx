import React from "react";
import Wedding1 from "./Wedding1";
import Wedding2 from "./Wedding2";
import Wedding3 from "./Wedding3";
import Wedding4 from "./Wedding4";

const Wedding = () => {
  return (
    <div className="bg-yellow-100 p-5">
      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto p-5 items-center">
        <div className="grid lg:grid-cols-2 gap-2">
          <div className="hidden lg:block">
            <Wedding1 />
          </div>

          <div className="grid grid-cols-1 gap-2">
            <Wedding2 />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Wedding3 />
          </div>

          <div className="hidden lg:block">
            <Wedding4 />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col gap-4">
          <p className="uppercase text-xl font-bold">
            Aditya Wedding & Event Planner
          </p>
          <p className="mt-2">
            Unlock Your Dream Destination Wedding in Bhopal. Choose Melodia
            Event Management Company for your premium destination wedding in
            Bhopal, India. Whether you dream of a beach wedding or a resort
            celebration, we will bring it to life, infusing rich traditions.
          </p>
          <p>
            We also offer venue selection assistance for an easier planning
            process. Our track record includes clients from India and abroad,
            making us your ideal partner for a dream destination wedding in
            Bhopal.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-2">
            <a
              href="tel:+919425727907"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919425727907"
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedding;
