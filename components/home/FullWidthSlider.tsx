"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/lonson-tours-slide.png",
    title: "London Tour",
  },
  {
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/classy-minibus.png",
    title: "London Tour",
  },
];

export default function FullWidthSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  return (
    <section className="full-w-slider content-fonts desk-block py-10">
      <div className="slider-full relative">
        <Slider {...settings}>
          {slides.map((slide, idx) => (
            <div key={idx} className="slide-item-full relative">
              <img src={slide.image} alt={slide.title} className="w-full h-[600px] object-cover" />
              <div className="slide-title-full absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-4xl font-medium text-center w-full">
                {slide.title}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}