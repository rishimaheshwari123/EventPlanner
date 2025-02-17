"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { navlink } from "@/data/navlink";
import Image from "next/image";
import logo from "@/assets/log.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <nav className="bg-[#1d3432] border-b-2 text-black fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-3">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="w-[133px]">
            <Image src={logo} alt="not found" className="object-cover" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white">
            {navlink.map((nav) =>
              nav.submenu ? (
                <div
                  key={nav.id}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={nav.link}
                    className="relative text-[16px] uppercase flex items-center gap-1 transition-all duration-300 hover:text-white"
                  >
                    {nav.name} <FaChevronDown size={14} />
                  </Link>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute -left-14 top-5  bg-opacity-95 pt-7 w-64 bg-[#1d3432] text-white shadow-lg rounded-lg">
                      {nav.submenu.map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.link}
                          className="block px-4 py-3 hover:bg-[#d2e46b] hover:text-black  transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={nav.id}
                  href={nav.link}
                  className="relative text-[16px] uppercase transition-all duration-300 hover:text-white"
                >
                  {nav.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#1d3432] text-white shadow-md border-t border-[#d9c7ad] z-50">
          {navlink.map((nav) => (
            <div key={nav.id} className="border-b border-[#d9c7ad]">
              <div className="flex justify-between items-center px-4 py-2">
                <Link
                  href={nav.link}
                  className="block text-lg hover:text-[#d9c7ad] transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {nav.name}
                </Link>

                {/* Mobile Dropdown Toggle */}
                {nav.submenu && (
                  <button
                    onClick={() =>
                      setMobileDropdown(mobileDropdown === nav.id ? null : nav.id)
                    }
                    className="text-white"
                  >
                    {mobileDropdown === nav.id ? (
                      <FaChevronUp size={18} />
                    ) : (
                      <FaChevronDown size={18} />
                    )}
                  </button>
                )}
              </div>

              {/* Mobile Submenu */}
              {nav.submenu && mobileDropdown === nav.id && (
                <div className="pl-6 bg-[#2a4a48]">
                  {nav.submenu.map((sub) => (
                    <Link
                      key={sub.id}
                      href={sub.link}
                      className="block py-2 text-sm hover:text-[#d9c7ad]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
