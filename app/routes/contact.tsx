import PageHero from "../components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Contact Us"
        subtitle="Get in touch with our team for personalized assistance"
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop"
        backgroundImageAlt="Modern office building for contact information"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Get in touch with our team for personalized assistance with your real estate needs.
            We're here to help you find the perfect property or answer any questions you may have.
          </p>
        </div>
      </div>
    </>
  );
}
