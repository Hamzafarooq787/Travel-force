"use client";
import React from "react";
import Link from "next/link";

export default function BookingSteps() {
  return (
   <section className="ocassion-main content-fonts book-easy py-10 md:py-12 bg-[#f7f7f7]">

  <div className="max-w-7xl mx-auto px-4">

    {/* TITLE */}
    <div className="text-center max-w-2xl mx-auto mb-6">

      <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937]">
        Booking Made Easy
      </h2>

    </div>

    {/* CARDS */}
    <div className="flex flex-col md:flex-row justify-between gap-8 w-full">

      {/* CARD 1 */}
      <div className="flex flex-col items-center text-center w-full md:w-1/3 relative">

        <img
          src="https://travelforce.co.uk/wp-content/uploads/2025/10/choose-trip-image.gif"
          className="w-[130px] h-[130px] rounded-full border border-gray-200 bg-white p-5 object-contain"
        />

        <h4 className="text-lg md:text-xl font-semibold text-[#1f2937] mt-4">
          Choose Your Trip
        </h4>

        <p className="text-gray-600 text-sm mt-2">
          Just give us a shout with your dates, passenger count, and any special needs.
        </p>

      </div>

      {/* CARD 2 */}
      <div className="flex flex-col items-center text-center w-full md:w-1/3 relative">

        <img
          src="https://travelforce.co.uk/wp-content/uploads/2025/10/Get-a-Quote-image.gif"
          className="w-[130px] h-[130px] rounded-full border border-gray-200 bg-white p-5 object-contain"
        />

        <h4 className="text-lg md:text-xl font-semibold text-[#1f2937] mt-4">
          Get a Quote
        </h4>

        <p className="text-gray-600 text-sm mt-2">
          We’ll get back to you fast with a clear quote.
        </p>

      </div>

      {/* CARD 3 */}
      <div className="flex flex-col items-center text-center w-full md:w-1/3 relative">

        <img
          src="https://travelforce.co.uk/wp-content/uploads/2025/10/Confirm-Travel-image.gif"
          className="w-[130px] h-[130px] rounded-full border border-gray-200 bg-white p-5 object-contain"
        />

        <h4 className="text-lg md:text-xl font-semibold text-[#1f2937] mt-4">
          Confirm & Travel
        </h4>

        <p className="text-gray-600 text-sm mt-2">
          We send a detailed confirmation, so you know exactly what’s happening.
        </p>

      </div>

    </div>

    {/* BUTTON */}
    <div className="text-center mt-6">

      <Link
        href="/get-quick-quote"
        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-full transition"
      >
        <span className="font-medium">Book Now</span>
      </Link>

    </div>

  </div>
</section>
  );
}