import { Check } from "lucide-react";

interface Benefit {
  text: string;
}

interface WhyChooseUsServicesProps {
  title?: string;
  description?: string;
  benefits?: Benefit[];
  image?: string;
  imageAlt?: string;
  statsNumber?: string;
  statsLabel?: string;
  showStatsOverlay?: boolean;
}

const defaultBenefits: Benefit[] = [
  {
    text: "Expert market analysis and property valuation"
  },
  {
    text: "Comprehensive legal and documentation support"
  },
  {
    text: "End-to-end project management services"
  },
  {
    text: "Transparent pricing with no hidden costs"
  },
  {
    text: "Post-sale support and property management"
  }
];

export default function WhyChooseUsServices({
  title = "Why Choose Us",
  description = "With over 15 years of experience in land acquisition and property development, we bring unmatched expertise and dedication to every project.",
  benefits = defaultBenefits,
  image = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  imageAlt = "Modern house for sale",
  statsNumber = "500+",
  statsLabel = "Projects Completed",
  showStatsOverlay = true
}: WhyChooseUsServicesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#1a1464] rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[500px] object-cover"
              />

              {/* Stats Overlay - only show if showStatsOverlay is true */}
              {showStatsOverlay && (
                <div className="absolute bottom-6 left-1">
                  <div className="bg-[#28243D] bg-opacity-95 px-4 py-3 rounded-lg">
                    <div className="text-2xl font-bold text-orange-500">
                      {statsNumber}
                    </div>
                    <div className="text-sm text-white">
                      {statsLabel}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
