import Gallery from "@/components/core/gallery/Gallery";
import React from "react";
import gallery from "@/assets/slider1.jpg";
import Image from "next/image";
import VideoGallery from "@/components/core/gallery/VideoGallery";
import BackendGallery from "@/components/core/gallery/BackendGallery";

const GalleryPage = () => {
  return (
    <div>
      <div className="fixed -z-40">
        <Image
          src={gallery}
          alt="Not Found"
          objectFit="cover"
          className="h-[80vh] object-cover opacity-85"
        />
      </div>

      <div className="min-h-[75vh]"></div>
      <Gallery />
      <VideoGallery />
      <BackendGallery />
    </div>
  );
};

export default GalleryPage;
