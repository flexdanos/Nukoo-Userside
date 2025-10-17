interface PropertyCardProps {
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
  onViewDetails: (id: string) => void;
}

export default function PropertyCard({ 
  id,
  title, 
  location, 
  price, 
  category, 
  image, 
  details,
  beds,
  baths,
  sqft,
  acres,
  onViewDetails
}: PropertyCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Residential':
        return 'bg-blue-600';
      case 'Land':
        return 'bg-green-600';
      case 'Commercial':
        return 'bg-purple-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Property Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Category Tag */}
        <div className={`absolute top-3 left-3 ${getCategoryColor(category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {category}
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        
        {/* Location */}
        <div className="flex items-center text-gray-600 mb-3">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{location}</span>
        </div>

        {/* Price */}
        <div className="text-2xl font-bold text-[#1a1464] mb-4">
          {price}
        </div>

        {/* Property Details */}
        <div className="text-gray-600 mb-6">
          {category === 'Residential' && beds && baths && sqft && (
            <div className="flex items-center gap-4 text-sm">
              <span>{beds} 🛏️</span>
              <span>{baths} 🛁</span>
              <span>{sqft.toLocaleString()} sq ft</span>
            </div>
          )}
          {category === 'Land' && acres && (
            <div className="text-sm">
              {acres} acres
            </div>
          )}
          {category === 'Commercial' && sqft && (
            <div className="text-sm">
              {sqft.toLocaleString()} sq ft
            </div>
          )}
        </div>

        {/* View Details Button */}
        <button 
          onClick={() => onViewDetails(id)}
          className="w-full bg-[#1a1464] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#252080] transition-colors duration-200 flex items-center justify-center gap-2"
        >
          View Details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
