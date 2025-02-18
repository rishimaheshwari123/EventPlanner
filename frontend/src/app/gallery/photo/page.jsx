"use client";
import HeroSlider from "@/components/comman/MainHero";
import React from "react";
import Image from "next/image";
import {
  FaGift,
  FaBirthdayCake,
  FaWineGlass,
  FaCamera,
  FaMusic,
  FaUserFriends,
} from "react-icons/fa";
import image from "../../../assets/happyb.jpg";
import BackendGallery from "@/components/core/gallery/BackendGallery";

function PhotoGallery() {
  return (
    <div className="min-h-screen">
      <HeroSlider
        image={image}
        description="Make your special day unforgettable with our customized birthday and anniversary event planning services."
        title="Photo Gallery"
        blur="none"
      />
      <BackendGallery />
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
      <Icon className="text-4xl mb-4 text-purple-600 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default PhotoGallery;
