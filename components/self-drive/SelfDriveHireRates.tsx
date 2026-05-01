"use client";
import React from "react";

export default function SelfDriveHireRates() {
  return (
    <section className="self-drive-vehicle hire-rate-outer content-fonts py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="hire-rates-inner max-w-4xl mx-auto">
          {/* Top heading */}
          <div className="hire-rates-top text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#252525]">
              Hire Rates &amp; What's Included
            </h2>
            <p className="text-[#3D4C5E] mt-2">Transparent pricing with no hidden fees</p>
          </div>

          {/* Bottom cards */}
          <div className="hire-rates-bottom">
            <div className="hire-rate-b-inner grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Hire Charge */}
              <div className="hire-rate-f bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col">
                <div className="hire-f-top border-b pb-4 mb-4">
                  <h4 className="text-xl font-bold text-[#252525]">Hire Charge</h4>
                </div>
                <div className="hire-f-bottom flex flex-col flex-grow">
                  <ul className="space-y-3 mb-6">
                    <li className="flex justify-between text-[#3D4C5E]">
                      <span>Single Day Hire</span>
                      <span className="font-semibold">£250</span>
                    </li>
                    <li className="flex justify-between text-[#3D4C5E]">
                      <span>Two Day Hire or More</span>
                      <span className="font-semibold">£200 per day</span>
                    </li>
                  </ul>
                  <div className="popup-selfhire header-menu-btn mt-auto">
                    <button
                      onClick={() => alert("Self-drive booking form would open")}
                      className="btn btn-black inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full w-full justify-center hover:bg-gray-800 transition"
                    >
                      <span>Book Now</span>
                      <img
                        src="https://travelforce.co.uk/wp-content/uploads/2025/05/Arrow-Right.svg"
                        alt="arrow"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2: What's Included */}
              <div className="hire-rate-s bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col">
                <div className="high-s-top flex items-center gap-2 border-b pb-4 mb-4">
                  <img
                    src="https://travelforce.co.uk/wp-content/uploads/2025/06/g-tick.svg"
                    alt="tick"
                    className="w-6 h-6"
                  />
                  <h4 className="text-xl font-bold text-[#252525]">What's Included</h4>
                </div>
                <div className="hire-s-bottom hire-t-bottom flex-grow">
                  <ul className="space-y-2 text-[#3D4C5E]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full"></span> UK Vehicle Insurance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full"></span> UK Breakdown Cover
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Unlimited Mileage
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Roadside Assistance
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Security Deposit */}
              <div className="hire-rate-t bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col">
                <div className="high-s-top high-t-top flex items-center gap-2 border-b pb-4 mb-4">
                  <img
                    src="https://travelforce.co.uk/wp-content/uploads/2025/06/security-icon.svg"
                    alt="security"
                    className="w-6 h-6"
                  />
                  <h4 className="text-xl font-bold text-[#252525]">Security Deposit</h4>
                </div>
                <div className="hire-s-bottom flex-grow">
                  <div className="hire-s-inner-top mb-3">
                    <h3 className="text-3xl font-bold text-[#252525]">£500</h3>
                  </div>
                  <p className="text-sm text-[#3D4C5E]">
                    Payable upon booking. Fully refundable if vehicle returned in agreed condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}