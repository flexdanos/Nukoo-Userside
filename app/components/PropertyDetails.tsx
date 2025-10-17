import { useState } from "react";
import { MapPin, Bed, Bath, Square, Phone, Mail, MessageCircle, Calendar, ChevronLeft } from "lucide-react";

interface PropertyDetailsProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    type: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    images: string[];
    description: string;
    features: string[];
    locationDetails: string;
  };
  onBack: () => void;
}

export default function PropertyDetails({ property, onBack }: PropertyDetailsProps) {
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+233 (0) 54 967 5834",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={onBack} className="flex items-center gap-1 hover:text-[#1a1464]">
              <ChevronLeft className="h-4 w-4" />
              Properties
            </button>
            <span>/</span>
            <span className="text-gray-900 font-medium">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image Section */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img
                  src={property.images[selectedImage]}
                  alt={property.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#1a1464] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="p-4">
                <div className="flex gap-3 overflow-x-auto">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-[#1a1464]' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-gray-800 flex items-center justify-center text-white text-xs font-medium">
                    +2 Others
                  </div>
                </div>
              </div>
            </div>

            {/* Property Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="h-4 w-4" />
                <span>{property.location}</span>
              </div>
              <div className="text-3xl font-bold text-[#1a1464] mb-6">
                {formatPrice(property.price)}
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Bed className="h-6 w-6 text-[#1a1464]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Bath className="h-6 w-6 text-[#1a1464]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Square className="h-6 w-6 text-[#1a1464]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{property.size.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">sq ft</div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  {[
                    { id: "description", label: "Description" },
                    { id: "features", label: "Features" },
                    { id: "location", label: "Location" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.id
                          ? "border-[#1a1464] text-[#1a1464]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="prose max-w-none">
                {activeTab === "description" && (
                  <div className="text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      {property.description}
                    </p>
                    <p className="mb-4">
                      This stunning luxury modern villa is located in the heart of Beverly Hills, 
                      built in 2022. It features 5 spacious bedrooms, 4 elegant bathrooms, and 
                      spans 4,500 sq ft of living space.
                    </p>
                    <p className="mb-4">
                      The open-concept floor plan features floor-to-ceiling windows that flood 
                      the home with natural light. The gourmet kitchen is equipped with 
                      top-of-the-line appliances, custom cabinetry, and a large center island.
                    </p>
                    <p className="mb-4">
                      The master suite includes a spa-like bathroom, walk-in closet, and private 
                      balcony. Additional features include smart home technology, a three-car 
                      garage, landscaped gardens, and a resort-style pool.
                    </p>
                  </div>
                )}

                {activeTab === "features" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#1a1464] rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "location" && (
                  <div className="text-gray-700 leading-relaxed">
                    <p className="mb-4">{property.locationDetails}</p>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Nearby Amenities:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Shopping centers within 5 minutes</li>
                        <li>• International schools nearby</li>
                        <li>• Hospitals and medical facilities</li>
                        <li>• Public transportation access</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            {/* Inquiry Form */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Interested in this property?
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <div className="h-5 w-5 bg-gray-300 rounded-full flex items-center justify-center">
                        <div className="h-2 w-2 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1464] focus:border-[#1a1464] bg-white text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1464] focus:border-[#1a1464] bg-white text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1464] focus:border-[#1a1464] bg-white text-gray-900"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="I'm interested in this property..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1464] focus:border-[#1a1464] bg-white text-gray-900 placeholder-gray-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a1464] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#0f0d4a] transition-colors duration-200"
                >
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Contact Agent */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Agent</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#1a1464]" />
                  <div className="text-sm text-gray-700">
                    <div>+233 (0) 209 393 991</div>
                    <div>+233 (0) 244 937 048</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#1a1464]" />
                  <span className="text-sm text-gray-700">nukooconstructions@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-[#1a1464]" />
                  <span className="text-sm text-gray-700">WhatsApp</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-white border border-[#1a1464] text-[#1a1464] py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Schedule Visit
              </button>
              <button className="w-full bg-[#1a1464] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#0f0d4a] transition-colors flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                Book Viewing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
