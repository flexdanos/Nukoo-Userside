import { MapPin, ArrowRight } from "lucide-react";
import { useGetCompanyPropertiesQuery, type Property as ApiProperty } from "../store/api";

export default function PremiumProperties() {
  // API call to fetch only 3 premium properties
  const { data: propertiesResponse, error, isLoading } = useGetCompanyPropertiesQuery({
    sortBy: "price",
    sortOrder: "desc", // Get highest priced properties for "premium"
    status: "available"
  });

  // Transform API data and limit to 3 properties
  const properties = propertiesResponse?.slice(0, 3).map((property: ApiProperty) => ({
    id: property._id,
    category: property.type,
    title: property.title,
    location: `${property.location.city}, ${property.location.area}`,
    price: `${property.currency} ${property.price.toLocaleString()}`,
    image: property.thumbnail || (property.images[0]?.url || ''),
  })) || [];

  // Loading state
  if (isLoading) {
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
          </div>

          {/* Loading Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gray-200 animate-pulse">
                  <div className="absolute left-4 top-4">
                    <div className="h-6 w-20 bg-gray-300 rounded-md"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="h-5 w-3/4 bg-gray-300 rounded mb-2"></div>
                      <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
                    </div>
                    <div className="ml-4">
                      <div className="h-8 w-20 bg-gray-300 rounded-full"></div>
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

  // Error state
  if (error) {
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
          </div>

          {/* Error Message */}
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              Unable to load premium properties at this time.
            </div>
          </div>
        </div>
      </section>
    );
  }

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
          {properties.map((property: any) => (
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
