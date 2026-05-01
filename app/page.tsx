import Header from "@/components/header/Header";
import HeroSection from "@/components/home/HeroSection";
import VehicleSlider from "@/components/home/VehicleSlider";
import OccasionCards from "@/components/home/OccasionCards";
import TrustpilotSection from "@/components/home/TrustpilotSection";
import BookingSteps from "@/components/home/BookingSteps";
import ExperienceSection from "@/components/home/ExperienceSection";
import ReadMoreSection from "@/components/home/ReadMoreSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FullWidthSlider from "@/components/home/FullWidthSlider";
import FAQSection from "@/components/home/FAQSection";
import GetQuoteCTA from "@/components/home/GetQuoteCTA";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <VehicleSlider />
        <OccasionCards />
        <TrustpilotSection />
        <BookingSteps />
        <ExperienceSection />
        <ReadMoreSection />
        <WhyChooseUs />
        <FullWidthSlider />
        <FAQSection />
        <GetQuoteCTA />
      </main>
      <Footer />
    </>
  );
}