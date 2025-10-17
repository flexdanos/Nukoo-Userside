import { ChevronRight, MapPin } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  onLearnMore: () => void;
}

export default function ServiceCard({
  title,
  description,
  features,
  image,
  imageAlt,
  onLearnMore
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {/* FOR SALE Badge */}
        <div className="absolute top-3 left-3">
        </div>
        {/* Location Pin Icon */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-white rounded-full p-2 shadow-md">
            <MapPin className="h-4 w-4 text-gray-700" />
          </div>
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 bg-[#1a1464] rounded-full mt-2 flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Learn More Button */}
        <button
          onClick={onLearnMore}
          className="w-full border-2 border-[#1a1464] text-[#1a1464] py-3 px-4 rounded-lg font-medium hover:bg-[#1a1464] hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
        >
          Learn More
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
