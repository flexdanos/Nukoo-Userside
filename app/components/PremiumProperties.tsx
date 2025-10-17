import { MapPin, ArrowRight } from "lucide-react";

export default function PremiumProperties() {
  const properties = [
    {
      id: 1,
      category: "Commercial",
      title: "Luxury Modern Villa",
      location: "Oyarifa",
      price: "$4,800",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "Residential",
      title: "Luxury Modern Villa",
      location: "Oyarifa",
      price: "$4,800",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "Land",
      title: "Development Land",
      location: "Oyarifa",
      price: "$4,800",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
              Explore Our Premium
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
              Handpicked properties that offer the best value and location for your investment
            </p>
          </div>
          <a
            href="/properties"
            className="inline-flex items-center gap-2 text-[#1a1464] font-semibold hover:gap-3 transition-all group self-start sm:self-auto"
          >
            View all properties
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute left-4 top-4">
                  <span className="inline-block rounded-md bg-[#1a1464] px-3 py-1.5 text-xs sm:text-sm font-semibold text-white">
                    {property.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="rounded-full border-2 border-gray-900 px-4 py-2">
                      <span className="text-sm sm:text-base font-bold text-gray-900">
                        {property.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
