"use client";
import React, { useState } from "react";
import Image from "next/image";
import gallery1 from "@/assets/service1.png";
import gallery2 from "@/assets/service2.png";
import gallery3 from "@/assets/service3.png";
import gallery4 from "@/assets/service4.png";
import gallery5 from "@/assets/service5.png";
import gallery6 from "@/assets/service6.png";

const galleryImages = [
  { id: 1, src: gallery1 },
  { id: 2, src: gallery2 },
  { id: 3, src: gallery3 },
  { id: 4, src: gallery4 },
  { id: 5, src: gallery5 },
  { id: 6, src: gallery6 },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    if (selectedImage === image) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <p className="text-3xl font-bold text-gray-800 text-center mb-4">
          Photo Gallery
        </p>
        <hr className="w-16 text-center mx-auto border-yellow-500 mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden shadow-lg"
            >
              <Image
                src={image.src}
                alt={`Gallery Image ${image.id}`}
                width={600}
                height={400}
                className="w-full h-[70vh] object-cover transition-all duration-300 group-hover:scale-110 cursor-pointer"
                onClick={() => handleImageClick(image.src)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative max-w-4xl h-[98vh]">
            <Image
              src={selectedImage}
              alt="Selected Image"
              className="object-contain w-full h-full rounded-md"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
