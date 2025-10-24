import { useState, useMemo } from "react";
import PropertyCard from "./PropertyCard";
import PropertyFilters from "./PropertyFilters";
import PropertyDetails from "./PropertyDetails";
import PageHero from "./PageHero";
import PropertyCTA from "./PropertyCTA";
import { useGetCompanyPropertiesQuery, type Property as ApiProperty } from "../store/api";

export default function PropertyListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [sortBy, setSortBy] = useState("Newest First");
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  // API call to fetch properties - now reactive to filter changes
  const { data: propertiesResponse, error, isLoading } = useGetCompanyPropertiesQuery({
    sortBy: sortBy === "Price Low to High" ? "price" : 
            sortBy === "Price High to Low" ? "price" : 
            sortBy === "Most Popular" ? "createdAt" : "createdAt",
    sortOrder: sortBy === "Price Low to High" ? "asc" : 
               sortBy === "Price High to Low" ? "desc" : "desc",
    type: typeFilter !== "All Types" ? typeFilter : undefined,
    status: "available"
  });

  // Transform API data to match PropertyCard props
  const transformedProperties = useMemo(() => {
    if (!propertiesResponse) return [];
    
    return propertiesResponse.map((property: ApiProperty) => ({
      id: property._id,
      title: property.title,
      location: `${property.location.city}, ${property.location.area}`,
      price: `${property.currency} ${property.price.toLocaleString()}`,
      category: property.type as 'Residential' | 'Land' | 'Commercial',
      image: property.thumbnail || (property.images[0]?.url || ''),
      details: property.description,
      beds: property.bedrooms,
      baths: property.bathrooms,
      sqft: property.size,
      acres: property.type === 'Land' ? property.size / 43560 : undefined // Convert sq ft to acres for land
    }));
  }, [propertiesResponse]);

  const filteredProperties = useMemo(() => {
    let filtered = transformedProperties;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [transformedProperties, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleTypeFilter = (type: string) => {
    setTypeFilter(type);
  };

  const handleSortFilter = (sort: string) => {
    setSortBy(sort);
  };

  const handleMoreFilters = () => {
    // Implement more filters functionality
    console.log("More filters clicked");
  };

  const handleViewDetails = (id: string) => {
    setSelectedPropertyId(id);
  };

  const handleBackToList = () => {
    setSelectedPropertyId(null);
  };

  // If a property is selected, show the details view
  if (selectedPropertyId) {
    const selectedProperty = transformedProperties.find(p => p.id === selectedPropertyId);
    if (selectedProperty) {
      // Transform the property data to match PropertyDetails interface
      const propertyDetails = {
        id: selectedProperty.id,
        title: selectedProperty.title,
        location: selectedProperty.location,
        price: parseInt(selectedProperty.price.replace(/[$,]/g, '')),
        type: selectedProperty.category,
        bedrooms: selectedProperty.beds || 0,
        bathrooms: selectedProperty.baths || 0,
        size: selectedProperty.sqft || 0,
        images: [
          selectedProperty.image,
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
        ],
        description: selectedProperty.details,
        features: [
          "Modern Architecture",
          "Premium Materials",
          "Smart Home Technology",
          "Landscaped Gardens",
          "Swimming Pool",
          "Garage Parking",
          "Security System",
          "Energy Efficient"
        ],
        locationDetails: `Located in the heart of ${selectedProperty.location}, this property offers excellent connectivity to major business districts, shopping centers, and educational institutions. The area is well-developed with modern infrastructure and amenities.`
      };

      return (
        <PropertyDetails 
          property={propertyDetails} 
          onBack={handleBackToList} 
        />
      );
    }
  }

  // Loading state
  if (isLoading) {
    return (
      <>
        <PageHero 
          title="Discover Premium Properties"
          subtitle="Browse our extensive collection of residential, commercial, and land properties"
          backgroundImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop"
          backgroundImageAlt="Classic house rooftops and architectural details"
        />
        <div className="bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a1464] mx-auto"></div>
              <div className="text-gray-600 mt-4">Loading properties...</div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <PageHero 
          title="Discover Premium Properties"
          subtitle="Browse our extensive collection of residential, commercial, and land properties"
          backgroundImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop"
          backgroundImageAlt="Classic house rooftops and architectural details"
        />
        <div className="bg-gray-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center py-12">
              <div className="text-red-600 text-lg mb-4">
                Failed to load properties. Please try again later.
              </div>
              <button
                onClick={() => window.location.reload()}
                className="bg-[#1a1464] text-white px-6 py-3 rounded-lg hover:bg-[#0f0d3a] transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero 
        title="Discover Premium Properties"
        subtitle="Browse our extensive collection of residential, commercial, and land properties"
        backgroundImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop"
        backgroundImageAlt="Classic house rooftops and architectural details"
      />
      <div className="bg-gray-50 min-h-screen">
        {/* Filters */}
        <PropertyFilters
          onSearch={handleSearch}
          onTypeFilter={handleTypeFilter}
          onSortFilter={handleSortFilter}
          onMoreFilters={handleMoreFilters}
          totalProperties={filteredProperties.length}
          currentTypeFilter={typeFilter}
          currentSortBy={sortBy}
          currentSearchQuery={searchQuery}
        />

        {/* Properties Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                {...property}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* No Results Message */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                No properties found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setTypeFilter("All Types");
                  setSortBy("Newest First");
                }}
                className="mt-4 text-[#1a1464] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
      <PropertyCTA />
    </>
  );
}
