"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="site-footer" className="site-footer content-fonts bg-[#252525] text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="footer-content">
          {/* Top section: logo, pages, links, connect */}
          <div className="footer-top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="site-footer-top-logo">
              <img
                src="https://travelforce.co.uk/wp-content/uploads/2025/05/Logo-white.png"
                alt="Travel Force"
                width={276}
                height={48}
                className="max-w-full h-auto"
              />
            </div>

            {/* Our Pages */}
            <div className="site-footer-pages">
              <h4 className="text-lg font-semibold mb-4">Our Pages</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/our-services" className="text-[#C2C7D0] hover:text-white transition">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/our-vehicles" className="text-[#C2C7D0] hover:text-white transition">
                    Our Vehicles
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[#C2C7D0] hover:text-white transition">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="site-footer-links">
              <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/faqs" className="text-[#C2C7D0] hover:text-white transition">
                    FAQ’s
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-[#C2C7D0] hover:text-white transition">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-[#C2C7D0] hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="text-[#C2C7D0] hover:text-white transition">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[#C2C7D0] hover:text-white transition">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect with us */}
            <div className="site-footer-connect">
              <h4 className="text-lg font-semibold mb-4">Connect with us</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://maps.app.goo.gl/6PX7m79W5yYtRyFG9"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-2 text-[#C2C7D0] hover:text-white transition"
                  >
                    <img
                      src="https://travelforce.co.uk/wp-content/uploads/2025/05/fluent_location-28-filled.svg"
                      alt="location"
                      className="w-5 h-5"
                    />
                    Jhumat House, 160 London Rd, Barking IG11 8BB
                  </a>
                </li>
                <li>
                  <a
                    href="tel:02084711111"
                    className="flex items-center gap-2 text-[#C2C7D0] hover:text-white transition"
                  >
                    <img
                      src="https://travelforce.co.uk/wp-content/uploads/2025/06/button-icons.svg"
                      alt="phone"
                      className="w-5 h-5"
                    />
                    0208 471 1111
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@travelforce.co.uk"
                    className="flex items-center gap-2 text-[#C2C7D0] hover:text-white transition"
                  >
                    <img
                      src="https://travelforce.co.uk/wp-content/uploads/2025/05/ic_baseline-mail-2.svg"
                      alt="email"
                      className="w-5 h-5"
                    />
                    info@travelforce.co.uk
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h6 className="text-sm font-semibold mb-2">Follow us:</h6>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/travelforcelondon"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src="https://travelforce.co.uk/wp-content/uploads/2025/05/fb-footer.svg"
                      alt="Facebook"
                      className="w-6 h-6 hover:opacity-80 transition"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/travelforcelondon/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img
                      src="https://travelforce.co.uk/wp-content/uploads/2025/06/Instagram-1.svg"
                      alt="Instagram"
                      className="w-6 h-6 hover:opacity-80 transition"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom: copyright */}
          <div className="footer-bottom border-t border-white/10 mt-8 pt-6 text-center">
            <div className="site-copy-inner">
              <p className="text-[#C2C7D0] text-sm md:text-base">
                Copyright © 2026 Travelforce. All rights reserved | By{" "}
                <a
                  href="https://www.rvsmedia.co.uk/ecommerce-website-development/"
                  className="underline hover:no-underline"
                >
                  Ecommerce Agency
                </a>{" "}
                - RVS Media Ltd
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}