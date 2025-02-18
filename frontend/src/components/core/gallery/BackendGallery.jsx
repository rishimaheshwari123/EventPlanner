"use client";
import { getAllGalleryAPI } from "@/services/operation/admin";
import React, { useState, useEffect } from "react";

const BackendGallery = () => {
  const [gallery, setGallery] = useState(null); // Initially null to check if data is fetched
  const [selectedType, setSelectedType] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  const getAllGallery = async () => {
    try {
      const response = await getAllGalleryAPI();
      console.log("API Response:", response); // Debugging API response

      // Ensure response is an array
      if (Array.isArray(response)) {
        setGallery(response);
      } else {
        setGallery([]); // If not an array, set empty
      }
    } catch (error) {
      console.error("Error fetching gallery:", error);
      setGallery([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllGallery();
  }, []);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  // Get unique types
  const uniqueTypes = gallery?.length
    ? [...new Set(gallery.map((item) => item.type))]
    : [];

  // Filtered images
  const filteredImages = selectedType
    ? gallery?.filter((item) => item.type === selectedType)
    : gallery;

  function removeNumbersFromString(str) {
    return str?.replace(/\d+/g, "") || "";
  }

  return (
    <div className="bg-white">
      <br />
      <br />

      <div className="max-w-7xl mx-auto p-6">
        {/* Show Loading State */}
        {loading && (
          <p className="text-center text-gray-700">Loading gallery...</p>
        )}

        {/* Handle Different API Cases */}
        {!loading && gallery === null && (
          <div className="text-center text-red-500 text-lg">
            Backend is down. Please try again later.
          </div>
        )}

        {!loading && gallery?.length === 0 && (
          <div className="text-center text-yellow-500 text-lg">
            No gallery items available.
          </div>
        )}

        {/* Type Buttons */}
        {uniqueTypes.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {uniqueTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeClick(type)}
                className="bg-yellow-500 text-white px-4 py-2 text-xl rounded-lg hover:bg-gray-700"
              >
                {removeNumbersFromString(type)}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        {filteredImages?.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((currElem) =>
              currElem?.images?.map((item) => (
                <div
                  key={item.public_id}
                  className="relative group overflow-hidden rounded-lg shadow-lg shadow-pink-600"
                >
                  {/* Image */}
                  <img
                    src={item?.url}
                    alt="Gallery Image"
                    className="w-full h-full aspect-square object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-white text-xl font-semibold px-6 py-2 rounded-md">
                      {currElem?.title}
                    </div>
                    <button className="border-2 mt-1 rounded-lg border-white text-white px-5 py-2 transition duration-300 hover:bg-white hover:text-gray-800">
                      <a href="tel:7648855478">Book Now</a>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BackendGallery;
