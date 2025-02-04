"use client";
import { getAllGalleryAPI } from "@/services/operation/admin";
import React, { useState, useEffect } from "react";

const BackendGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  const getAllGallery = async () => {
    const response = await getAllGalleryAPI();
    setGallery(response);
  };

  useEffect(() => {
    getAllGallery();
  }, []);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  // Get unique types
  const uniqueTypes = [...new Set(gallery.map((currElem) => currElem.type))];

  const filteredImages = selectedType
    ? gallery.filter((currElem) => currElem.type === selectedType)
    : gallery;

  return (
    <div className="bg-white">
      <br />
      <br />

      <div className="max-w-7xl mx-auto p-6">
        {/* Type Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {uniqueTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeClick(type)}
              className="bg-yellow-500 text-white px-4 py-2 text-xl rounded-lg hover:bg-gray-700"
            >
              {type}
            </button>
          ))}
        </div>

        <br />
        <br />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((currElem) =>
            currElem.images.map((item) => (
              <div
                key={item.public_id}
                className="relative group overflow-hidden rounded-lg shadow-lg shadow-pink-600"
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt="Gallery Image"
                  className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
                />

                {/* Title shown in the center on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-white text-xl font-semibold px-6 py-2 rounded-md">
                    {currElem.title}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BackendGallery;
