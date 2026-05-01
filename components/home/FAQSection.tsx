"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "What’s your deal with child seats?",
    a: "If you’re booking minibus hire with driver or a coach hire with driver, here’s the scoop: we don’t provide child car seats. We also ask you not to bring your own To ensure a comfortable and safe environment for all passengers. Current London legislation does not mandate the use of child car seats in minibuses or coaches for hire. We are unable to store them during your journey",
  },
  {
    q: "Can we drink on the bus?",
    a: "Usually, no. Drinking alcohol on board — whether it’s a luxury coach, a regular minibus hire near me, or one of our executive minibuses — is against the rules.",
  },
  {
    q: "Do I need to pay upfront?",
    a: "Nope, not right away. If you’re looking to hire a minibus with driver or maybe go big with a luxury coach hire, you can lock things in without an upfront payment. Once everything’s confirmed and you’re happy with the plan, we’ll probably ask for a deposit to hold your spot. Then, the full balance just needs to be paid at least seven days before your travel date — unless we’ve worked out something else with you. Super easy. Whether it’s minibus hire London, executive coach hire, or just trying to book something 'near me' quickly — we keep it straightforward.",
  },
  {
    q: "Are your drivers legit?",
    a: "Every driver we work with is fully licensed and DBS-checked (that’s the background check thing). So, whether you’re booking executive minibus hire an, a standard coach, or anything in between, our hire minibus service is driven by someone who’s qualified and cleared. Plus, we’re properly licensed ourselves — either by the local authority or Transport for London — so no funny business. You can relax.",
  },
  {
    q: "What if my flight gets delayed or cancelled?",
    a: "We totally get it — things don’t always go to plan. If your flight’s delayed, we try to adjust, but just so you know, we can’t guarantee it every time. Sometimes, all our vehicles are already booked, and we can’t magic up an extra one. If your flight gets cancelled less than seven days before your trip, we can’t refund the original booking. You’ll need to make a new one (and pay for it, yeah). It sucks, but the airline or your travel insurance usually handles those kinds of costs, not us. If you’re booking airport transfers through our minibus hire with driver near me option, it’s a good idea to have proper travel insurance in place — just in case.",
  },
  {
    q: "Do you check flight times for pickups?",
    a: "Yes, we do. As long as you give us the details, we’ll keep an eye on your return flight so we’re not waiting around for nothing (or worse, showing up too early). Our usual game plan is to arrive about an hour after you land — gives you time to deal with customs and all that. Wanna change that timing? No problem — just let us know before your trip. Only thing is, we can’t be held responsible if the info you give us is wrong. So double-check those flight numbers when you send them. Helps us help you, basically.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="serv-acc faq-main content-fonts faq-outer py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="serv-acc-inner flex flex-col gap-8">
          <div className="ocassion-main-top text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#252525]">Have questions in mind?</h2>
          </div>
          <div className="faq-inner flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="serv-acc-single bg-[#f0f0f0] rounded-lg overflow-hidden">
                <div
                  className="serv-acc-header flex justify-between items-center p-4 md:p-6 cursor-pointer"
                  onClick={() => toggle(idx)}
                >
                  <h4 className="text-lg font-semibold text-[#252525]">{faq.q}</h4>
                  <div className="serv-acc-img w-8 h-8">
                    {openIndex === idx ? (
                      <img src="https://travelforce.co.uk/wp-content/uploads/2025/05/minus-b.svg" alt="minus" className="w-full h-full" />
                    ) : (
                      <img src="https://travelforce.co.uk/wp-content/uploads/2025/05/plus-b.svg" alt="plus" className="w-full h-full" />
                    )}
                  </div>
                </div>
                {openIndex === idx && (
                  <div className="serv-acc-content p-4 md:p-6 pt-0 text-[#3D4C5E]">
                    <div className="acc-left" dangerouslySetInnerHTML={{ __html: faq.a }} />
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