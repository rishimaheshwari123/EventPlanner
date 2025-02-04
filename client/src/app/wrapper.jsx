"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { usePathname } from "next/navigation";
import Navbar from "@/components/comman/Navbar";
import Footer from "@/components/comman/Footer";
import { useEffect, useState } from "react";

const Wrapper = ({ children }) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <Provider store={store}>
      {isAdminRoute ? null : <Navbar />}

      {children}
      <ToastContainer />
      {isAdminRoute ? null : <Footer />}
    </Provider>
  );
};

export default Wrapper;
