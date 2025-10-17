import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import HowWeWork from "../components/HowWeWork";
import WhyChooseUsServices from "../components/WhyChooseUsServices";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
}

const services: Service[] = [
  {
    id: "1",
    title: "Land Acquisition",
    description: "Expert guidance in identifying and acquiring prime land parcels for development or investment. We handle all aspects of the acquisition process.",
    features: [
      "Site evaluation and due diligence",
      "Zoning and land use consultation",
      "Negotiation and closing support",
      "Title research and verification"
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Land for sale with FOR SALE sign"
  },
  {
    id: "2",
    title: "Property Development",
    description: "Complete property development services from concept to completion. We transform ideas into exceptional residential and commercial spaces.",
    features: [
      "Project planning and design",
      "Construction management",
      "Quality control and inspection",
      "Timeline and budget management"
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Modern residential development"
  },
  {
    id: "3",
    title: "Construction Management",
    description: "Professional construction management services ensuring your project is completed on time, within budget, and to the highest quality standards.",
    features: [
      "Project coordination and oversight",
      "Contractor management",
      "Quality assurance",
      "Risk management and safety"
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Construction site management"
  },
  {
    id: "4",
    title: "Real Estate Investment",
    description: "Strategic real estate investment opportunities with expert analysis and guidance to maximize returns on your property investments.",
    features: [
      "Market analysis and research",
      "Investment property evaluation",
      "ROI calculations and projections",
      "Portfolio management"
    ],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Real estate investment properties"
  },
  {
    id: "5",
    title: "Property Management",
    description: "Comprehensive property management services to maintain and maximize the value of your real estate investments.",
    features: [
      "Tenant screening and management",
      "Maintenance and repairs",
      "Financial reporting",
      "Legal compliance"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Property management office"
  },
  {
    id: "6",
    title: "Consulting Services",
    description: "Expert real estate consulting services to help you make informed decisions about your property investments and development projects.",
    features: [
      "Market research and analysis",
      "Feasibility studies",
      "Strategic planning",
      "Risk assessment"
    ],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Real estate consulting meeting"
  }
];

export default function ServicesPage() {
  const handleLearnMore = (serviceId: string) => {
    console.log(`Learn more about service: ${serviceId}`);
    // Implement navigation or modal for service details
  };

  return (
    <>
      <PageHero 
        title="Our Services"
        subtitle="Comprehensive real estate solutions tailored to your unique needs"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
        backgroundImageAlt="Modern office building representing our services"
      />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                image={service.image}
                imageAlt={service.imageAlt}
                onLearnMore={() => handleLearnMore(service.id)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* How We Work Section */}
      <HowWeWork />
      
      {/* Why Choose Us Section */}
      <WhyChooseUsServices />
    </>
  );
}
