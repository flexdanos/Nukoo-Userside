export default function PropertyCTA() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Can't Find What You're Looking For?
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Our team can help you find the perfect property that meets your specific requirements
        </p>
        
        <button className="bg-[#1a1464] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#252080] transition-colors duration-200 flex items-center gap-2 mx-auto">
          Contact Us
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
