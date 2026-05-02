"use client";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const slides = [
  "https://travelforce.co.uk/wp-content/uploads/2025/06/hero_slideshow_image_1-comp.webp",
  "https://travelforce.co.uk/wp-content/uploads/2025/12/ezgif-2e5abbb60fe61a5a.webp",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hireType, setHireType] = useState<"with-driver" | "self-drive">("with-driver");
  const [journeyType, setJourneyType] = useState<"return" | "oneway">("return");
  const [passengers, setPassengers] = useState("");
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [outboundDate, setOutboundDate] = useState<Date | null>(null);
  const [outboundTime, setOutboundTime] = useState("");
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [returnTime, setReturnTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted (demo)");
  };

  return (
    <section className="home-hero relative font-sans">
      <div className="home-hero-inner relative">

        {/* Background */}
        <div className="slideshow-main relative h-[420px] sm:h-[520px] md:h-[650px] lg:h-[750px] overflow-hidden">
          {slides.map((src, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${idx === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <img src={src} alt="Hero" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/40">
          <div className="home-hero-info max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10 flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8 text-white h-full">

            {/* LEFT */}
            <div className="home-infoleft flex flex-col gap-4 md:gap-8 w-full lg:w-1/2 relative z-10">

              <div className="home-info-top">
                <div
                  className="trustpilot-widget scale-90 sm:scale-100 origin-left"
                  data-locale="en-GB"
                  data-template-id="53aa8807dec7e10d38f59f32"
                  data-businessunit-id="61dd4656c5bdf934bb6b1e40"
                  data-style-height="90px"
                  data-style-width="200px"
                  data-theme="light"
                ></div>
              </div>

              <div className="home-info-bottom space-y-3 md:space-y-4">

                <h1 className="text-[#fcd34d] text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">      Reliable Minibus & Coach Hire Across London
                </h1>

                <p className="text-amber-50 text-xs sm:text-sm md:text-base">
                  Travel comfortably with our professional drivers and well-maintained vehicles. Perfect for group trips, events, and city travel.
                </p>

              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="home-info-right w-full lg:w-5/12 bg-white/90 backdrop-blur-md rounded-xl p-4 sm:p-5 md:p-6 text-black shadow-md">

              <div className="homeform">
                <div className="form-heading-wrapper text-center mb-3 md:mb-4">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold uppercase text-dark">
                    Quick Quote
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">

                  {/* Hire Type */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1">Hire Type</label>
                    <select
                      value={hireType}
                      onChange={(e) => setHireType(e.target.value as "with-driver" | "self-drive")}
                      className="w-full p-2 text-sm rounded border"
                    >
                      <option value="with-driver">With Driver</option>
                      <option value="self-drive">Self Drive</option>
                    </select>
                  </div>

                  {/* WITH DRIVER */}
                  {hireType === "with-driver" && (
                    <>
                      <input
                        type="text"
                        placeholder="Pickup location"
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                        className="w-full p-2 text-sm rounded border"
                      />

                      <input
                        type="text"
                        placeholder="Drop-off location"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full p-2 text-sm rounded border"
                      />

                      <div className="grid grid-cols-2 gap-2 md:gap-3">
                        <select className="p-2 text-sm rounded border">
                          <option>Return</option>
                          <option>One Way</option>
                        </select>

                        <select className="p-2 text-sm rounded border">
                          <option>Passengers</option>
                          {[...Array(50)].map((_, i) => (
                            <option key={i}>{i + 1}</option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-2 md:gap-3">
                        <DatePicker
                          selected={outboundDate}
                          onChange={(date) => setOutboundDate(date)}
                          className="w-full p-2 text-sm rounded border"
                          placeholderText="Date"
                        />
                        <input
                          type="time"
                          className="p-2 text-sm rounded border"
                        />
                      </div>
                    </>
                  )}

                  {/* SELF DRIVE */}
                  {hireType === "self-drive" && (
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      <input className="p-2 text-sm border rounded" placeholder="First Name" />
                      <input className="p-2 text-sm border rounded" placeholder="Last Name" />
                      <input className="p-2 text-sm border rounded" placeholder="Email" />
                      <input className="p-2 text-sm border rounded" placeholder="Phone" />
                    </div>
                  )}

                  {/* BUTTON FIXED */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-black font-medium py-2 rounded transition"
                  >
                    Continue
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE IMAGE */}
      <div className="block md:hidden">
        <img
          src="https://travelforce.co.uk/wp-content/uploads/2025/12/ezgif-2e5abbb60fe61a5a.jpg"
          alt="Minibus Hire"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
