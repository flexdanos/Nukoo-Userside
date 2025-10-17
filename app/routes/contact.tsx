import ContactUs from "~/components/ContactUs";
import PageHero from "../components/PageHero";
import MapDisplay from "~/components/MapDisplay";
import FAQ from "~/components/FAQ";

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Contact Us"
        subtitle="Get in touch with our team for personalized assistance"
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop"
        backgroundImageAlt="Modern office building for contact information"
      />
      <ContactUs/>
      <MapDisplay/>
      <FAQ/>
    </>
  );
}
