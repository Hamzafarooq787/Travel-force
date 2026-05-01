"use client";
import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Vehicle data (extracted from the HTML)
const vehicles = [
  {
    image: "https://travelforce.co.uk/wp-content/uploads/2025/06/TF-Image-3.png",
    title: "8 Seater MPV",
    badge: "(Hire with Driver)",
    desc: "Comfortable and compact people carrier, ideal for small group travel.",
    link: "/vehicle/8-seater-mpv",
  },
  {
    image: "https://travelforce.co.uk/wp-content/uploads/2025/07/image-2.jpg",
    title: "16 Seater Standard Minibus",
    badge: "(Hire with Driver + Self Drive)",
    desc: "Practical and efficient minibus transport for medium-sized group journeys.",
    link: "/vehicle/16-seater-standard-minibus",
  },
  {
    image: "https://travelforce.co.uk/wp-content/uploads/2025/06/image-26.png",
    title: "16 Seater VIP Minibus",
    badge: "(Hire with Driver)",
    desc: "Premium luxury minibus offering luxury seating and added comfort for small groups.",
    link: "/vehicle/16-seater-vip-minibus",
  },
  {
    image: "https://travelforce.co.uk/wp-content/uploads/2025/06/TF-image.png",
    title: "22 Seater Minibus",
    badge: "(Hire with Driver)",
    desc: "Spacious mid-size minibus suited for group tours and events.",
    link: "/vehicle/22-seater-minibus",
  },
  {
    image: "https://travelforce.co.uk/wp-content/uploads/2025/09/image-1.jpg",
    title: "34-37 Seater Coach",
    badge: "(Hire with Driver)",
    desc: "Mid-range coach combining capacity with comfort for group travel.",
    link: "/vehicle/34-37-seater-coach",
  },
  {
    image: "https://travelforce.co.uk/wp-content/uploads/2025/06/image-29.png",
    title: "49-57 Seater Coach",
    badge: "(Hire with Driver)",
    desc: "Full-size coach perfect for large groups, tours, or corporate transport.",
    link: "/vehicle/49-57-seater-coach",
  },
  {
    image: "https://travelforce.co.uk/wp-content/uploads/2026/02/TF-image.jpg",
    title: "86 Seater Coach",
    badge: "(Hire with Driver)",
    desc: "Coaches designed for large groups, guided tours, and corporate travel.",
    link: "/vehicle/86-seater-coach",
  },
];

export default function VehicleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="hero-below-slider content-fonts bg-[#1f2937] py-6 md:py-8">

  <div className="max-w-7xl mx-auto px-3">

    <div className="hero-below-slider-inner -mx-1">

      <Slider {...settings}>

        {vehicles.map((vehicle, idx) => (
          <div key={idx} className="px-1">

            <Link href={vehicle.link} className="block">

              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition h-full">

                {/* IMAGE (BIG + CLEAN) */}
                <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-full object-cover scale-105"
                  />
                </div>

                {/* TEXT (THEME FIXED) */}
                <div className="p-3 text-center">

                  <h6 className="text-amber-500 font-semibold text-sm md:text-base leading-tight">
                    {vehicle.title} {vehicle.badge}
                  </h6>

                  <p className="text-gray-600 text-xs md:text-sm mt-1">
                    {vehicle.desc}
                  </p>

                </div>

              </div>

            </Link>

          </div>
        ))}

      </Slider>

    </div>

  </div>

</section>
  );
}