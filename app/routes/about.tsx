import PageHero from "../components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="About Nukoo Constructions"
        subtitle="Building dreams and creating exceptional spaces for over a decade"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
        backgroundImageAlt="Construction site with modern buildings"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Learn more about our company, our mission, and our commitment to excellence in real estate.
            We have been building dreams and creating exceptional spaces for over a decade, delivering 
            quality construction and innovative design solutions.
          </p>
        </div>
      </div>
    </>
  );
}
