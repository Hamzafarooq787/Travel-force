"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Card data from original HTML
const occasions = [
  {
    title: "London Tour",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/london-tours.png",
    link: "/service/london-tours",
  },
  {
    title: "Night Outs",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/night-out.png",
    link: "/service/nights-out",
  },
  {
    title: "Sports Day",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-7.png",
    link: "/service/sporting-hire",
  },
  {
    title: "Wedding Hire",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-8.png",
    link: "/service/weddings",
  },
  {
    title: "Airport Transfer",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-9-1.png",
    link: "/service/airport-transfer",
  },
  {
    title: "Corporate Transfer",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-10.png",
    link: "/service/corporate-travel",
  },
  {
    title: "Group Travel",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-11.png",
    link: "/service/school-transport",
  },
  {
    title: "Film, TV and Media",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-12.png",
    link: "/service/film-tv-media",
  },
];

export default function OccasionCards() {
  return (
    <section className="ocassion-main content-fonts py-8 md:py-10 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    {/* TOP TEXT */}
    <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">

      <h2 className="text-2xl md:text-3xl font-bold text-[#1f2937]">
        What’s the Occasion?
      </h2>

      <p className="text-gray-600 mt-2 text-sm md:text-base">
        Choosing Travel Force means opting for excellence in every aspect of your group transportation.
      </p>

    </div>

    {/* DESKTOP GRID */}
    <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">

      {occasions.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          className="group relative overflow-hidden rounded-lg block h-48 md:h-52"
        >

          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />

          {/* overlay for readability */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

          <div className="absolute bottom-3 left-3 text-white">

            <h5 className="flex items-center gap-2 text-base md:text-lg font-semibold">

              {item.title}

              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition">
                <img
                  src="https://travelforce.co.uk/wp-content/uploads/2025/05/Arrow-Right.svg"
                  alt="arrow"
                  className="w-4 h-4"
                />
              </span>

            </h5>

          </div>

        </Link>
      ))}

    </div>

    {/* MOBILE GRID */}
    <div className="md:hidden grid grid-cols-2 gap-3">

      {occasions.slice(0, 4).map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          className="group relative overflow-hidden rounded-lg block h-36"
        >

          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-2 left-2 text-white">

            <h5 className="text-sm font-semibold">
              {item.title}
            </h5>

          </div>

        </Link>
      ))}

    </div>

    {/* MOBILE BUTTON */}
    <div className="md:hidden mt-5 text-center">

      <Link
        href="/our-services"
        className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black px-5 py-2 rounded-full transition"
      >

        <span className="text-sm font-medium">View More</span>

        <img
          src="https://travelforce.co.uk/wp-content/uploads/2025/05/Arrow-Right.svg"
          alt="arrow"
          className="w-4 h-4"
        />

      </Link>

    </div>

  </div>

</section>
  );
}