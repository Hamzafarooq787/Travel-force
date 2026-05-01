"use client";
import React from "react";
import Link from "next/link";

export default function WhyChooseUs() {
  const reasons = [
    {
      gif: "https://travelforce.co.uk/wp-content/uploads/2025/10/Book-Now-Pay-Later-image.gif",
      title: "Book Now Pay Later",
      desc: "Want to book today but can’t pay till later ? Thats absolutely fine. We will take your booking on secure you a place and discuss payment terms after.",
    },
    {
      gif: "https://travelforce.co.uk/wp-content/uploads/2025/10/Cashless-Travel-image.gif",
      title: "Cashless Travel",
      desc: "Travel Force is now cashless. Being Cashless gives the client better security considering all card transactions are traceable and carry a guarantee from the bank.",
    },
    {
      gif: "https://travelforce.co.uk/wp-content/uploads/2025/10/WhatsApp-Chat-image.gif",
      title: "WhatsApp Chat",
      desc: "Chat to a agent directly from your phone with lightening speed. This is the fastest way to get speaking to someone for any and all queries",
    },
    {
      gif: "https://travelforce.co.uk/wp-content/uploads/2025/12/ezgif-2ae43368fbd11335.webp",
      title: "Driver Contact:",
      desc: "Direct human contact available to your driver a day before travel for peace mind.",
    },
    {
      gif: "https://travelforce.co.uk/wp-content/uploads/2025/12/ezgif-2f6c1c1bc11660b5.webp",
      title: "Last Minute Booking",
      desc: "Let down by others, don’t worry we will make your event a success.",
    },
    {
      gif: "https://travelforce.co.uk/wp-content/uploads/2025/12/ezgif-2019c7db0fe0605e.webp",
      title: "24/7 Emergency Contact",
      desc: "Available for emergencies only via WhatsApp business chat.",
    },
    {
      gif: "https://travelforce.co.uk/wp-content/uploads/2025/12/ezgif-273e31f92d25e51c.webp",
      title: "Excellent Customer Service",
      desc: "Travel Force has more than a thousand Excellent Reviews online making us number 1 on Trust Pilot.",
    },
    {
      gif: "https://travelforce.co.uk/wp-content/uploads/2025/10/Full-Refund-image.gif",
      title: "Full Refund",
      desc: "Full refund for any booking cancelled seven days before travel.",
    },
  ];

  return (
    <section className="img-text content-fonts why-choose-us bg-[#F0F0F0] py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="img-text-inner flex flex-col gap-6 md:gap-8">
          {/* Header Section */}
          <div className="img-text-inner-top">
            <div className="img-text-left flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div className="img-title-text md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-[#252525]">
                  Need a Coach or Minibus? Here’s Why People Choose Us
                </h2>
              </div>
              <div className="header-menu-btn">
                <Link
                  href="/get-quick-quote"
                  className="btn btn-black inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full"
                >
                  <span>Book Now</span>
                  <img
                    src="https://travelforce.co.uk/wp-content/uploads/2025/05/Arrow-Right.svg"
                    alt="arrow"
                    className="w-4 h-4"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="img-text-inner-bottom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="why-choose-card bg-white p-6 md:p-8 flex flex-col items-start gap-6 rounded"
              >
                <div className="why-card-gif">
                  <img
                    src={item.gif}
                    alt={item.title}
                    className="w-[60px] h-[60px] object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="why-card-diff h-1 w-[90px] bg-black"></div>
                <div className="why-card-desc flex flex-col gap-3">
                  <h4 className="text-xl font-semibold text-[#252525]">{item.title}</h4>
                  <p className="text-[#3D4C5E] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}