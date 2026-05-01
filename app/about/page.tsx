import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="serv-hero content-fonts relative">
          <div
            className="serv-inner-hero h-[430px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('https://travelforce.co.uk/wp-content/uploads/2025/06/image-2.jpg')",
            }}
          >
            <div className="serv-hero-info text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                About Travel Force
              </h1>
              <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
                London's trusted minibus and coach hire service since 2010
              </p>
            </div>
          </div>
        </section>

        {/* About Content Section */}
        <section className="about-content py-10 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="about-text space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#252525]">
                  Your Journey, Our Passion
                </h2>
                <p className="text-[#3D4C5E]">
                  At Travel Force, we believe that group travel should be effortless, comfortable, and memorable. 
                  Founded in 2010, we've grown from a small minibus operator to one of London's most trusted 
                  transport providers, serving thousands of satisfied customers every year.
                </p>
                <p className="text-[#3D4C5E]">
                  Whether you're planning a school trip, corporate event, wedding, or airport transfer, 
                  our modern fleet of minibuses and coaches – from 8 to 86 seats – ensures that your group 
                  travels together in style and safety.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <p className="italic text-[#3D4C5E]">
                    "We don't just drive you from A to B – we create experiences that make your journey 
                    as enjoyable as your destination."
                  </p>
                  <p className="font-semibold text-[#252525] mt-2">— Richard Elliot, Director</p>
                </div>
                <Link href="/get-quick-quote" className="btn btn-black inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                  <span>Get a Free Quote</span>
                  <img src="https://travelforce.co.uk/wp-content/uploads/2025/05/Arrow-Right.svg" alt="" className="w-4 h-4" />
                </Link>
              </div>
              <div className="about-image">
                <img
                  src="https://travelforce.co.uk/wp-content/uploads/2025/06/classy-minibus.png"
                  alt="Travel Force Minibus Fleet"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us / Stats Section (optional but adds value) */}
        <section className="why-choose-us-stats bg-[#F7F7F7] py-10 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#252525] mb-8">
              Why Choose Travel Force?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-black mb-2">15+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-black mb-2">1000+</div>
                <p className="text-gray-600">5-Star Reviews</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-black mb-2">50+</div>
                <p className="text-gray-600">Modern Vehicles</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-4xl font-bold text-black mb-2">24/7</div>
                <p className="text-gray-600">Customer Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trustpilot Banner (optional – to keep consistency) */}
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

        {/* CTA Section */}
        <section className="get-quote content-fonts bg-light bg-gray-50 py-10 md:py-16 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="get-quote-inner flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
              <div className="get-quote-desc">
                <h2 className="text-2xl md:text-3xl font-bold text-[#252525]">
                  Ready to Travel with Us?
                </h2>
                <p className="text-[#3D4C5E]">
                  Get your personalised quote today and experience the Travel Force difference.
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