import React from "react";
import Link from "next/link";

export default function GetQuoteCTA() {
  return (
    <section className="get-quote content-fonts bg-dark bg-[#252525] text-white py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="get-quote-inner flex flex-col items-center gap-6">
          <div className="get-quote-desc text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold">Get a Minibus and Coach Hire Quote Today!</h2>
            <p>Festival Season is Here! Travel Together with Our Coach Hire Solutions for the Ultimate Rave Journey!</p>
          </div>
          <Link
            href="/get-quick-quote"
            className="btn btn-white inline-flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full"
          >
            <span>Request a Free Quote</span>
            <img src="https://travelforce.co.uk/wp-content/uploads/2025/05/arrow-right-b.svg" alt="" className="w-4 h-4" />
          </Link>
        </div>
        <div className="line-diff mt-8 h-px bg-white/10"></div>
      </div>
    </section>
  );
}