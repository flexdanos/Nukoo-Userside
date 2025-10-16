import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleGetStarted = () => {
    console.log({ location, propertyType, priceRange });
    // Add your search logic here
  };

  return (
    <section className="relative h-[700px] sm:h-[650px] md:h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-6 text-center">
        <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Find Your Dream Property
        </h1>
        <p className="mb-8 sm:mb-10 md:mb-12 max-w-3xl text-base sm:text-lg md:text-xl text-white/90 px-2">
          Discover exceptional lands, residential and commercial properties tailored to your
          investment goals. Your journey to property ownership starts here.
        </p>

        {/* Search Form */}
        <div className="w-full max-w-4xl rounded-xl sm:rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-2xl">
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-4">
            {/* Location Dropdown */}
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 sm:px-4 py-2.5 sm:py-3 pr-10 text-sm sm:text-base text-gray-700 focus:border-[#1a1464] focus:outline-none focus:ring-2 focus:ring-[#1a1464]/20"
              >
                <option value="">Location</option>
                <option value="oyarifa">Oyarifa</option>
                <option value="adenta">Adenta</option>
                <option value="madina">Madina</option>
                <option value="ashongman">Ashongman</option>
                <option value="dome">Dome</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 sm:right-3 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Property Type Dropdown */}
            <div className="relative">
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 sm:px-4 py-2.5 sm:py-3 pr-10 text-sm sm:text-base text-gray-700 focus:border-[#1a1464] focus:outline-none focus:ring-2 focus:ring-[#1a1464]/20"
              >
                <option value="">Property Type</option>
                <option value="land">Land</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 sm:right-3 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Price Range Dropdown */}
            <div className="relative">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 sm:px-4 py-2.5 sm:py-3 pr-10 text-sm sm:text-base text-gray-700 focus:border-[#1a1464] focus:outline-none focus:ring-2 focus:ring-[#1a1464]/20"
              >
                <option value="">Price Range</option>
                <option value="0-50000">$0 - $50,000</option>
                <option value="50000-100000">$50,000 - $100,000</option>
                <option value="100000-200000">$100,000 - $200,000</option>
                <option value="200000-500000">$200,000 - $500,000</option>
                <option value="500000+">$500,000+</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 sm:right-3 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Get Started Button */}
            <button
              onClick={handleGetStarted}
              className="rounded-lg bg-[#1a1464] px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all hover:bg-[#252080] focus:outline-none focus:ring-2 focus:ring-[#1a1464]/50 active:scale-95"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
