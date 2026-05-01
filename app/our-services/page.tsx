import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function OurServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="serv-hero content-fonts relative">
          <div
            className="serv-inner-hero h-[430px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('https://travelforce.co.uk/wp-content/uploads/2025/05/image.jpg')",
            }}
          >
            <div className="serv-hero-info text-center text-white px-4 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                Reliable Travel, Tailored for You
              </h1>
              <p className="text-lg md:text-xl mt-4 text-gray-100">
                From minibus hire to full coach journeys — we deliver safe, comfortable, and affordable group travel solutions across the UK.
              </p>
            </div>
          </div>
        </section>

        {/* Services Cards */}
        <section className="serv-cards-outer py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="serv-card-inner">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className={`serv-card-single flex flex-col md:flex-row gap-8 md:gap-12 py-8 md:py-12 border-b border-gray-200 ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="serv-card-img md:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full max-h-[306px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="serv-card-info md:w-1/2 flex flex-col gap-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#252525]">{service.title}</h3>
                    <p className="text-[#767676] text-base md:text-lg leading-relaxed line-clamp-6">
                      {service.description}
                    </p>
                    <div className="header-menu-btn mt-2">
                      <a
                        href={service.link}
                        className="btn btn-black inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full w-fit hover:bg-gray-800 transition"
                      >
                        <span>View Details</span>
                        <img
                          src="https://travelforce.co.uk/wp-content/uploads/2025/05/Arrow-Right.svg"
                          alt="arrow"
                          className="w-4 h-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section (light background) */}
        <section className="get-quote content-fonts bg-light bg-white py-10 md:py-16 border-t border-gray-100">
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

// Data for all services (11 items)
const services = [
  {
    title: "Airport Transfer",
    description:
      "Get the Travel Force airport transfer service from prominent airports in London namely Heathrow, Gatwick, Stansted, City Airport and Southend Airport. Our pick and drop off services are available to Heathrow, Gatwick, London City Airport and South end Airport. To give you a seamless transfer, your driver will arrive 30 minutes before your flight lands. Moreover, we track all flights to monitor any changes and ensure you get a pleasant pickup service. At the Travel Force, we give secure, comfortable and enjoyable experiences when they hire minibus to Heathrow or other airports.",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/airport.png",
    link: "/service/airport-transfer",
  },
  {
    title: "Corporate Travel",
    description:
      "Corporate travel is different from any other travel and keeping this in mind we provide classy professional vehicles that best fit for any business occasion be it business meetings, business tours or business events. Travel Force values your time, thus we take extra care while dealing with corporate travel bookings.",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/corporate.png",
    link: "/service/corporate-travel",
  },
  {
    title: "School Transport",
    description:
      "When it comes to school travels, nothing can beat the Travel Force. To give children a pleasant as well as safe experience, we have equipped our vehicles with GPS systems and other security features. Choose Travel Force for safe and secure travel solutions for annual school trips, event days out, school runs or any other outing.",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-14.png",
    link: "/service/school-transport",
  },
  {
    title: "Sporting Hire",
    description:
      "Sporting events are exciting and Travel Force is a perfect choice for travelling to sporting events. Whether it’s local or anywhere in the UK, we offer comfortable travel services to our customers. Along with other sporting happenings we cover trips to horse race events such as Ascot, Cheltenham, Newbury, Lingfield, Newmarket and Epsom.",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-16.png",
    link: "/service/sporting-hire",
  },
  {
    title: "Nights Out",
    description:
      "To keep the nights of our customers happening, we offer travel solutions for night outs. Whether you want to go to a local club or a club on the outskirts of the town, we are here to assist you. Because of our affordable prices, Travel Force is the best choice you can make for your night out travels and getting you back home safely.",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-17.png",
    link: "/service/nights-out",
  },
  {
    title: "Events and Exhibitions",
    description:
      "London is known as one of the most happening cities and exhibitions and events play an important role in this. You can take the services of Travel Force for visiting the most famous sites such as The O2 Arena, Excel London, Royal Albert Hall, Birmingham NEC and others. You can hire a minibus or a coach according to your needs.",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-18.png",
    link: "/service/events-exhibitions",
  },
  {
    title: "Film, TV and Media",
    description:
      "If you want to go for photoshoots or video shoots, Travel Force can provide you with convenient travel solutions. Hire a Minibus along with a driver and enjoy the rest of your trip hassle-free. Our travel plans are flexible and you can take the driver to the area of your choice for the shoot. In our clientele, we have BBC One, ITV, Channel 4 and Channel 5 and others who have travelled on our fleet for their TV shows.",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-21.png",
    link: "/service/film-tv-media",
  },
  {
    title: "Weddings",
    description:
      "Wedding is one of the most memorable days of a person’s life and that’s why we have got a special and comfortable fleet to make travel easy on your special occasion. You can get transport for any venue in and across London. Choose Travel Force so that you can enjoy your day without worrying about taking your guests to the venue and back home.",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-20.png",
    link: "/service/weddings",
  },
  {
    title: "London Tours",
    description:
      "London is a place where people from different countries come to visit beautiful places. Travel Force provides minibus hire service for London tours and takes you to all the places of interest in London. From West End and Trafalgar to the Houses of Parliament, our experienced drivers are well aware of all the tourist attractions in the city. You can book a fleet with a driver and rest is on us to make your journey comfortable and memorable.",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-22.png",
    link: "/service/london-tours",
  },
  {
    title: "Theme Park Hire",
    description:
      "There is no doubt that theme parks are a great option for spending a complete day with your friends and family. And when you are in London, there are plenty of theme parks you can choose from. You can visit Legoland, Berkshire and experience the 4D cinemas and much more. Also, there are many other attractions where you can try the adventure of water rides and rollercoasters. Travel Force provides minibus hire service for going to all the major theme parks in London.",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/image-24.png",
    link: "/service/theme-park-hire",
  },
  {
    title: "Funeral Bus Hire",
    description:
      "Travel Force understands that this time is tough for people. Thus, we offer hassle-free travel solutions for funerals so that people can reach the place without any problem. This moment can be emotional as well as hectic. So we make sure that a person doesn’t have to worry about the travel arrangements. Our drivers are always understanding of the situation and offer all kinds of support during the journey.",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/05/WhatsApp-Image-2026-02-13-at-10.55.41.jpeg",
    link: "/service/funeral-bus-hire",
  },
];