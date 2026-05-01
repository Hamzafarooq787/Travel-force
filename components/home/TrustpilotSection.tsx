"use client";
import React from "react";
import Image from "next/image";

export default function TrustpilotSection() {
  return (
    <section className="trustpilot image-trustpilot border-b border-gray-100">
      {/* Top image with dark background */}
      <div className="trustpilot-img bg-[#252525] py-3 text-center">
        <div className="container mx-auto px-4">
          <Image
            src="https://travelforce.co.uk/wp-content/uploads/2025/05/Trustpilot-2.png"
            alt="Trustpilot rating"
            width={200}
            height={40}
            className="mx-auto w-auto"
            priority
          />
        </div>
      </div>

      {/* Desktop widget (visible above 551px) */}
      <div className="trust-pilot-widget hidden max-[551px]:hidden py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div
            className="trustpilot-widget"
            data-locale="en-GB"
            data-template-id="53aa8912dec7e10d38f59f36"
            data-businessunit-id="61dd4656c5bdf934bb6b1e40"
            data-style-height="140px"
            data-style-width="100%"
            data-theme="light"
            data-stars="5"
            data-review-languages="en"
          ></div>
        </div>
      </div>

      {/* Mobile widget (visible below 551px) */}
      <div className="trust-pilot-widget mobile block max-[551px]:block hidden max-[551px]:block py-6">
        <div className="container mx-auto px-4">
          <div
            className="trustpilot-widget"
            data-locale="en-GB"
            data-template-id="53aa8912dec7e10d38f59f36"
            data-businessunit-id="61dd4656c5bdf934bb6b1e40"
            data-style-height="300px"
            data-style-width="100%"
            data-theme="light"
            data-stars="5"
            data-review-languages="en"
          ></div>
        </div>
      </div>
    </section>
  );
}