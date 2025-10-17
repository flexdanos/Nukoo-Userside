import Hero from "../components/Hero";
import Stats from "../components/Stats";
import PremiumProperties from "../components/PremiumProperties";
import WhyChooseUs from "../components/WhyChooseUs";
import CallToAction from "../components/CallToAction";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Premium Properties Section */}
      <PremiumProperties />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
}
