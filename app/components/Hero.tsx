import { useState, useCallback } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetStarted = useCallback(async () => {
    setError("");
    
    if (!location || !propertyType || !priceRange) {
      setError("Please fill in all fields to continue");
      return;
    }
    
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log({ location, propertyType, priceRange });
      // Add your search logic here
    } catch (error) {
      console.error("Search failed:", error);
      setError("Search failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [location, propertyType, priceRange]);

  return (
    <section className="relative h-[700px] sm:h-[650px] md:h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop')`,
        }}
        role="img"
        aria-label="Modern house exterior with for sale sign"
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
        <div className="w-full max-w-4xl rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 shadow-2xl">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-4">
            {/* Location Dropdown */}
            <div className="relative">
              <label htmlFor="location-dropdown" className="sr-only">
                Choose a location
              </label>
              <select
                id="location-dropdown"
                aria-label="Choose a location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGetStarted()}
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 sm:px-4 py-2.5 sm:py-3 pr-10 text-sm sm:text-base text-gray-700 focus:border-[#1a1464] focus:outline-none focus:ring-2 focus:ring-[#1a1464]/20 transition-colors"
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
              <label htmlFor="property-type-dropdown" className="sr-only">
                Choose a property type
              </label>
              <select
                id="property-type-dropdown"
                aria-label="Choose a property type"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGetStarted()}
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 sm:px-4 py-2.5 sm:py-3 pr-10 text-sm sm:text-base text-gray-700 focus:border-[#1a1464] focus:outline-none focus:ring-2 focus:ring-[#1a1464]/20 transition-colors"
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
              <label htmlFor="price-range-dropdown" className="sr-only">
                Choose a price range
              </label>
              <select
                id="price-range-dropdown"
                aria-label="Choose a price range"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleGetStarted()}
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 sm:px-4 py-2.5 sm:py-3 pr-10 text-sm sm:text-base text-gray-700 focus:border-[#1a1464] focus:outline-none focus:ring-2 focus:ring-[#1a1464]/20 transition-colors"
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
              disabled={isLoading}
              className="rounded-lg bg-[#1a1464] px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition-all hover:bg-[#252080] focus:outline-none focus:ring-2 focus:ring-[#1a1464]/50 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Get Started
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
