"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hireDropdownOpen, setHireDropdownOpen] = useState(false);

  return (
    <header id="masthead" className="site-header content-fonts bg-white shadow-sm">
      {/* Top bar */}
      <div className="header-top border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="header-top-inner flex justify-between items-center py-3">
            {/* Logo */}
            <div className="header-logo">
              <Link href="/" className="custom-logo-link">
                <img
                  src="https://travelforce.co.uk/wp-content/uploads/2025/05/travel-logo.png"
                  alt="Travel Force London"
                  width={276}
                  height={49}
                  className="h-auto max-w-[180px] md:max-w-[230px]"
                />
              </Link>
            </div>

            {/* Desktop buttons */}
            <div className="header-menu-btn hidden md:flex items-center gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=4402084711111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-50 transition"
              >
                <img src="https://travelforce.co.uk/wp-content/uploads/2025/05/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="bg-black text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-800 transition"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <div className="mobile-menu md:hidden">
              <button onClick={() => setMobileMenuOpen(true)} className="p-2">
                <img
                  src="https://travelforce.co.uk/wp-content/uploads/2025/05/menu.svg"
                  alt="Menu"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="header-bottom hidden md:block border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="header-bottom-inner">
            <nav className="flex justify-center items-center space-x-8 py-3">
              <Link href="/" className="text-gray-700 hover:text-black font-medium">
                Home
              </Link>

              {/* Hire With Driver Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setHireDropdownOpen(true)}
                onMouseLeave={() => setHireDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-black font-medium">
                  Hire With Driver
                  <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {hireDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-20">
                    <Link
                      href="/minibus-hire-london"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Minibus Hire
                    </Link>
                    <Link
                      href="/coach-hire-london"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Coach Hire
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/self-drive" className="text-gray-700 hover:text-black font-medium">
                Self Drive Hire
              </Link>
              <Link href="/our-services" className="text-gray-700 hover:text-black font-medium">
                Our Services
              </Link>
              <Link href="/our-vehicles" className="text-gray-700 hover:text-black font-medium">
                Our Vehicles
              </Link>
              <Link href="/faqs" className="text-gray-700 hover:text-black font-medium">
                Faq's
              </Link>
              <Link href="/reviews" className="text-gray-700 hover:text-black font-medium">
                Reviews
              </Link>
              {/* ✅ About link added */}
              <Link href="/about" className="text-gray-700 hover:text-black font-medium">
                About
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu (drawer) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <img
                src="https://travelforce.co.uk/wp-content/uploads/2025/05/travel-logo.png"
                alt="Logo"
                className="h-8 w-auto"
              />
              <button onClick={() => setMobileMenuOpen(false)}>
                <img
                  src="https://travelforce.co.uk/wp-content/uploads/2025/05/cross.svg"
                  alt="Close"
                  className="w-5 h-5"
                />
              </button>
            </div>

            {/* Mobile nav items */}
            <ul className="space-y-4">
              <li><Link href="/" className="block text-gray-800" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li>
                <button
                  onClick={() => {
                    // Toggle submenu – you can add state for this if needed
                    alert("Minibus/Coach hire options would open. For now, use links below.");
                  }}
                  className="flex justify-between items-center w-full text-gray-800"
                >
                  Hire With Driver
                </button>
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/minibus-hire-london" className="block text-gray-600 py-1" onClick={() => setMobileMenuOpen(false)}>
                    Minibus Hire
                  </Link>
                  <Link href="/coach-hire-london" className="block text-gray-600 py-1" onClick={() => setMobileMenuOpen(false)}>
                    Coach Hire
                  </Link>
                </div>
              </li>
              <li><Link href="/self-drive" className="block text-gray-800" onClick={() => setMobileMenuOpen(false)}>Self Drive Hire</Link></li>
              <li><Link href="/our-services" className="block text-gray-800" onClick={() => setMobileMenuOpen(false)}>Our Services</Link></li>
              <li><Link href="/our-vehicles" className="block text-gray-800" onClick={() => setMobileMenuOpen(false)}>Our Vehicles</Link></li>
              <li><Link href="/faqs" className="block text-gray-800" onClick={() => setMobileMenuOpen(false)}>Faq's</Link></li>
              <li><Link href="/reviews" className="block text-gray-800" onClick={() => setMobileMenuOpen(false)}>Reviews</Link></li>
              {/* ✅ About link added in mobile menu */}
              <li><Link href="/about" className="block text-gray-800" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link
                href="/contact"
                className="block w-full text-center bg-black text-white rounded-full py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}