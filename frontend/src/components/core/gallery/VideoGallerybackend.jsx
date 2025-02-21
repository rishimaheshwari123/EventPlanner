"use client";
import { getAllGalleryAPI, getAllVideoAPI } from "@/services/operation/admin";
import React, { useState, useEffect, useRef } from "react";

const BackendVideo = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null); // Track which video is playing
  const videoRef = useRef(null); // Reference for the video element

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
    
    setTimeout(() => {
      if (videoRef.current) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) {
          videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
          videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) {
          videoRef.current.msRequestFullscreen();
        }
      }
    }, 200); // Thoda delay diya hai taaki video play ho sake
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

      <div className="w-11/12 mx-auto p-6">
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
                    ref={videoRef} // Reference added
                    src={item?.url}
                    className="w-full h-full aspect-square object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
                    controls
                    autoPlay
                  />
                ) : (
                  <video
                    src={item.url} // Assuming API provides a thumbnail
                    className="w-full h-full aspect-square object-cover rounded-lg transition-all duration-300 group-hover:scale-105 cursor-pointer"
                    autoPlay
                    loop
                muted
                playsInline
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
