"use client";
import { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function CoachHireLondonPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="serv-hero content-fonts relative">
          <div
            className="serv-inner-hero h-[430px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('https://travelforce.co.uk/wp-content/uploads/2025/06/London_banner-1.jpg')",
            }}
          >
            <div className="serv-hero-info text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                Coach Hire London
              </h1>
            </div>
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

        {/* Read‑More Section */}
        <CoachHireReadMore />

        {/* Vehicle Gallery */}
        <section className="coach-hire-gallery py-10 md:py-12 bg-[#f0f0f0]">
          <div className="coach-hire-gallery-inner max-w-[1650px] mx-auto px-4">
            <div className="coach-inner-main flex flex-wrap justify-center gap-4 md:gap-6">
              <VehicleCard href="/vehicle/8-seater-mpv" imgSrc="https://travelforce.co.uk/wp-content/uploads/2025/06/TF-image-1.png" title="8 Seater MPV" />
              <VehicleCard href="/vehicle/16-seater-standard-minibus" imgSrc="https://travelforce.co.uk/wp-content/uploads/2025/07/Profile-image.png" title="16 Seater Standard Minibus" />
              <VehicleCard href="/vehicle/16-seater-vip-minibus" imgSrc="https://travelforce.co.uk/wp-content/uploads/2025/06/16-Seater-VIP-Minibus.png" title="16 Seater VIP Minibus" />
              <VehicleCard href="/vehicle/22-seater-minibus" imgSrc="https://travelforce.co.uk/wp-content/uploads/2025/06/TF-Image-2.png" title="22 Seater Minibus" />
              <VehicleCard href="/vehicle/34-37-seater-coach" imgSrc="https://travelforce.co.uk/wp-content/uploads/2025/09/Layer-2.png" title="34-37 Seater Coach" />
              <VehicleCard href="/vehicle/86-seater-coach" imgSrc="https://travelforce.co.uk/wp-content/uploads/2026/02/Layer-2.png" title="86 Seater Coach" />
            </div>
          </div>
        </section>

        {/* Location Listing */}
        <section className="location-listing py-10 md:py-16 text-[#252525]">
          <div className="container mx-auto px-4">
            <div className="location-listing-inner flex flex-col gap-8">
              <div className="location-title text-center">
                <h3 className="text-2xl md:text-3xl font-bold">Popular Covered Areas</h3>
              </div>
              <div className="location-listing-list border-t-4 border-[#252525] bg-[#FAFAFA] shadow-md p-6 md:p-9">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 list-none p-0 m-0 location-list-with-icon">
                  {coachAreas.map((area, idx) => (
                    <li key={idx} className="relative pl-7">
                      <a href={area.url} className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                        {area.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Trustpilot Widget (Carousel) */}
        <section className="trustpilot image-trustpilot border-b border-gray-100">
          <div className="trust-pilot-widget hidden max-[551px]:hidden py-10 md:py-12">
            <div className="container mx-auto px-4">
              <div
                className="trustpilot-widget"
                data-locale="en-GB"
                data-template-id="53aa8912dec7e10d38f59f36"
                data-businessunit-id="61dd4656c5bdf934bb6b1e40"
                data-style-height="140px"
                data-style-width="100%"
                data-theme="light"
                data-stars="5"
                data-review-languages="en"
              />
            </div>
          </div>
          <div className="trust-pilot-widget mobile hidden max-[551px]:block py-6">
            <div className="container mx-auto px-4">
              <div
                className="trustpilot-widget"
                data-locale="en-GB"
                data-template-id="53aa8912dec7e10d38f59f36"
                data-businessunit-id="61dd4656c5bdf934bb6b1e40"
                data-style-height="300px"
                data-style-width="100%"
                data-theme="light"
                data-stars="5"
                data-review-languages="en"
              />
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <CoachHireFAQ />
      </main>
      <Footer />
    </>
  );
}

// Helper Components
function VehicleCard({ href, imgSrc, title }: { href: string; imgSrc: string; title: string }) {
  return (
    <div className="coach-item w-[46%] sm:w-[200px] md:max-w-[250px]">
      <a href={href} className="flex flex-col gap-4 text-center text-[#252525] no-underline">
        <div className="coach-item-img">
          <img src={imgSrc} alt={title} className="w-full h-full max-w-[250px] max-h-[250px] object-cover bg-white mx-auto" />
        </div>
        <h4 className="text-xl md:text-2xl font-medium leading-tight">{title}</h4>
      </a>
    </div>
  );
}

const coachAreas = [
  { name: "Coach Hire Bethnal Green", url: "/coach-hire-bethnal-green" },
  { name: "Coach Hire Bow", url: "/coach-hire-bow" },
  { name: "Coach Hire Brentford", url: "/coach-hire-brentford" },
  { name: "Coach Hire Camden", url: "/coach-hire-camden" },
  { name: "Coach Hire Brixton", url: "/coach-hire-brixton" },
  { name: "Coach Hire Chiswick", url: "/coach-hire-chiswick" },
  { name: "Coach Hire Dulwich", url: "/coach-hire-dulwich" },
  { name: "Coach Hire Ealing", url: "/coach-hire-ealing" },
  { name: "Coach Hire Euston", url: "/coach-hire-euston" },
  { name: "Coach Hire Dagenham", url: "/coach-hire-dagenham" },
  { name: "Coach Hire Forest Hill", url: "/coach-hire-forest-hill" },
  { name: "Coach Hire Fulham", url: "/coach-hire-fulham" },
  { name: "Coach Hire Docklands", url: "/coach-hire-docklands" },
  { name: "Coach Hire Greenwich", url: "/coach-hire-greenwich" },
  { name: "Coach Hire Hammersmith", url: "/coach-hire-hammersmith" },
  { name: "Coach Hire Hampstead", url: "/coach-hire-hampstead" },
  { name: "Coach Hire Hampton", url: "/coach-hire-hampton" },
  { name: "Coach Hire Highgate", url: "/coach-hire-highgate" },
  { name: "Coach Hire Isleworth", url: "/coach-hire-isleworth" },
  { name: "Coach Hire Kentish Town", url: "/coach-hire-kentish-town" },
  { name: "Coach Hire Upton Park", url: "/coach-hire-upton-park" },
  { name: "Coach Hire Islington", url: "/coach-hire-islington" },
  { name: "Coach Hire Kew", url: "/coach-hire-kew" },
  { name: "Coach Hire Kings Cross", url: "/coach-hire-kings-cross" },
  { name: "Coach Hire Lambeth", url: "/coach-hire-lambeth" },
  { name: "Coach Hire Mile End", url: "/coach-hire-mile-end" },
  { name: "Coach Hire Richmond", url: "/coach-hire-richmond" },
  { name: "Coach Hire Shoreditch", url: "/coach-hire-shoreditch" },
  { name: "Coach Hire Southwark", url: "/coach-hire-southwark" },
  { name: "Coach Hire Spitalfields", url: "/coach-hire-spitalfields" },
  { name: "Coach Hire St. Pancras", url: "/coach-hire-st-pancras" },
  { name: "Coach Hire Stoke Newington", url: "/coach-hire-stoke-newington" },
  { name: "Coach Hire East Ham", url: "/coach-hire-east-ham" },
  { name: "Coach Hire Stratford", url: "/coach-hire-stratford" },
  { name: "Coach Hire The South Bank", url: "/coach-hire-the-south-bank" },
  { name: "Coach Hire Twickenham", url: "/coach-hire-twickenham" },
  { name: "Coach Hire Walthamstow", url: "/coach-hire-walthamstow" },
  { name: "Coach Hire Wandsworth", url: "/coach-hire-wandsworth" },
  { name: "Coach Hire Wembley", url: "/coach-hire-wembley" },
  { name: "Coach Hire Whitechapel", url: "/coach-hire-whitechapel" },
  { name: "Coach Hire Wimbledon", url: "/coach-hire-wimbledon" },
  { name: "Coach Hire Ilford", url: "/coach-hire-ilford" },
  { name: "Coach Hire Romford", url: "/coach-hire-romford" },
];

function CoachHireReadMore() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="serv-read-more content-fonts why-choose-us serv-read-more-main section-padding py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="img-text-inner flex flex-col gap-8">
          <div className="img-text-inner-top">
            <div className="img-text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#252525] max-w-2xl">
                Experience Comfortable and Stylish Travel with London Coach Hire
              </h2>
              <div className="header-menu-btn">
                <a href="/get-quick-quote" className="btn btn-black inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                  <span>Get Quote Now</span>
                  <img src="https://travelforce.co.uk/wp-content/uploads/2025/05/Arrow-Right.svg" alt="arrow" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="img-text-inner-bottom">
            <div className="serv-read-main">
              <div className="read-more-content space-y-4 text-[#3D4C5E]">
                <p>Are you seeking dependable, luxurious, cheap coach hire services in London? No matter if you’re heading to a corporate event, celebrating with friends, or exploring the sights, we’ve got your journey covered. The Travel Force offers a variety of well-maintained coaches prepared for your requirements. We assure you of an enjoyable customer experience while making sure every time you travel with us, it will be a pleasant and stress-free experience worth remembering.</p>
                <p>At Travel Force, we pride ourselves on the wide array of coach hire in London options we offer for groups of any size. Whether a few couples, a small group of 34, or a somewhat larger party of even 86, our vehicles are flexible enough to provide the perfect coach for customer requirements. The long experience of drivers, up-to-date vehicles, and unchallenged attention to detail ensures the smoothest journey at all times.</p>
                <h2 className="text-xl font-bold text-[#252525]">Why Choose Travel Force as Your London Coach Hire Partner?</h2>
                <p>Choosing the right London coach hire company is a difficult task, but with Travel Force, you can make an informed choice, confident that you will get the best service at competitive prices. Here’s what makes us stand out in the competitive London coach hire market:</p>
                <p>Wide Range of Coaches: Our vehicles consists of coaches ranging from 34 seaters all the way to 86 seaters, suitable for small groups or large parties. Whether it is a 34 seater for a small business group or an 86 seater for a large-scale event, we have the right coach for you.</p>
                <p>Luxury and Comfort: Travel Force separates itself from many other operators when it comes to luxury coach hire London. The modern coaches we provide are fully air-conditioned and equipped with the latest technological offerings that assure a pleasurable and comfortable journey.</p>
                <p>Professional and Experience Drivers: Our drivers are licensed, qualified, and highly experienced. They will guarantee your safety and comfort during your travel while offering a professional yet friendly atmosphere.</p>
                <p>Affordable and Competitive Pricing: We provide cheap coach hires in London, retaining all quality notions. With Travel Force, you will always be able to expect value for your money. Our pricing is transparent; we keep prices low with no hidden charges, and our rates stand competitive whether the requirement is for a short outing or for a full long-term hire.</p>
                <p>Solutions for Any Occasion: Whether it be a corporate event, a school trip, a wedding, or a sightseeing tour, our hire coach London options are customized to your itinerary. Our staff works with you to create a tailor-made itinerary that suits your schedule and assures a seamless experience.</p>
              </div>
              {showMore && (
                <div className="read-more-content next-content mt-8 space-y-4 text-[#3D4C5E]">
                  <h2 className="text-xl font-bold text-[#252525]">Coaches for Every Need</h2>
                  <p>Travel Force offers a wide array of vehicles depending on your group size and preference. Choose from a selection of well-maintained coaches London for an elegant and cosy ride:</p>
                  <h3 className="text-lg font-semibold text-[#252525]">34-37 Seater Coach: Versatile and Comfortable for Larger Groups</h3>
                  <p>For the bigger capacity and slightly more space for comfort, these <a href="/vehicle/34-37-seater-coach/" className="text-blue-600 underline">34 to 37 seater</a> are perfect. They offer seats for more passengers while retaining the feeling of luxury. Depending on whether you are organising a corporate event, a school trip, or a family outing, these coaches guarantee a stylish journey for everyone.</p>
                  <h3 className="text-lg font-semibold text-[#252525]">49 – 86 Seater Coach: The Ultimate Choice for Large Groups</h3>
                  <p>Services We Offer</p>
                  <p>We not only take care of your travel needs of every nature at Travel Force, but we also ensure that any kind of leisure or business trip is stress-free and enjoyable. Our coach hire London services include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><a href="/service/corporate-travel/" className="text-blue-600 underline">Business Travel</a>: Whether you are going to a conference, meeting, or corporate event, hire Coach London allows your group to travel in professional comfort.</li>
                    <li><a href="/service/airport-transfer/" className="text-blue-600 underline">Airport Transfers</a>: Avoid time-consuming taxi rides or public transport with our airport transfer coach hire.</li>
                    <li><a href="/service/london-tours/" className="text-blue-600 underline">Sightseeing Tours</a>: One of the most iconic cities in the world, London known for its great its rich history and allure.</li>
                    <li><a href="/service/weddings/" className="text-blue-600 underline">Weddings and Special Events</a>: Your big day deserves the best—Count on us to provide elegant and reliable transport.</li>
                    <li><a href="/service/school-transport/" className="text-blue-600 underline">School and College Trips</a>: Our 36 seater, 49 seater, and 55 seater coaches are perfect for school and college outings.</li>
                    <li><a href="/service/school-transport/" className="text-blue-600 underline">Group Travel</a>: Whether it is a sporting event, a concert, or a large family get-together, large groups are best served with one London coach hire.</li>
                  </ul>
                  <h2 className="text-xl font-bold text-[#252525]">Why is Coach Hire London the Best Choice for Group Travel?</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Cost-Effective: Coach hire is usually cheaper than other modes of transport.</li>
                    <li>Convenience: Your driver navigates the crowded London streets while you relax.</li>
                    <li>Comfort: Air conditioning, leather seats, and plenty legroom.</li>
                    <li>Safety: Regularly maintained coaches with seat belts and GPS tracking.</li>
                    <li>Customisation: Fully customised to meet the needs of your group.</li>
                  </ul>
                  <h2 className="text-xl font-bold text-[#252525]">How Do You Book a Coch Hire in London?</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Fill the form: Insert all your journey details.</li>
                    <li>Select Your Coach: Our team helps you select the best coach option.</li>
                    <li>Confirm Your Booking: After receiving your quote, make your booking confirmation.</li>
                  </ul>
                  <h2 className="text-xl font-bold text-[#252525]">Contact Us Today for Affordable Coach Hire in London</h2>
                  <p>Call us right now to talk about your requirements, get a quotation, and make your coach hire London easy.</p>
                </div>
              )}
              <div className="header-menu-btn mt-6 text-center">
                <button onClick={() => setShowMore(!showMore)} className="btn btn-white inline-flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-50 transition">
                  <span>{showMore ? "Read less" : "Read more"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoachHireFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "What services do you offer for London coach hire?", a: "We provide a variety of transportation options in and out of London. Our London coach hire services include: Corporate travel, Airport transfers, Wedding Transportation, School trips, Transport for sports teams, Group outings. Whatever your event, we promise a seamless and stress-free experience when you coach hire in London." },
    { q: "How large are the coaches in your vehicle with respect to passenger capacity?", a: "Our London Coach hire ranges from 34 seaters to a large 80 seater. It therefore makes no difference to us whether you are planning transportation for just a handful of people or for a large party; we have the capacity to meet that need." },
    { q: "How early in advance should I book?", a: "To make sure you get exactly what you want, especially in the peak season of travel, we advise that you book your coach hire London service way ahead of time. However, we do try to accommodate last-minute requests whenever possible." },
    { q: "Do your coaches have onboard amenities?", a: "Yes, They do. Our luxury coach hire London are equipped with modern conveniences such as air-conditioning, reclining seats, privacy windows, and oversized luggage space. A choice few even boast onboard entertainment systems, which is why we are considered one of the premier luxury coach hire London services." },
    { q: "Can I customise my journey?", a: "Absolutely! We pride ourselves on flexibility. Be it tailored itineraries, multiple pick-ups, etc., we can design the entire London coach hire experience around you. Simply tell us what you have planned, and we will take it from there." },
    { q: "Do you offer One-way or round-trip services?", a: "Most certainly, we do-one-way services and return services. The team will collaborate with you to arrange a coach hire London arrangement suitable for you-being in your time and price range." },
    { q: "Can I request additional stops?", a: "Yes, if you want to make a couple of small stops on the way, just give us a heads up while booking. We’ll be glad to accommodate extra stops based on your group’s schedule." },
    { q: "Can I make changes or cancel my booking?", a: "We do know that there are many reasons why you could not make ongoing plans. That is why we do allow for amendments or cancellations. For more information, you can contact our team." },
    { q: "Can I book multiple vehicles?", a: "Yes! Are you hosting a big event? We specialise in logistics for transporting groups using multiple coaches London. From coordinating multiple vehicles to recommending routes and timings, we coordinate every last bit of event transportation for you." },
  ];
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);
  return (
    <section className="serv-acc faq-main content-fonts faq-outer py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="serv-acc-inner flex flex-col gap-8 md:gap-10">
          <div className="ocassion-main-top text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#252525]">Have questions in mind?</h2>
          </div>
          <div className="faq-inner flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="serv-acc-single bg-[#f0f0f0] rounded-lg overflow-hidden">
                <div className="serv-acc-header flex justify-between items-center cursor-pointer p-4 md:p-6 gap-2" onClick={() => toggle(idx)}>
                  <h4 className="text-base md:text-lg font-semibold text-[#252525] pr-4">{faq.q}</h4>
                  <div className="serv-acc-img w-6 h-6 md:w-8 md:h-8 flex-shrink-0">
                    <img src={`https://travelforce.co.uk/wp-content/uploads/2025/05/${openIndex === idx ? "minus" : "plus"}-b.svg`} alt={openIndex === idx ? "minus" : "plus"} className="w-full h-full" />
                  </div>
                </div>
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