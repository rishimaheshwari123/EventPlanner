"use client";
import { getAllGalleryAPI, getAllVideoAPI } from "@/services/operation/admin";
import React, { useState, useEffect } from "react";

const BackendVideo = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null); // Track which video is playing

  const getAllGallery = async () => {
    const response = await getAllVideoAPI();
    setGallery(response);
  };

  useEffect(() => {
    getAllGallery();
  }, []);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  function removeNumbersFromString(str) {
    return str.replace(/\d+/g, ""); // Sabhi numeric values ko hata dega
  }

  // Video click handler
  const handleVideoClick = (videoId) => {
    setPlayingVideo(videoId);
  };

  // Get unique types
  const uniqueTypes = [...new Set(gallery.map((currElem) => currElem.type))];

  const filteredImages = selectedType
    ? gallery?.filter((currElem) => currElem.type === selectedType)
    : gallery;

  return (
    <div className="bg-white">
      <br />
      <br />

      <div className="max-w-7xl mx-auto p-6">
        {/* Type Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {uniqueTypes?.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeClick(type)}
              className="bg-yellow-500 text-white px-4 py-2 text-xl rounded-lg hover:bg-gray-700"
            >
              {removeNumbersFromString(type)}
            </button>
          ))}
        </div>

        <br />
        <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages?.map((currElem) =>
            currElem.videos?.map((item) => (
              <div
                key={item.public_id}
                className="relative group overflow-hidden rounded-lg shadow-lg shadow-pink-600"
                onClick={() => handleVideoClick(item.public_id)}
              >
                {/* Show Thumbnail First */}
                {playingVideo === item.public_id ? (
                  <video
                    src={item?.url}
                    className="w-full h-full aspect-square object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
                    controls
                    autoPlay
                  />
                ) : (
                  <video
                    src={item.url} // Assuming API provides a thumbnail
                    alt="Video Thumbnail"
                    className="w-full h-full aspect-square object-cover rounded-lg transition-all duration-300 group-hover:scale-105 cursor-pointer"
                  />
                )}

           
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BackendVideo;
