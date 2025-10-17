import { ArrowRight, Check } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* First Section: Your Trusted Real Estate Partner */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
              alt="Modern house for sale"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Your Trusted Real Estate Partner
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 15 years of experience in land acquisition and property development, 
              we bring unmatched expertise and dedication to every project.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1a1464] text-[#1a1464] font-medium rounded-lg hover:bg-[#1a1464] hover:text-white transition-all duration-300">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Second Section: Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Why Choose Us
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1a1464] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-600 text-lg">
                  Expert market analysis and property valuation
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1a1464] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-600 text-lg">
                  Comprehensive legal and documentation support
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1a1464] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-600 text-lg">
                  End-to-end project management services
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1a1464] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-600 text-lg">
                  Transparent pricing with no hidden costs
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-[#1a1464] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-600 text-lg">
                  Post-sale support and property management
                </p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
              alt="Modern house for sale"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
