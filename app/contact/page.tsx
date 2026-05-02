"use client";
import { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function ContactPage() {
  // Form state (simplified – you can expand as needed)
  const [hireType, setHireType] = useState<"with-driver" | "self-drive">("with-driver"); // typed
  const [journeyType, setJourneyType] = useState<"return" | "oneway">("return");
  const [passengers, setPassengers] = useState("");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [outboundDate, setOutboundDate] = useState("");
  const [outboundTime, setOutboundTime] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted (demo) – you can connect to your backend.");
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="serv-hero content-fonts relative">
          <div
            className="serv-inner-hero h-[430px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('https://travelforce.co.uk/wp-content/uploads/2025/06/image-6.jpg')",
            }}
          >
            <div className="serv-hero-info text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Contact Us</h1>
              <p className="text-lg md:text-xl mt-4 text-gray-100">
                Professional coach and minibus hire services across London and beyond
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information + Form Section */}
        <section className="contact-main content-fonts py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="contact-main-inner grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side: Contact info cards */}
              <div className="contact-desc flex flex-col gap-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#252525]">Contact Information</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                  {/* Phone */}
                  <li className="p-4">
                    <a href="tel:02084711111" target="_blank" className="flex gap-6 items-start no-underline">
                      <div className="c-img bg-[#252525] p-4 rounded">
                        <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/button-icons.svg" alt="phone" className="w-6 h-6" />
                      </div>
                      <div className="c-desc">
                        <h4 className="text-xl font-semibold text-[#252525]">Phone</h4>
                        <p className="text-2xl text-[#3d4c5e]">02084711111</p>
                        <h6 className="text-sm text-gray-500">8:00 AM - 8:00 PM</h6>
                      </div>
                    </a>
                  </li>
                  {/* Email */}
                  <li className="p-4">
                    <a href="mailto:info@travelforce.co.uk" target="_blank" className="flex gap-6 items-start no-underline">
                      <div className="c-img bg-[#252525] p-4 rounded">
                        <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/button-icons-1.svg" alt="email" className="w-6 h-6" />
                      </div>
                      <div className="c-desc">
                        <h4 className="text-xl font-semibold text-[#252525]">Email</h4>
                        <p className="text-2xl text-[#3d4c5e]">info@travelforce.co.uk</p>
                      </div>
                    </a>
                  </li>
                  {/* WhatsApp */}
                  <li className="p-4">
                    <a href="https://api.whatsapp.com/send?phone=4402084711111" target="_blank" className="flex gap-6 items-start no-underline">
                      <div className="c-img bg-[#252525] p-4 rounded">
                        <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Vector-1.svg" alt="whatsapp" className="w-6 h-6" />
                      </div>
                      <div className="c-desc">
                        <h4 className="text-xl font-semibold text-[#252525]">WhatsApp</h4>
                        <p className="text-2xl text-[#3d4c5e]">Chat with Us</p>
                      </div>
                    </a>
                  </li>
                  {/* Address */}
                  <li className="p-4">
                    <a href="https://maps.app.goo.gl/6PX7m79W5yYtRyFG9" target="_blank" className="flex gap-6 items-start no-underline">
                      <div className="c-img bg-[#252525] p-4 rounded">
                        <img src="https://travelforce.co.uk/wp-content/uploads/2025/06/Group-1.svg" alt="address" className="w-6 h-6" />
                      </div>
                      <div className="c-desc">
                        <h4 className="text-xl font-semibold text-[#252525]">Address</h4>
                        <p className="text-2xl text-[#3d4c5e]">Jhumat House 160 London Rd Barking IG11 8BB</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right side: Quick Quote Form */}
              <div className="contact-form-inner">
                <div className="homeform bg-white p-6 md:p-8 rounded-xl shadow-md">
                  <div className="form-heading-wrapper text-center mb-6">
                    <h3 className="text-2xl font-bold uppercase text-[#252525]">get quick quote now</h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Hire Type */}
                    <div>
                      <label className="block text-sm font-medium text-[#252525] mb-1">Hire Type</label>
                      <select
                        value={hireType}
                        onChange={(e) => setHireType(e.target.value as "with-driver" | "self-drive")}
                        className="w-full p-2 rounded border border-gray-300 bg-white"
                      >
                        <option value="with-driver">Hire With Driver</option>
                        <option value="self-drive">Self Drive</option>
                      </select>
                    </div>

                    {/* For Hire With Driver: addresses, journey type, passengers, dates */}
                    {hireType === "with-driver" && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-[#252525] mb-1">
                            Departure Address <span className="text-xs text-gray-500">(To and from London only)</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter departure address"
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)}
                            className="w-full p-2 rounded border border-gray-300"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#252525] mb-1">Destination Address</label>
                          <input
                            type="text"
                            placeholder="Enter destination address"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="w-full p-2 rounded border border-gray-300"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#252525] mb-1">Journey Type</label>
                            <select
                              value={journeyType}
                              onChange={(e) => setJourneyType(e.target.value as "return" | "oneway")}
                              className="w-full p-2 rounded border border-gray-300"
                            >
                              <option value="return">Return</option>
                              <option value="oneway">One Way</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#252525] mb-1">No. Of Passengers</label>
                            <select
                              value={passengers}
                              onChange={(e) => setPassengers(e.target.value)}
                              className="w-full p-2 rounded border border-gray-300"
                            >
                              <option value="">Select</option>
                              {[...Array(100).keys()].map((i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#252525] mb-1">Outbound Date</label>
                            <input
                              type="date"
                              value={outboundDate}
                              onChange={(e) => setOutboundDate(e.target.value)}
                              className="w-full p-2 rounded border border-gray-300"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#252525] mb-1">Outbound Time</label>
                            <input
                              type="time"
                              value={outboundTime}
                              onChange={(e) => setOutboundTime(e.target.value)}
                              className="w-full p-2 rounded border border-gray-300"
                              required
                            />
                          </div>
                        </div>
                        {journeyType === "return" && (
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-[#252525] mb-1">Return Date</label>
                              <input
                                type="date"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                                className="w-full p-2 rounded border border-gray-300"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-[#252525] mb-1">Return Time</label>
                              <input
                                type="time"
                                value={returnTime}
                                onChange={(e) => setReturnTime(e.target.value)}
                                className="w-full p-2 rounded border border-gray-300"
                                required
                              />
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {/* Self Drive Fields */}
                    {hireType === "self-drive" && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="p-2 rounded border border-gray-300"
                          />
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="p-2 rounded border border-gray-300"
                          />
                        </div>
                        <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full p-2 rounded border border-gray-300"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full p-2 rounded border border-gray-300"
                        />
                        <div>
                          <label className="block text-sm font-medium text-[#252525] mb-1">Vehicle Type</label>
                          <input
                            type="text"
                            value="17 Seater Minibus"
                            readOnly
                            className="w-full p-2 rounded border border-gray-300 bg-gray-100"
                          />
                        </div>
                        <div className="text-xs text-gray-500 space-y-1">
                          <p>✓ Pick up and return time is 8:00 AM</p>
                          <p>✓ D1 license is required</p>
                          <p>✓ Only 17 Seater Minibus Available</p>
                          <p>✓ <a href="/self-drive" className="underline">Self drive page</a> for more info</p>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-black text-white font-bold py-2 rounded-full hover:bg-gray-800 transition"
                    >
                      {hireType === "with-driver" ? "Next" : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section (light background) */}
        <section className="get-quote content-fonts bg-light bg-gray-50 py-10 md:py-16 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="get-quote-inner flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
              <div className="get-quote-desc">
                <h2 className="text-2xl md:text-3xl font-bold text-[#252525]">
                  Get a Minibus and Coach Hire Quote Today!
                </h2>
                <p className="text-[#3D4C5E]">
                  Festival Season is Here! Travel Together with Our Coach Hire Solutions for the Ultimate Rave Journey!
                </p>
              </div>
              <a
                href="/get-quick-quote"
                className="btn btn-white inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
              >
                <span>Request a Free Quote</span>
                <img
                  src="https://travelforce.co.uk/wp-content/uploads/2025/05/arrow-right-b.svg"
                  alt="arrow"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="line-diff mt-10 h-px bg-gray-200"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
