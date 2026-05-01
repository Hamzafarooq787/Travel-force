"use client";
import { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import SelfDriveVehicleGallery from "@/components/self-drive/SelfDriveVehicleGallery";
import SelfDriveHireRates from "@/components/self-drive/SelfDriveHireRates";

export default function SelfDrivePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="serv-hero content-fonts relative">
          <div
            className="serv-inner-hero h-[430px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('https://travelforce.co.uk/wp-content/uploads/2025/06/04.jpg')",
            }}
          >
            <div className="serv-hero-info text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                Self Drive Hire
              </h1>
              <p className="text-lg mt-4 max-w-2xl mx-auto">
                Take the wheel with our 17‑seater minibus – perfect for groups who want complete flexibility.
              </p>
            </div>
          </div>
        </section>
      <SelfDriveVehicleGallery />
   <SelfDriveHireRates/>
   <section className="self-drive-vehicle hire-rate-outer content-fonts book-req-main py-10 md:py-16">
  <div className="container mx-auto px-4">
    <div className="hire-rates-inner max-w-6xl mx-auto">
      {/* Heading */}
      <div className="hire-rates-top text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#252525]">Booking Requirements</h2>
        <p className="text-[#3D4C5E] mt-2">Everything you need to know before booking</p>
      </div>

      {/* Three Cards Grid */}
      <div className="hire-rates-bottom">
        <div className="hire-rate-b-inner grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Requirements */}
          <div className="hire-rate-f border border-[#D8D8D8] bg-white rounded-lg overflow-hidden">
            <div className="hire-f-top bg-[#F0F0F0] text-[#252525] py-4 text-center">
              <h4 className="text-lg font-semibold">Requirements</h4>
            </div>
            <div className="hire-f-bottom p-6 md:p-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[#3D4C5E]">
                  <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Group-11.svg" alt="" className="w-5 h-5" />
                  <span>Minimum age: 25 years old</span>
                </li>
                <li className="flex items-center gap-3 text-[#3D4C5E]">
                  <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Vector-6.svg" alt="" className="w-5 h-5" />
                  <span>Must hold a D1 category licence</span>
                </li>
                <li className="flex items-center gap-3 text-[#3D4C5E]">
                  <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Vector-6.svg" alt="" className="w-5 h-5" />
                  <span>Proof of address and identity required</span>
                </li>
                <li className="flex items-center gap-3 text-[#3D4C5E]">
                  <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Group-5.svg" alt="" className="w-5 h-5" />
                  <span>Valid UK driving licence for at least 2 years</span>
                </li>
                <li className="flex items-center gap-3 text-[#3D4C5E]">
                  <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Group-7.svg" alt="" className="w-5 h-5" />
                  <span>Driving licence must be physically presented</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: What You’ll Need to Bring */}
          <div className="hire-rate-s border border-[#D8D8D8] bg-white rounded-lg overflow-hidden">
            <div className="high-s-top bg-[#EDFDF1] text-[#145522] py-4 flex justify-center items-center gap-2">
              <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Group-8.svg" alt="" className="w-6 h-6" />
              <h4 className="text-lg font-semibold">What You'll Need to Bring</h4>
            </div>
            <div className="hire-s-bottom p-6 md:p-8">
              <ul className="space-y-4 pl-0 list-none">
                <li className="relative pl-7 text-[#252525] text-base">
                  <span className="absolute left-0 top-1 w-2 h-2 bg-black rounded-full"></span>
                  Payment Method for Deposit (Card Only)
                </li>
                <li className="relative pl-7 text-[#252525] text-base">
                  <span className="absolute left-0 top-1 w-2 h-2 bg-black rounded-full"></span>
                  DVLA Licence Check Code
                </li>
                <li className="relative pl-7 text-[#252525] text-base">
                  <span className="absolute left-0 top-1 w-2 h-2 bg-black rounded-full"></span>
                  Two Proofs of Address (dated within 90 days)
                </li>
                <li className="relative pl-7 text-[#252525] text-base">
                  <span className="absolute left-0 top-1 w-2 h-2 bg-black rounded-full"></span>
                  National Insurance Number
                </li>
                <li className="relative pl-7 text-[#252525] text-base">
                  <span className="absolute left-0 top-1 w-2 h-2 bg-black rounded-full"></span>
                  Full UK Driving Licence (Photocard)
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Important Notes */}
          <div className="hire-rate-t border border-[#D8D8D8] bg-white rounded-lg overflow-hidden">
            <div className="high-s-top high-t-top bg-[#FFF5E8] text-[#891C00] py-4 flex justify-center items-center gap-2">
              <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Group-9.svg" alt="" className="w-6 h-6" />
              <h4 className="text-lg font-semibold">Important Notes</h4>
            </div>
            <div className="hire-s-bottom p-6 md:p-8">
              <ul className="space-y-3 pl-0 list-none">
                <li className="relative pl-7 text-[#3D4C5E] text-sm">
                  <span className="absolute left-0 top-1 w-1.5 h-1.5 bg-[#891C00] rounded-full"></span>
                  Vehicle must be returned with the same fuel level as collected
                </li>
                <li className="relative pl-7 text-[#3D4C5E] text-sm">
                  <span className="absolute left-0 top-1 w-1.5 h-1.5 bg-[#891C00] rounded-full"></span>
                  Weekend hire requires a minimum of two days
                </li>
                <li className="relative pl-7 text-[#3D4C5E] text-sm">
                  <span className="absolute left-0 top-1 w-1.5 h-1.5 bg-[#891C00] rounded-full"></span>
                  Additional charges may apply for late returns or damage
                </li>
                <li className="relative pl-7 text-[#3D4C5E] text-sm">
                  <span className="absolute left-0 top-1 w-1.5 h-1.5 bg-[#891C00] rounded-full"></span>
                  EU travel not permitted on self-drive hires
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* You can add more sections here: vehicle gallery, location listing, FAQ, etc. */}
      </main>
      <Footer />
    </>
  );
}

