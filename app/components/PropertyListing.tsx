import { useState, useMemo } from "react";
import PropertyCard from "./PropertyCard";
import PropertyFilters from "./PropertyFilters";
import PropertyDetails from "./PropertyDetails";
import PageHero from "./PageHero";
import PropertyCTA from "./PropertyCTA";

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  category: 'Residential' | 'Land' | 'Commercial';
  image: string;
  details: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  acres?: number;
}

const sampleProperties: Property[] = [
  {
    id: "1",
    title: "Luxury Modern Villa",
    location: "Dodowa",
    price: "$2,450,000",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    details: "Modern luxury villa with premium amenities",
    beds: 5,
    baths: 4,
    sqft: 4500
  },
  {
    id: "2",
    title: "Residential Development Land",
    location: "Oyarifa",
    price: "$890,000",
    category: "Land",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    details: "Prime development land ready for construction",
    acres: 5.0
  },
  {
    id: "3",
    title: "Prime Commercial",
    location: "Dodowa",
    price: "$2,450,000",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    details: "Prime commercial space in business district",
    sqft: 12000
  },
  {
    id: "4",
    title: "Residential Development Land",
    location: "Oyarifa",
    price: "$890,000",
    category: "Land",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
    details: "Well-located land with development potential",
    acres: 5.0
  },
  {
    id: "5",
    title: "Contemporary Family Home",
    location: "Appolonia",
    price: "$1,750,000",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    details: "Beautiful family home in quiet neighborhood",
    beds: 4,
    baths: 3,
    sqft: 3800
  },
  {
    id: "6",
    title: "Waterfront Development Land",
    location: "Dodowa",
    price: "$2,450,000",
    category: "Land",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    details: "Exclusive waterfront land with stunning views",
    acres: 12.0
  },
  {
    id: "7",
    title: "Luxury Modern Villa",
    location: "Dodowa",
    price: "$2,450,000",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    details: "Modern luxury villa with premium amenities",
    beds: 5,
    baths: 4,
    sqft: 4500
  },
  {
    id: "8",
    title: "Prime Commercial",
    location: "Dodowa",
    price: "$2,450,000",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    details: "Prime commercial space in business district",
    sqft: 12000
  },
  {
    id: "9",
    title: "Contemporary Family Home",
    location: "Appolonia",
    price: "$1,750,000",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    details: "Beautiful family home in quiet neighborhood",
    beds: 4,
    baths: 3,
    sqft: 3800
  }
];

export default function PropertyListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [sortBy, setSortBy] = useState("Newest First");
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  const filteredProperties = useMemo(() => {
    let filtered = sampleProperties;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by type
    if (typeFilter !== "All Types") {
      filtered = filtered.filter(property => property.category === typeFilter);
    }

    // Sort properties
    switch (sortBy) {
      case "Price Low to High":
        filtered = [...filtered].sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[$,]/g, ''));
          const priceB = parseInt(b.price.replace(/[$,]/g, ''));
          return priceA - priceB;
        });
        break;
      case "Price High to Low":
        filtered = [...filtered].sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[$,]/g, ''));
          const priceB = parseInt(b.price.replace(/[$,]/g, ''));
          return priceB - priceA;
        });
        break;
      case "Most Popular":
        // For demo purposes, just reverse the order
        filtered = [...filtered].reverse();
        break;
      default:
        // Newest First - keep original order
        break;
    }

    return filtered;
  }, [searchQuery, typeFilter, sortBy]);

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
    const selectedProperty = sampleProperties.find(p => p.id === selectedPropertyId);
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
