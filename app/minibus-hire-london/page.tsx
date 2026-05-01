"use client";
import React from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import Link from "next/link"


const faqs = [
    {
        q: "Can I book a minibus during peak seasons like holidays?",
        a: "Yes! Thanks to our extensive network of operators throughout the nation and their extensive vehicles choices, a minibus hire in London can indeed be secured even during high-demand days like holidays or school vacations. Whether you're looking for cheap minibus hire or a luxury minibus in London, early booking is recommended to ensure availability.",
    },
    {
        q: "What kinds of minibuses could be hired in London?",
        a: "Our array includes a large selection of minibuses, From 8-seaters to 22-seaters, we offer a full range of London minibus hire option. Whether you need a minibus taxi London for a short city trip or a larger vehicle for group travel together, we'll assess and select the most suitable vehicle for your group size and travel needs.",
    },
    {
        q: "Where can I travel with a minibus hire in London?",
        a: "Travel Force covers pretty much the entire country, so any place within the United Kingdom can be reached in the finest way. Sit back, relax, and enjoy your hour or two with us! our London minibus hire services are flexible and dependable.",
    },
    {
        q: "What are payment options available?",
        a: "Payments can be made by credit or debit cards, or sometimes by wire transfer, from bank to bank. Full payment information will be provided to you during the booking transaction for your minibus hire with driver London.",
    },
    {
        q: "Do you provide minibus airport transfers to and from London Airport?",
        a: "We offer London minibus taxi airport transfers with punctuality guaranteed. The driver understands flight time schedules so that pickups and drop-offs take place on time, sparing you any inconvenience.",
    },
    {
        q: "Is it possible to include additional stops along the way?",
        a: "Sure! We do welcome additional stops providing they are reasonable. Just inform the customer support line of additional stops beforehand at the point of booking, we will do our best to accommodate the stops in your itinerary.",
    },
    {
        q: "What If there is a breakdown or emergency during the trip?",
        a: "Our minibuses receive regular inspections and maintenance to avoid mechanical problems. In the rather rare event of a breakdown or emergency, we have well-prepared contingency measures to see that you are safe and keep any inconvenience to a minimum.",
    },
    {
        q: "Can I rely on the quality of the minibus I hire?",
        a: "Definitely so. We only work with operators who meet rigorous safety and quality standards. All partners must have valid licenses and must abide by all relevant laws. Should an operator not live up to our standards, they shall be disallowed from using our platform until the time they meet the requirements-thereby maintaining a safe and comfortable experience for every single passenger.",
    },
    {
        q: "Are Your Minibuses Equipped with Amenities Like Air Conditioning and Entertainment?",
        a: "Many of our luxury minibus London options include air conditioning, entertainment systems, and wheelchair accessibility upon request. Do specify your preference at the time of booking so that we may accommodate you in a vehicle that suits your category of comfort in the best possible manner.",
    },
    {
        q: "Can I make modifications to my booking once it has been confirmed?",
        a: "Yes, we know that plans can change at the moment. We try our best to be flexible. Therefore, please call customer support as soon as you can, and they will help you make changes to your booking.",
    },
    {
        q: "Is there a booking deposit?",
        a: "In most cases, you pay a deposit as surety for your reservation. The exact amount is communicated after the booking has been initiated.",
    },
    {
        q: "Are your drivers certified and experienced?",
        a: "All our drivers are well certified and professionally trained with adequate experience. Your safety is considered most important by them, along with ensuring that you feel most comfortable throughout the journey.",
    },
];

