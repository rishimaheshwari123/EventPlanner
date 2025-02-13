"use client";
import React from "react";

const videoData = [
  { id: 1, videoSrc: "/videos/v1.mp4" },
  { id: 2, videoSrc: "/videos/v2.mp4" },
  { id: 3, videoSrc: "/videos/v3.mp4" },
  { id: 4, videoSrc: "/videos/v4.mp4" },
  { id: 5, videoSrc: "/videos/v5.mp4" },
];

const VideoGallery = () => {
  return (
    <div className="bg-[#1d3432]">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Our Video Gallery
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {videoData.slice(0, 2).map((video) => (
            <div key={video.id} className="rounded-lg overflow-hidden shadow-lg">
              <video
                src={video.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[70vh] object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-8">
          {videoData.slice(2).map((video) => (
            <div key={video.id} className="rounded-lg overflow-hidden shadow-lg">
              <video
                src={video.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[70vh] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
