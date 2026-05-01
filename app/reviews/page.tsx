import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Heading */}
        <div className="wrap">
          <div id="primary" className="content-area">
            <main id="main" className="site-main content-fonts legal-temp">
              <div className="container mx-auto px-4">
                <div className="legal-content text-center py-10 md:py-16">
                  <h1 className="text-3xl md:text-4xl font-bold text-[#252525]">Reviews</h1>
                </div>
              </div>

              {/* Trustpilot Widget – Desktop version (full size) */}
              <section className="trustpilot image-trustpilot border-b border-gray-100">
                <div className="trust-pilot-widget py-10 md:py-16">
                  <div className="container mx-auto px-4">
                    <div
                      className="trustpilot-widget"
                      data-locale="en-GB"
                      data-template-id="539adbd6dec7e10e686debee"
                      data-businessunit-id="61dd4656c5bdf934bb6b1e40"
                      data-style-height="500px"
                      data-style-width="100%"
                      data-theme="light"
                      data-stars="5"
                      data-review-languages="en"
                    ></div>
                  </div>
                </div>

                {/* Mobile widget (carousel) – hidden on larger screens, visible only below 551px */}
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
                    ></div>
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
          </div>
        </div>
      </main>
      <Footer />
      {/* Trustpilot bootstrap script – ensure it loads after the widgets are in the DOM */}
      <Script
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}