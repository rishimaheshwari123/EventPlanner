"use client";
import React, { useState } from "react";
import Image from "next/image";
import videoThumbnail1 from "@/assets/v1.jpg";
import videoThumbnail2 from "@/assets/v2.jpg";
import videoThumbnail3 from "@/assets/v3.jpg";
import videoThumbnail4 from "@/assets/v4.jpg";
import videoThumbnail5 from "@/assets/v5.jpg";

const videoData = [
  { id: 1, thumbnail: videoThumbnail1, videoSrc: "/1.mp4" },
  { id: 2, thumbnail: videoThumbnail2, videoSrc: "2.mp4" },
  { id: 3, thumbnail: videoThumbnail3, videoSrc: "3.mp4" },
  { id: 4, thumbnail: videoThumbnail4, videoSrc: "4.mp4" },
  { id: 5, thumbnail: videoThumbnail5, videoSrc: "5.mp4" },
];

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoSrc) => {
    if (selectedVideo === videoSrc) {
      setSelectedVideo(null);
    } else {
      setSelectedVideo(videoSrc);
    }
  };

  return (
    <div className="bg-[#1d3432]">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Our Video Gallery
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {videoData.slice(0, 2).map((video) => (
            <div
              key={video.id}
              className="relative group overflow-hidden rounded-lg shadow-lg w-full"
            >
              <div
                onClick={() => handleVideoClick(video.videoSrc)}
                className="relative cursor-pointer"
              >
                <Image
                  src={video.thumbnail}
                  alt={`Video Thumbnail ${video.id}`}
                  width={600}
                  height={400}
                  className="w-full h-[70vh] object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <span className="text-white text-4xl group-hover:block hidden">
                    ▶️
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-8">
          {videoData.slice(2).map((video) => (
            <div
              key={video.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div
                onClick={() => handleVideoClick(video.videoSrc)}
                className="relative cursor-pointer"
              >
                <Image
                  src={video.thumbnail}
                  alt={`Video Thumbnail ${video.id}`}
                  className="w-full h-[70vh] object-cover transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <span className="text-white text-4xl group-hover:block hidden">
                    ▶️
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative w-full h-full max-w-4xl max-h-[98vh]">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="object-contain w-full h-full rounded-md"
            />
            <button
              onClick={() => setSelectedVideo(null)}
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

export default VideoGallery;
