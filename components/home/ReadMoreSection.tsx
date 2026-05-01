"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ReadMoreSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="serv-read-more content-fonts why-choose-us serv-read-more-main py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="img-text-inner flex flex-col gap-6">
          <div className="img-text-inner-top">
            <div className="img-text-left flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#252525] md:w-1/2">
                The Real People Behind the Wheel
              </h2>
              <div className="header-menu-btn">
                <Link
                  href="/get-quick-quote"
                  className="btn btn-black inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full"
                >
                  <span>Book Now</span>
                  <img src="https://travelforce.co.uk/wp-content/uploads/2025/05/Arrow-Right.svg" alt="" className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="img-text-inner-bottom">
            <div className="serv-read-main">
              <div className="read-more-content space-y-4 text-[#3D4C5E]">
                <p>
                  Whether you’re planning something fun or formal, a small gathering or a massive event, we tailor our minibus and coach hire with driver services to fit your plans perfectly. From executive coach hire for roadshows to school field trips, we’ve seen it all—and helped make each one seamless.<br />
                  So, if you’re searching for luxury minibus hire with driver near me, or maybe you’ve got “hire a coach” scribbled down on your to-do list, you’re exactly where you need to be.
                </p>
                <p>
                  You know what sets us apart? Our drivers. Sure, we have fancy vehicles and smooth booking systems, but it’s the folks behind the wheel who make the journey memorable.<br />
                  Our drivers aren’t just there to steer the wheel—they’re punctual, polite, and genuinely good at what they do. Whether you’re trying to herd up sleepy teenagers on a school trip or managing a group of execs flying in from different countries, you’ll find our drivers calm, helpful, and unshakably professional.<br />
                  Many of our regulars ask for the same drivers by name. That says something, doesn’t it?
                </p>
                <h2 className="text-xl font-bold mt-6 text-[#252525]">Customized Travel Plans (Because No Two Journeys Are Alike)</h2>
                <p>
                  We’ve never believed in one-size-fits-all. That’s why, when you come to us for minibus hire London or coach hire London, we’ll actually listen. You tell us what you need, what matters to your group, and we’ll make it happen.
                </p>
                <p>
                  Need a super early pick-up? We’ve done these jobs more times than we can count. Want to swing by a specific stop for photos or lunch? We’ll build it into your schedule. Traveling with kids? We’ve got minibuses with child-friendly features too.
                </p>
                <p>
                  This kind of bespoke travel planning is what makes our executive minibus and luxury coach hire London services feel more personal. We’re not here to squeeze your plans into a template—we’re here to make your day go off without a hitch.
                </p>
              </div>
              {showMore && (
                <div className="read-more-content next-content mt-6 space-y-4 text-[#3D4C5E]">
                  <h2 className="text-xl font-bold text-[#252525]">Who’s Riding with Us?</h2>
                  <p>Honestly? All sorts of people. Our services are super flexible, and we’ve worked with just about every type of group you can imagine:</p>
                  <h3 className="font-semibold">Schools and Colleges</h3>
                  <p>From class trips to university open days, we’ve helped thousands of students travel safely and comfortably. Teachers love the organization and peace of mind. Kids love the journey. Parents love not having to drive.</p>
                  <h3 className="font-semibold">Corporate Teams</h3>
                  <p>Looking to impress clients or shuttle staff between sites? Our executive coach hire London and luxury minibus options make work-related travel feel less like a chore. They’re basically mobile offices—minus the water cooler.</p>
                  <h3 className="font-semibold">Families & Private Groups</h3>
                  <p>Reunions, birthdays, hen weekends, or just a big family holiday—we handle it all. Everyone travels together, and no one gets lost following dodgy Google Maps directions.</p>
                  <h3 className="font-semibold">Sports Teams & Fan Clubs</h3>
                  <p>Whether you’re the team or just the loudest fans, we’ll get you to the game. We’ve got room for kit, banners, drums, and everything else.</p>
                  <h3 className="font-semibold">Tour Groups</h3>
                  <p>Partnering with travel agents and tour companies, we provide luxury coaches that give tourists the comfort and class they expect. Our hire coach and driver packages are ideal for long London tours or even international trips into Europe.</p>
                  <h2 className="text-xl font-bold text-[#252525]">Planning Ahead? Or Last-Minute? We’ve Got You Either Way</h2>
                  <p>Some of our customers book months in advance. Others… not so much. And that’s totally fine. We’ve helped plenty of people who realized—just days (or hours) before an event—that they forgot to sort out transport.</p>
                  <p>Whether it’s a spur-of-the-moment booking for minibus transport or a well-thought-out hire coach and driver situation, we’ll do our best to make it happen—even at short notice.</p>
                  <h2 className="text-xl font-bold text-[#252525]">What’s It Like Inside Our Vehicles?</h2>
                  <p>Each vehicle is selected based on comfort, functionality, and what we’d want if we were the ones traveling. This is the standard you can expect whether you’re booking a small executive minibus or one of our larger luxury coaches.</p>
                  <h2 className="text-xl font-bold text-[#252525]">Still Wondering What It Costs?</h2>
                  <p>Fair question—and one we take seriously. Our pricing is competitive and transparent. No mystery fees, no “surprise” fuel charges, and no vague estimates.</p>
                  <p>When we quote you a price for hire a minibus with driver or coach hire with driver, that’s the price. You’ll get a breakdown upfront, so you can budget clearly.</p>
                  <p>We work with all kinds of budgets, too. Whether you’re looking for an executive minibus hire on a shoestring or going all-in on luxury coach hire, we’ll do our best to meet you where you’re at.</p>
                  <p>Who We’re Proud to Work With</p>
                  <p>We’ve been lucky enough to work with a wide range of clients. Every booking matters, and we treat each one like it’s VIP.</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Businesses: Need executive minibus hire for clients or coach hire with driver for big events? We’ve got you covered. Professional and polished.</li>
                    <li>Schools & Universities: Safe and reliable minibus transport for field trips, sports, student outings — you name it.</li>
                    <li>Tour Operators: Helping travel agencies make group trips smooth and comfy.</li>
                    <li>Event Planners: Concerts, festivals, conferences — we manage the transport logistics with scalable vehicle options.</li>
                    <li>Private Groups & Families: Weddings, reunions, holidays — we take the hassle out of travel so you can enjoy.</li>
                  </ul>
                  <p>No matter what you’re planning, big or small, Travel Force is here to help.</p>
                  <h2 className="text-xl font-bold text-[#252525]">Ready to Get Started?</h2>
                  <p>If you’ve been Googling luxury minibus hire London, luxury coach hire, or hire a coach and driver, then hey, you’re in the right place. Travel Force is all about making your trip smooth, safe, and maybe even a little bit special.</p>
                  <p>We love what we do and would be stoked to help with your next trip or event. Reach out today for a no-pressure quote, and let’s get your journey started.</p>
                  <h2 className="text-xl font-bold text-[#252525]">Your Journey Begins Here</h2>
                  <p>If you’re still with me, chances are you’re thinking about booking. Maybe you’re planning something big, or just trying to figure out how to get everyone from A to B without stress.<br />
                  Either way, we want to help.<br />
                  Shoot us a message or call for a friendly, no-pressure quote. Ask us anything. Tell us your plans. We’ll give you honest advice and help you figure out what works best.<br />
                  Because, really, this isn’t just about transport. It’s about helping people get together and get where they need to be — safely, comfortably, and without the headaches.<br />
                  So whether it’s a quick minibus and driver hire near me search, a request to hire a coach, or a plan involving luxury coaches, Travel Force is ready to get it done — the right way.<br />
                  Let’s hit the road together.<br />
                  <a href="https://travelforce.co.uk/contact-us/" className="underline">Give us a call or drop a message for a free quote today.</a>
                  </p>
                </div>
              )}
            </div>
            <div className="header-menu-btn mt-6 text-center">
              <button
                onClick={() => setShowMore(!showMore)}
                className="btn btn-white inline-flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-full"
              >
                <span>{showMore ? "Read less" : "Read more"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}