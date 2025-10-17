interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface OurJourneyProps {
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  milestone?: Milestone;
}

export default function OurJourney({
  title = "Our Journey",
  subtitle = "Key Milestones",
  image = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  imageAlt = "Team members in branded attire",
  milestone = {
    year: "2008",
    title: "Company Founded",
    description: "Started with a vision to transform real estate"
  }
}: OurJourneyProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Section - Image */}
          <div className="relative rounded-lg overflow-hidden bg-gray-200">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          {/* Right Section - Milestone Box */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-blue-800 rounded-lg p-8 max-w-sm">
              <div className="text-5xl font-bold text-white mb-3">
                {milestone.year}
              </div>
              <div className="text-2xl font-bold text-white mb-3">
                {milestone.title}
              </div> 
              <div className="text-white text-base leading-relaxed">
                {milestone.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
