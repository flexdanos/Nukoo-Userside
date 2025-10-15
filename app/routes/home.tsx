export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a1464] to-[#252080] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to Nukoo Constructions</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Building dreams into reality with quality construction and real estate services in Oyarifa and beyond.
          </p>
          <button className="bg-white text-[#1a1464] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Explore Properties
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#1a1464]">Construction</h3>
            <p className="text-gray-600">
              Professional construction services for residential and commercial projects.
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#1a1464]">Real Estate</h3>
            <p className="text-gray-600">
              Find your dream property with our extensive real estate portfolio.
            </p>
          </div>
          <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-[#1a1464]">Consultation</h3>
            <p className="text-gray-600">
              Expert consultation services for all your construction needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
