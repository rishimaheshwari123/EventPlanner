"use client";
import GetAllGallery from "@/components/admin/pages/GetAllGallery";
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
      <GetAllGallery />
    </div>
  );
};

export default page;
