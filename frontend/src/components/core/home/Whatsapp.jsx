import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href="https://wa.me/+917648855478"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}

export default Whatsapp;
