import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import AnalyticsShowcase from "@/components/AnalyticsShowcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBar />
      <Features />
      <DashboardPreview />
      <HowItWorks />
      <Integrations />
      <AnalyticsShowcase />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
