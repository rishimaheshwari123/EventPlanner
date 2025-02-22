"use client";
import HeroSlider from "@/components/comman/MainHero";
import Image from "next/image";
import {
  FaHeart,
  FaRing,
  FaCamera,
  FaUtensils,
  FaMusic,
  FaUserFriends,
} from "react-icons/fa";
import image from "../../../assets/logo.jpg";
import VideoGallery from "@/components/core/gallery/VideoGallery";
import BackendVideo from "@/components/core/gallery/VideoGallerybackend";

function VideoGalleryPage() {
  return (
    <div className="min-h-screen">
      <HeroSlider
        image={image}
        VideoGallery={"yes"}
        description="Experience the magic of Bhopal's top wedding planners. Let us bring your dream wedding to life with personalized services, creativity, and attention to detail."
        title="Video Gallery"
        blur="none"
      />

      <BackendVideo />
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
      <Icon className="text-4xl mb-4 text-pink-600 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default VideoGalleryPage;
