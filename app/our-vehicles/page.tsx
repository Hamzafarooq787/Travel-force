import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function OurVehiclesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="serv-hero content-fonts relative">
          <div
            className="serv-inner-hero h-[430px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('https://travelforce.co.uk/wp-content/uploads/2025/06/image-2.jpg')",
            }}
          >
            <div className="serv-hero-info text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                Our Vehicles
              </h1>
            </div>
          </div>
        </section>

        {/* Trustpilot Image Banner (only image) */}
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

        {/* Fleet Grid Section */}
        <section className="our-fleet py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="serv-hero-info-cpt text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-[#252525]">Our Vehicles</h1>
            </div>
            <div className="our-fleet-inner grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {vehicles.map((vehicle, idx) => (
                <div key={idx} className="our-fleet-single border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm">
                  <div className="fleet-img h-48 md:h-56 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="our-fleet-desc p-4 md:p-5 flex flex-col gap-3">
                    <div className="fleet-title">
                      <div className="fleet-title-inner">
                        <h4 className="text-xl font-bold text-[#252525]">{vehicle.title}</h4>
                        <h6 className="text-sm text-gray-500 mt-1">{vehicle.badge}</h6>
                      </div>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {vehicle.description}
                      </p>
                    </div>
                    <div className="header-menu-btn flex flex-wrap gap-3 mt-2">
                      <a
                        href={vehicle.link}
                        className="inline-flex items-center gap-1 bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition"
                      >
                        <span>View Details</span>
                        <img
                          src="https://travelforce.co.uk/wp-content/uploads/2025/05/Arrow-Right.svg"
                          alt="arrow"
                          className="w-3 h-3"
                        />
                      </a>
                      <a
                        href={vehicle.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-gray-300 text-sm px-4 py-2 rounded-full hover:bg-gray-50 transition"
                      >
                        <img
                          src="https://travelforce.co.uk/wp-content/uploads/2025/05/whatsapp.svg"
                          alt="WhatsApp"
                          className="w-4 h-4"
                        />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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

        {/* CTA Section (Get Quote) - Dark background */}
        <section className="get-quote content-fonts bg-dark bg-[#252525] text-white py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="get-quote-inner flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
              <div className="get-quote-desc">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Get a Minibus and Coach Hire Quote Today!
                </h2>
                <p className="text-gray-300">
                  Festival Season is Here! Travel Together with Our Coach Hire Solutions for the Ultimate Rave Journey!
                </p>
              </div>
              <a
                href="/get-quick-quote"
                className="btn btn-white inline-flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition"
              >
                <span>Request a Free Quote</span>
                <img
                  src="https://travelforce.co.uk/wp-content/uploads/2025/05/arrow-right-b.svg"
                  alt="arrow"
                  className="w-4 h-4"
                />
              </a>
            </div>
            <div className="line-diff mt-10 h-px bg-white/10"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Vehicle data from the original HTML
const vehicles = [
  {
    title: "8 Seater MPV",
    badge: "(Hire with Driver)",
    description:
      "This comfortable multi purpose vehicle is best for small groups whether",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-26-at-13.28.01_b1af91d4.jpg",
    link: "/vehicle/8-seater-mpv",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=4402084711111&text=Hello,%0AI am interested in this car:%0A8 Seater MPV%0ALink: https://travelforce.co.uk/vehicle/8-seater-mpv/",
  },
  {
    title: "16 Seater Standard Minibus",
    badge: "(Hire with Driver + Self Drive)",
    description:
      "The 16 seater standard minibus is a perfect travel option for going on",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/06/01.jpg",
    link: "/vehicle/16-seater-standard-minibus",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=4402084711111&text=Hello,%0AI am interested in this car:%0A16 Seater Standard Minibus%0ALink: https://travelforce.co.uk/vehicle/16-seater-standard-minibus/",
  },
  {
    title: "16 Seater VIP Minibus",
    badge: "(Hire with Driver)",
    description:
      "This VIP fleet has everything you need and can think of. From comfy",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/06/image-26.png",
    link: "/vehicle/16-seater-vip-minibus",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=4402084711111&text=Hello,%0AI am interested in this car:%0A16 Seater VIP Minibus%0ALink: https://travelforce.co.uk/vehicle/16-seater-vip-minibus/",
  },
  {
    title: "22 Seater Minibus",
    badge: "(Hire with Driver)",
    description:
      "This comfy fleet can carry up to 22 people with ease. You will find",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/06/IMG_4811.jpeg",
    link: "/vehicle/22-seater-minibus",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=4402084711111&text=Hello,%0AI am interested in this car:%0A22 Seater Minibus%0ALink: https://travelforce.co.uk/vehicle/22-seater-minibus/",
  },
  {
    title: "34-37 Seater Coach",
    badge: "(Hire with Driver)",
    description:
      "A trip becomes even more memorable when you are with your loved ones.....",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/06/image-1.jpg",
    link: "/vehicle/34-37-seater-coach",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=4402084711111&text=Hello,%0AI am interested in this car:%0A34-37 Seater Coach%0ALink: https://travelforce.co.uk/vehicle/34-37-seater-coach/",
  },
  {
    title: "49-57 Seater Coach",
    badge: "(Hire with Driver)",
    description:
      "Whether you need the fleet for marriage parties or going on a full family vacation, this fleet can make",
    image: "https://travelforce.co.uk/wp-content/uploads/2025/06/image-29.png",
    link: "/vehicle/49-57-seater-coach",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=4402084711111&text=Hello,%0AI am interested in this car:%0A49-57 Seater Coach%0ALink: https://travelforce.co.uk/vehicle/49-57-seater-coach/",
  },
  {
    title: "86 Seater Coach",
    badge: "(Hire with Driver)",
    description:
      "Whether you need the fleet for marriage parties or going on a full family vacation, this fleet can make",
    image: "https://travelforce.co.uk/wp-content/uploads/2026/01/S5-Exterior-Side.jpg",
    link: "/vehicle/86-seater-coach",
    whatsappLink:
      "https://api.whatsapp.com/send?phone=4402084711111&text=Hello,%0AI am interested in this car:%0A86 Seater Coach%0ALink: https://travelforce.co.uk/vehicle/86-seater-coach/",
  },
];