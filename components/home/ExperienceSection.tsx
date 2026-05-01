"use client";
import React from "react";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="img-text content-fonts classy-minibus py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="img-text-inner flex flex-col gap-6 md:gap-8">
          <div className="img-text-inner-top flex flex-col md:flex-row justify-between gap-6">
            <div className="img-text-left md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold text-[#252525]">
                You're Not Just Hiring a Ride—You're Creating an Experience
              </h2>
            </div>
            <div className="img-text-right md:w-2/3">
              <p className="text-[#3D4C5E]">
                At Travel Force, we get it—group travel isn’t just about getting from point A to point B. It’s about the in-between moments. The laughs on the road, the quiet naps after a long event, the convenience of knowing you’re all in one vehicle heading the same direction.
              </p>
            </div>
          </div>
          <div className="img-text-inner-bottom">
            <div className="img-text-img">
              <img
                src="https://travelforce.co.uk/wp-content/uploads/2025/05/classy-minibus.png"
                alt="Classy Minibus"
                className="desk-block w-full hidden md:block"
              />
              <img
                src="https://travelforce.co.uk/wp-content/uploads/2025/06/classy-minibus-mob.png"
                alt="Classy Minibus"
                className="mob-block w-full md:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}