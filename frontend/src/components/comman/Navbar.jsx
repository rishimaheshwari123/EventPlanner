"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { navlink } from "@/data/navlink";
import Image from "next/image";
import logo from "@/assets/logo2.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FFCA24] border-b-2  text-black fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-3">
        <div className="flex justify-between h-16 items-center">
          <Image src={logo} alt="not found" className="w-32 h-20" height={80} />

          <div className="hidden md:flex space-x-8 text-white">
            {navlink.map((nav) => (
              <Link
                key={nav.id}
                href={nav.link}
                className="relative text-[18px] uppercase transition-all duration-300 hover:text-white after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md border-t border-[#d9c7ad] z-50">
          {navlink.map((nav) => (
            <Link
              key={nav.id}
              href={nav.link}
              className="block py-2 text-lg px-4 hover:text-[#d9c7ad] transition-all duration-300 border-b border-[#d9c7ad]"
              onClick={() => setMenuOpen(false)}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
