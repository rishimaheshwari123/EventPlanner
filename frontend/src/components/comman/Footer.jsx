"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "@/assets/logo.jpg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Footer = () => {
  const { token } = useSelector((state) => state.auth);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <footer className="bg-[#1d3432] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image src={logo} alt="not found" height={80} />

          <p className="text-white mt-3">
            We believe that it is all about the BIG DREAMS and the small
            details!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
            {token ? (
              <Link href="/admin/dashboard" className="hover:text-white">
                Admin Login
              </Link>
            ) : (
              <Link href="/login" className="hover:text-white">
                Admin Login
              </Link>
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
          <p className="flex items-center gap-2 text-white">
            <FaWhatsapp /> 7648855478
            <a
              href="tel:7648855478"
              className=" text-white hover:text-gray-500"
            >
              (WhatsApp)
            </a>
          </p>
          <p className="flex items-center gap-2 text-white mt-2">
            <FaPhoneAlt /> 9425727907
          </p>
          <p className="flex items-center gap-2 text-white mt-2">
            <FaEnvelope /> adityaeventplanner56@gmail.com
          </p>
          <p className="flex items-start gap-2 text-white mt-4">
            <FaMapMarkerAlt className="mt-1" />
            G81 Shewta Complex, E-8 Arera Colony, Trilanga, Bhopal, Madhya
            Pradesh 462039
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-white">
        <p>Developed By I Next Ets ❤️</p>
        <Link href="#" className="hover:text-white">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
