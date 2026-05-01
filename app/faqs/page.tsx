"use client";
import { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function FAQsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section (background image only – empty info) */}
        <section className="serv-hero content-fonts relative">
          <div
            className="serv-inner-hero h-[430px] md:h-[600px] bg-cover bg-center"
            style={{
              backgroundImage: "url('https://travelforce.co.uk/wp-content/uploads/2025/06/image-2.jpg')",
            }}
          >
            {/* Empty serv-hero-info – no title or text */}
          </div>
        </section>

        {/* Trustpilot Image Banner */}
        <section className="trustpilot image-trustpilot border-b border-gray-100">
          <div className="trustpilot-img bg-[#252525] py-3 text-center">
            <div className="container mx-auto px-4">
              <img
                src="https://travelforce.co.uk/wp-content/uploads/2025/05/Trustpilot-2.png"
                alt="Trustpilot rating"
                className="mx-auto w-auto"
              />
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
}

// FAQ Accordion Component
function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default

  const faqs = [
    {
      q: "Is a driver included?",
      a: "Yes",
    },
    {
      q: "Do you provide child car seats?",
      a: "We do not provide child seats. Children car seats are not legally required in a minibus or coach. Please do not bring child seats on your bookings, they will not be stored.",
    },
    {
      q: "Is the return time the arrival time?",
      a: "No, return time is the time you will depart your destination. We make no commitments on the arrival time.",
    },
    {
      q: "Can we amend the hire on the day of the trip with the driver?",
      a: "No, all changes need to be made with the company. Changes on the day can not be guaranteed.",
    },
    {
      q: "Are airport parking charges included in your quotes?",
      a: "Yes",
    },
    {
      q: "Is alcohol allowed on our vehicles?",
      a: "Strictly no alcohol is allowed, journey can be terminated if alcohol is drank on our vehicles. Some corporate events may be exempt.",
    },
    {
      q: "Do I have to pay upfront to book?",
      a: "No initial payment is required to make a reservation. After a satisfactory reservation is made, a deposit may be required. Full payment is always required at least 7 days before travel unless agreed otherwise.",
    },
    {
      q: "Can we play our own music?",
      a: "All our vehicles have Bluetooth so you can connect your devices",
    },
    {
      q: "Does the driver wait if we are late?",
      a: "The driver will provide a 15 minute Grace for waiting without any additional charges. After 15 minutes it’s £60 per hour for any unscheduled waiting.",
    },
    {
      q: "Is VAT and all costs included in the quote?",
      a: "There is no VAT on bus hire. All costs are included in the quote unless otherwise specified.",
    },
    {
      q: "Will you track my flight for my return pick-up?",
      a: "Yes, we monitor all return flights. Flight details must be provided in advance. We arrive one hour after your flight lands at all airports. If you wish to adjust this, you may do so before travelling. Travel Force is not responsible if incorrect travel times are provided.",
    },
    {
      q: "What happens if my flight is cancelled or changed suddenly?",
      a: "Travel Force, known for its excellent customer service, will make every effort to accommodate changes for existing customers to prevent anyone from being left stranded. However, this is not a guarantee. It’s possible that Travel Force may be fully booked and unable to dispatch vehicles at the new required times. In such cases, Travel Force should not be held responsible. If a flight is cancelled with less than 7 days’ notice, no refund will be issued, and a new booking and payment will be required. Compensation for cancelled flights and associated costs is the responsibility of the airline or your travel insurance provider.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="serv-acc faq-main content-fonts faq-outer py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="serv-acc-inner flex flex-col gap-8 md:gap-10">
          {/* Title */}
          <div className="ocassion-main-top text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#252525]">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="faq-inner flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="serv-acc-single bg-[#f0f0f0] rounded-lg overflow-hidden"
              >
                {/* Header */}
                <div
                  className="serv-acc-header flex justify-between items-center cursor-pointer p-4 md:p-6 gap-2"
                  onClick={() => toggle(idx)}
                >
                  <h4 className="text-base md:text-lg font-semibold text-[#252525] pr-4">
                    {faq.q}
                  </h4>
                  <div className="serv-acc-img w-6 h-6 md:w-8 md:h-8 flex-shrink-0">
                    {openIndex === idx ? (
                      <img
                        src="https://travelforce.co.uk/wp-content/uploads/2025/05/minus-b.svg"
                        alt="minus"
                        className="w-full h-full"
                      />
                    ) : (
                      <img
                        src="https://travelforce.co.uk/wp-content/uploads/2025/05/plus-b.svg"
                        alt="plus"
                        className="w-full h-full"
                      />
                    )}
                  </div>
                </div>

                {/* Content (visible when open) */}
                {openIndex === idx && (
                  <div className="serv-acc-content px-4 pb-4 md:px-6 md:pb-6 pt-0">
                    <div className="serv-acc-content-inner">
                      <div className="acc-left text-[#3D4C5E] text-sm md:text-base">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}