export default function MinibusHireLondonPage() {
    const [showMore, setShowMore] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="serv-hero content-fonts relative">
                    <div
                        className="serv-inner-hero h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage: "url('https://travelforce.co.uk/wp-content/uploads/2025/07/minibus-hire-image.jpg')",
                        }}
                    >
                        <div className="serv-hero-info text-center text-white px-4">
                            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                                Minibus Hire London
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="trustpilot image-trustpilot border-b border-gray-100">
                    <div className="trustpilot-img bg-[#252525] py-3 text-center">
                        <div className="container mx-auto px-4">
                            <img
                                src="https://travelforce.co.uk/wp-content/uploads/2025/05/Trustpilot-2.png"
                                alt="Minibus Hire with Driver, London Minibus Hire, Coach Hire London"
                                className="mx-auto w-auto"
                            />
                        </div>
                    </div>
                </section>
                <section className="serv-read-more content-fonts why-choose-us serv-read-more-main section-padding py-10 md:py-12">
                    <div className="container mx-auto px-4">
                        <div className="img-text-inner flex flex-col gap-8">
                            {/* Top section: heading + button */}
                            <div className="img-text-inner-top">
                                <div className="img-text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#252525] max-w-2xl">
                                        Discover Affordable, Reliable &amp; Luxury Minibus Hire Services in London
                                    </h2>
                                    <div className="header-menu-btn">
                                        <Link
                                            href="/get-quick-quote"
                                            className="btn btn-black inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
                                        >
                                            <span>Get Quote Now</span>
                                            <img
                                                src="https://travelforce.co.uk/wp-content/uploads/2025/05/Arrow-Right.svg"
                                                alt="arrow"
                                                className="w-4 h-4"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Content area */}
                            <div className="img-text-inner-bottom">
                                <div className="serv-read-main">
                                    {/* Always visible content */}
                                    <div className="read-more-content space-y-4 text-[#3D4C5E]">
                                        <p>
                                            Are you looking for a dependable and cheap minibus hire that offers a balance of comfort, luxury, and affordability? Be it a corporate event, wedding, airport transfer, or sightseeing tour, Travel Force is your go-to provider for minibus hire with driver London.
                                        </p>
                                        <p>
                                            Our vehicles includes a wide selection of vehicles, including compact 8 seaters minibus, full-sized 22-seaters minibus, and everything in between. Whether you need a minibus taxi London for a business meeting, a group tour, or a family occasion, we’ve got your London minibus hire needs covered with comfort and efficiency.
                                        </p>
                                        <h3 className="text-xl font-semibold text-[#252525]">Hire Minibuses in London</h3>
                                        <p>
                                            Need to transport a group of people? Travel Force is here to assist you. Our vehicles of luxury minibus London vehicles from 8 to 22 seats guarantee your comfort and safety. Whether a day trip, a school sports event, or an evening celebration, our minibuses for 8 to 22 passengers will surely move your group with ease.
                                        </p>
                                        <p>
                                            Upon arrival, one of our professional chauffeurs will welcome you and ensure you are comfortably seated in our London minibus taxi. Be it an important meeting or a trip from one location to another, punctuality and reliability would be our promises for service.
                                        </p>
                                        <p>
                                            If you’re planning a large event, our high-capacity 22-seaters and luxury minibus London models will ensure everyone arrives together and in comfort. From proms to private tours, our minibus hire London options remove the stress of coordinating group travel.
                                        </p>
                                    </div>

                                    {/* Hidden content – visible only when "Read more" is clicked */}
                                    {showMore && (
                                        <div className="read-more-content next-content mt-8 space-y-4 text-[#3D4C5E]">
                                            <h2 className="text-2xl font-bold text-[#252525]">Trusted Minibus Hire Services in London with Professional Drivers</h2>
                                            <p>
                                                Our minibus hire London service gets rid of the stress and delays caused by going through heavy city traffic. We have built our reputation as providers of comfortable and convenient transport solutions, offering premier minibus London services to those who want to travel at ease.
                                            </p>
                                            <p>
                                                Choose as per your comfort needs from our wide range of minibuses that sit 8 to 22 persons. Whether you’re after cheap minibus hire or premium VIP transport, Travel Force covers every request. It is best to make your reservations ahead of time to allow enough time to prepare properly, including vehicle preparation and allocating one of our well-trained professional drivers who will ensure safety and pleasant journeys. Travel Force deals in all the services for London minibus hire.
                                            </p>
                                            <p>
                                                Need a 16-seater for a school trip or a minibus taxi London for airport transfer? Travel Force ensures reliable service every time.
                                            </p>
                                            <p>
                                                For special occasions, we provide 16 Seater VIP Minibus options. Our services extend to:
                                            </p>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Wedding Transportation</li>
                                                <li>Proms and formal occasions transfers</li>
                                                <li>Concerts and sports events transport</li>
                                                <li>Cultural excursions (opera or symphony trips)</li>
                                            </ul>
                                            <p>All our London minibus hire vehicles feature the following:</p>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Prompt arrival (10 minutes and 15 minutes before departure time)</li>
                                                <li>Drivers with the utmost knowledge of London routes</li>
                                                <li>Real-time traffic navigation to avoid delays</li>
                                                <li>A huge variety of minibuses from 8 to 22 seats</li>
                                            </ul>
                                            <p>
                                                Our professional drivers ensure passengers always reach their destinations safely and on time, making us the preferred choice for group transportation across London.
                                            </p>

                                            <h2 className="text-2xl font-bold text-[#252525]">Why Choose Travel Force for Minibus Hire in London?</h2>
                                            <h3 className="text-xl font-semibold text-[#252525]">Diverse Vehicles to Suit Every Occasion</h3>
                                            <p>
                                                At Travel Force, we recognise that various events require different modes of transportation. Hence, we have minibuses to suit groups of any size:
                                            </p>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li><a href="/vehicle/8-seater-mpv" className="text-blue-600 underline">8 Seater MPVs</a>: For small groups or executive travel.</li>
                                                <li><a href="/vehicle/16-seater-standard-minibus" className="text-blue-600 underline">16 Seater Minibuses</a>: For school trips, team parties, or family outings.</li>
                                                <li><a href="/vehicle/16-seater-vip-minibus" className="text-blue-600 underline">16 Seater VIP Minibus</a>: For VIPs and Executives.</li>
                                                <li><a href="/vehicle/22-seater-minibus" className="text-blue-600 underline">22 Seater Minibuses</a>: For bigger groups attending an event or tour.</li>
                                            </ul>
                                            <p>Each of our vehicles is maintained to the highest standards to guarantee passenger comfort and safety.</p>

                                            <h3 className="text-xl font-semibold text-[#252525]">Experienced and Professional Drivers</h3>
                                            <p>
                                                Our London minibus taxi drivers are licensed, DBS-checked, and trained to ensure your trip is pleasant, punctual, and safe. They are committed to treating you on time and courteously so that your journey remains smooth and stress-free.
                                            </p>
                                            <p>Comprehensive Range of Services</p>
                                            <p>We provide for many travel needs, such as:</p>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li><a href="/service/airport-transfer" className="text-blue-600 underline">Airport Transfers</a>: Reliable transfers to and from Heathrow, Gatwick, Stansted, Luton, and London City Airport.</li>
                                                <li><a href="/service/corporate-travel" className="text-blue-600 underline">Corporate Travel</a>: Transfer services for meetings, conferences, and all forms of entertainment.</li>
                                                <li><a href="/service/school-transport" className="text-blue-600 underline">School Trips</a>: Safe and comfortable transport for school outings.</li>
                                                <li><a href="/service/events-exhibitions" className="text-blue-600 underline">Event Transfers</a>: Bring your group to concerts, weddings, and other social events.</li>
                                                <li><a href="/service/london-tours" className="text-blue-600 underline">Luxury Minibus London Tours</a>: Visit Buckingham Palace, the Tower of London, and Covent Garden.</li>
                                                <li><a href="/service/nights-out" className="text-blue-600 underline">Nights Out</a> – Enjoy London’s vibrant nightlife without the hassle of finding a designated driver—travel safely and stress-free.</li>
                                                <li><a href="/service/weddings" className="text-blue-600 underline">Weddings</a> – Dependable and elegant transport to ensure your guests arrive relaxed, refreshed, and on time.</li>
                                                <li><a href="/service/film-tv-media" className="text-blue-600 underline">Film, TV &amp; Media</a> – Flexible transport solutions tailored for cast, crew, and equipment logistics.</li>
                                                <li><a href="/service/theme-park-hire" className="text-blue-600 underline">Theme Park Trips</a> – Hassle-free group transport to top attractions like LEGOLAND, Thorpe Park, and Chessington.</li>
                                                <li><a href="/service/funeral-car-hire" className="text-blue-600 underline">Funeral Transport</a> – Discreet and respectful service for sensitive occasions, ensuring a smooth and dignified journey.</li>
                                            </ul>

                                            <h3 className="text-xl font-semibold text-[#252525]">Competitive Pricing</h3>
                                            <p>We offer transparent pricing with no hidden fees, while high quality is maintained at reasonable rates so customers can get the best value for their money.</p>

                                            <h3 className="text-xl font-semibold text-[#252525]">Booking Made Easy</h3>
                                            <p>
                                                Booking with Travel Force is easy. Simply fill out our online quote form or contact the booking team for a no-obligation quote tailored to your needs. Our London minibus hire extends across the UK, including trips to Birmingham, Edinburgh, and Brighton.
                                            </p>
                                            <p>Areas We Serve</p>
                                            <p>We serve London and throughout the UK, namely:</p>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>North London (Barnet, Enfield, Camden)</li>
                                                <li>East London (Stratford, Hackney, Ilford)</li>
                                                <li>South London (Croydon, Bromley, Wimbledon)</li>
                                                <li>West London (Ealing, Hounslow, Kensington)</li>
                                                <li>Central London (City of London, Westminster, Soho)</li>
                                            </ul>
                                            <p>We also visit:</p>
                                            <ul className="list-disc pl-5 space-y-1">
                                                <li>Birmingham</li>
                                                <li>Manchester</li>
                                                <li>Cardiff</li>
                                                <li>Edinburgh</li>
                                                <li>Southampton</li>
                                                <li>Brighton</li>
                                            </ul>
                                            <p>
                                                Wherever you want to go, <a href="/" className="text-blue-600 underline">Travel Force</a> can arrange for reliable door-to-door minibus services customised according to the group’s size and schedule. Whether you are located in central London or in any part of London, our London minibus hire guarantees a service that takes pride in delivering you safely, affordably, and in style.
                                            </p>

                                            <h2 className="text-2xl font-bold text-[#252525]">Your Hassle-Free Guide to Minibus Hire in London</h2>
                                            <p>
                                                Exploring all that London has to offer can quickly become both overwhelming and pricey — but we’re here to make things easier for you. Whether you want to see Buckingham Palace, have fun at the London Eye, or check out Madame Tussauds, trust us to take you around in a comfortable and stress-free style. Isn’t hitting the more touristy spots on your agenda? Well, then, our friendly drivers will be more than happy to tell you about some good hideaways while giving you a local flavour of London, so you start feeling at home in the heart of the city.
                                            </p>
                                            <p>
                                                Minibus hire in London is the ultimate convenient and flexible arrangement for the traveller. On arrival at a remote location where you don’t know a soul, who will meet you at the airport, and how will you get around? Minibus Taxi London, as the most obvious choice, can be quite pricey-abusing tourists unfamiliar with the local fares, routes, or currency.
                                            </p>
                                            <p>
                                                Are you travelling in a group? Multiple taxi rides could split your parties and bump up the amount. You could, instead, hire a minibus suitable for your party size, available in seating capacities ranging from 8 to 22.
                                            </p>
                                            <p>
                                                If you make your plans in advance, you waylay unnecessary worries. A minibus hire in London is thus ideally suited for small groups, school outings, or trips for charitable organisations. Late hotel and travel bookings might soon come to interfere with the organisation of the event. If you arrange the transportation beforehand, half the battle is won, and the rest is your own to enjoy.
                                            </p>

                                            <h2 className="text-2xl font-bold text-[#252525]">Book Your London Minibus Hire Today!</h2>
                                            <p>
                                                Searching for reliable and professional minibus hire with driver London? Contact Travel Force today! We give comfortable and professional transport services to suit any group size. Our experienced team ensures every journey is carefully organised to your exact requirements.
                                            </p>
                                            <p>
                                                Each client is assisted throughout the entire booking process, offering personalised support from start to finish by our team. Our customer service team remains available by phone and email and keeps urgent inquiries on the priority list to assist on time. If you really need assistance after regular hours, you can send an email or call your assigned driver directly.
                                            </p>
                                            <p>
                                                Our team—both in the office and on the road—is fully trained to handle unexpected situations and committed to always delivering outstanding service.
                                            </p>
                                            <p>
                                                For reliable and luxury minibus London, give us a ring now at 0208 471 1111, or request an online bespoke quote.
                                            </p>

                                            <h2 className="text-2xl font-bold text-[#252525]">Select from Our Extensive Vehicles for Your Next Trip</h2>
                                            <p>
                                                If you are planning a party, and you need an 8 seater London minibus, or should your office require a larger vehicle with 22 seats and a professional driver to chauffeur the team around, Travel Force will undoubtedly cater to all your needs. All our vehicles are maintained and regularly serviced to ensure full safety conditions and dependability. Our entire team prides itself on great service but doesn’t ever compromise on comfort or customer satisfaction. We guarantee you a smooth and pleasant trip.
                                            </p>
                                        </div>
                                    )}

                                    {/* Read More / Read Less button */}
                                    <div className="header-menu-btn mt-6 text-center">
                                        <button
                                            onClick={() => setShowMore(!showMore)}
                                            className="btn btn-white inline-flex items-center gap-2 border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-50 transition"
                                        >
                                            <span>{showMore ? "Read less" : "Read more"}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="coach-hire-gallery py-10 md:py-12 bg-[#f0f0f0]">
                    <div className="coach-hire-gallery-inner max-w-[1650px] mx-auto px-4">
                        <div className="coach-inner-main flex flex-wrap justify-center gap-4 md:gap-6">
                            {/* 8 Seater MPV */}
                            <div className="coach-item w-[46%] sm:w-[200px] md:max-w-[250px]">
                                <a href="/vehicle/8-seater-mpv/" className="flex flex-col gap-4 text-center text-[#252525] no-underline">
                                    <div className="coach-item-img">
                                        <img
                                            src="https://travelforce.co.uk/wp-content/uploads/2025/06/TF-image-1.png"
                                            alt="8 Seater MPV"
                                            className="w-full h-full max-w-[250px] max-h-[250px] object-cover bg-white mx-auto"
                                        />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-medium leading-tight">8 Seater MPV</h4>
                                </a>
                            </div>

                            {/* 16 Seater Standard Minibus */}
                            <div className="coach-item w-[46%] sm:w-[200px] md:max-w-[250px]">
                                <a href="/vehicle/16-seater-standard-minibus/" className="flex flex-col gap-4 text-center text-[#252525] no-underline">
                                    <div className="coach-item-img">
                                        <img
                                            src="https://travelforce.co.uk/wp-content/uploads/2025/07/Profile-image.png"
                                            alt="16 Seater Standard Minibus"
                                            className="w-full h-full max-w-[250px] max-h-[250px] object-cover bg-white mx-auto"
                                        />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-medium leading-tight">16 Seater Standard Minibus</h4>
                                </a>
                            </div>

                            {/* 16 Seater VIP Minibus */}
                            <div className="coach-item w-[46%] sm:w-[200px] md:max-w-[250px]">
                                <a href="/vehicle/16-seater-vip-minibus/" className="flex flex-col gap-4 text-center text-[#252525] no-underline">
                                    <div className="coach-item-img">
                                        <img
                                            src="https://travelforce.co.uk/wp-content/uploads/2025/06/16-Seater-VIP-Minibus.png"
                                            alt="16 Seater VIP Minibus"
                                            className="w-full h-full max-w-[250px] max-h-[250px] object-cover bg-white mx-auto"
                                        />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-medium leading-tight">16 Seater VIP Minibus</h4>
                                </a>
                            </div>

                            {/* 22 Seater Minibus */}
                            <div className="coach-item w-[46%] sm:w-[200px] md:max-w-[250px]">
                                <a href="/vehicle/22-seater-minibus/" className="flex flex-col gap-4 text-center text-[#252525] no-underline">
                                    <div className="coach-item-img">
                                        <img
                                            src="https://travelforce.co.uk/wp-content/uploads/2025/06/TF-Image-2.png"
                                            alt="22 Seater Minibus"
                                            className="w-full h-full max-w-[250px] max-h-[250px] object-cover bg-white mx-auto"
                                        />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-medium leading-tight">22 Seater Minibus</h4>
                                </a>
                            </div>

                            {/* 34-37 Seater Coach */}
                            <div className="coach-item w-[46%] sm:w-[200px] md:max-w-[250px]">
                                <a href="/vehicle/34-37-seater-coach/" className="flex flex-col gap-4 text-center text-[#252525] no-underline">
                                    <div className="coach-item-img">
                                        <img
                                            src="https://travelforce.co.uk/wp-content/uploads/2025/09/Layer-2.png"
                                            alt="34-37 Seater Coach"
                                            className="w-full h-full max-w-[250px] max-h-[250px] object-cover bg-white mx-auto"
                                        />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-medium leading-tight">34-37 Seater Coach</h4>
                                </a>
                            </div>

                            {/* 86 Seater Coach */}
                            <div className="coach-item w-[46%] sm:w-[200px] md:max-w-[250px]">
                                <a href="/vehicle/86-seater-coach/" className="flex flex-col gap-4 text-center text-[#252525] no-underline">
                                    <div className="coach-item-img">
                                        <img
                                            src="https://travelforce.co.uk/wp-content/uploads/2026/02/Layer-2.png"
                                            alt="86 Seater Coach"
                                            className="w-full h-full max-w-[250px] max-h-[250px] object-cover bg-white mx-auto"
                                        />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-medium leading-tight">86 Seater Coach</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="location-listing py-10 md:py-16 text-[#252525]">
                    <div className="container mx-auto px-4">
                        <div className="location-listing-inner flex flex-col gap-8">
                            <div className="location-title text-center">
                                <h3 className="text-2xl md:text-3xl font-bold">Popular Covered Areas</h3>
                            </div>
                            <div className="location-listing-list border-t-4 border-[#252525] bg-[#FAFAFA] shadow-md p-6 md:p-9">
                                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 list-none p-0 m-0">
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-bethnal-green/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Bethnal Green
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-bow/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Bow
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-brentford/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Brentford
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-brixton/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Brixton
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-camden/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Camden
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-chiswick/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Chiswick
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-docklands/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Docklands
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-dulwich/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Dulwich
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-ealing/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Ealing
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-euston/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Euston
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-forest-hill/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Forest Hill
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-fulham/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Fulham
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-greenwich/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Greenwich
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-hammersmith/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Hammersmith
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-hampstead/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Hampstead
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-hampton/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Hampton
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-highgate/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Highgate
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-isleworth/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Isleworth
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-islington/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Islington
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-kentish-town/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Kentish Town
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-upton-park/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Upton Park
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-kew/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Kew
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-kings-cross/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Kings Cross
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-lambeth/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Lambeth
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-mile-end/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Mile End
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-richmond/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Richmond
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-shoreditch/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Shoreditch
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-southwark/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Southwark
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-spitalfields/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Spitalfields
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-st-pancras/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire St. Pancras
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-stoke-newington/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Stoke Newington
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-east-ham/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire East Ham
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-stratford/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Stratford
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-the-south-bank/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire The South Bank
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-twickenham/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Twickenham
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-walthamstow/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Walthamstow
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-wembley/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Wembley
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-wimbledon/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Wimbledon
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-ilford/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Ilford
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-romford/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Romford
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-dagenham/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Dagenham
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-wandsworth/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Wandsworth
                                        </a>
                                    </li>
                                    <li className="relative pl-7">
                                        <a href="/minibus-hire-whitechapel/" className="text-base md:text-lg font-medium text-[#252525] no-underline hover:underline">
                                            Minibus Hire Whitechapel
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="trustpilot image-trustpilot border-b border-gray-100">
                    {/* Top image banner */}
                    <div className="trustpilot-img bg-[#252525] py-3 text-center">
                        <div className="container mx-auto px-4">
                            <img
                                src="https://travelforce.co.uk/wp-content/uploads/2025/05/Trustpilot-2.png"
                                alt="Minibus Hire with Driver, London Minibus Hire, Coach Hire London"
                                className="mx-auto w-auto"
                            />
                        </div>
                    </div>

                    {/* Desktop widget (visible above 551px) */}
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

                    {/* Mobile widget (visible below 551px) */}
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
                <section className="serv-acc faq-main content-fonts faq-outer py-10 md:py-16">
                    <div className="container mx-auto px-4">
                        <div className="serv-acc-inner flex flex-col gap-8 md:gap-10">
                            {/* Title */}
                            <div className="ocassion-main-top text-center max-w-2xl mx-auto">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#252525]">
                                    Have questions in mind?
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
                {/* You can add m
                ore sections below, e.g.:
            - Vehicle options
            - Why choose us
            - FAQ
            - Quote form
        */}
            </main>
            <Footer />
        </>
    );
}