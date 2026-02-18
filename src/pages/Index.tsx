import DiscountBanner from "@/components/DiscountBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServicesSection from "@/components/ServicesSection";
import ShopSection from "@/components/ShopSection";
import StorySection from "@/components/StorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterContact from "@/components/FooterContact";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <ShopSection />
      <StorySection />
      <TestimonialsSection />
      <FooterContact />
      <DiscountBanner />
      <CookieConsent />
    </div>
  );
};

export default Index;