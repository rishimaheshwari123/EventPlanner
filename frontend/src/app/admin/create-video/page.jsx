"use client";

import AddGallery from "@/components/admin/pages/AddGallery";
import VideoGalleryCreate from "@/components/admin/pages/VideoGalleryCreate";
import React, { useEffect, useState } from "react";

const page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div>
      <VideoGalleryCreate />
    </div>
  );
};

export default page;