function SelfDriveContent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Self-drive booking request submitted (demo).");
    // Here you would send data to your backend
  };

  return (
    <section className="self-drive-content py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side: description and conditions */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#252525] mb-4">
              Explore London on Your Own Terms
            </h2>
            <p className="text-[#3D4C5E] mb-4">
              Our self‑drive minibus hire gives you the freedom to create your own itinerary. Perfect for
              family holidays, group outings, or any adventure where you want the flexibility to stop when
              and where you like.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold text-[#252525] mb-3">Hire Conditions:</h3>
              <ul className="space-y-2 text-[#3D4C5E] list-disc pl-5">
                <li>Pick‑up and return time is fixed at 8:00 AM</li>
                <li>D1 driving licence is required</li>
                <li>Only 17 Seater Minibus available</li>
                <li>Fuel policy: full-to-full</li>
                <li>Minimum age 25 with clean driving record</li>
                <li>
                  See our <a href="/self-drive" className="text-blue-600 underline">full terms</a> for more details
                </li>
              </ul>
            </div>
          </div>

          {/* Right side: quote form */}
          <div className="bg-[#f0f0f0] p-6 md:p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-[#252525] text-center mb-6">
              Get Your Self‑Drive Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#252525] mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-2 rounded border border-gray-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#252525] mb-1">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-2 rounded border border-gray-300 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#252525] mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded border border-gray-300 bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#252525] mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 rounded border border-gray-300 bg-white"
                  placeholder="e.g. 07700 900123"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#252525] mb-1">Pick‑up date *</label>
                  <input
                    type="date"
                    required
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full p-2 rounded border border-gray-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#252525] mb-1">Return date *</label>
                  <input
                    type="date"
                    required
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full p-2 rounded border border-gray-300 bg-white"
                  />
                </div>
              </div>

              <div className="text-sm text-gray-500 bg-white p-2 rounded">
                Vehicle type: <strong>17 Seater Minibus</strong> (fixed)
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3 rounded-full hover:bg-gray-800 transition mt-4"
              >
                Request a Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}