import CyberAuroraLiquidNav from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/Hero";
import ServicesSection from "@/components/services/Services";
import PortfolioSection from "@/components/portfolio/Portfolio";
import PricingSection from "@/components/pricing/Pricing";
import AboutSection from "@/components/about/About";
import ContactSection from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
      <CyberAuroraLiquidNav />
      <HeroSection />
      <PricingSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
