import { MapPin } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
}

interface MeetOurLeadershipProps {
  title?: string;
  description?: string;
  teamMembers?: TeamMember[];
}

export default function MeetOurLeadership({
  title = "Meet Our Leadership",
  description = "Our experienced team of professionals is dedicated to helping you achieve your real estate goals",
  teamMembers = [
    {
      name: "Danial Yamoah",
      title: "Transport Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      imageAlt: "Danial Yamoah - Transport Officer"
    },
    {
      name: "Henry Nunoo",
      title: "Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      imageAlt: "Henry Nunoo - Director"
    },
    {
      name: "Winifred Nunoo",
      title: "Manager/ Customer Service",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop",
      imageAlt: "Winifred Nunoo - Manager/ Customer Service"
    }
  ]
}: MeetOurLeadershipProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              {/* Photo Section */}
              <div className="bg-gray-200 p-8">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-300">
                  <img
                    src={member.image}
                    alt={member.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {member.title}
                    </p>
                  </div>
                  
                  {/* Location Icons */}
                  <div className="flex space-x-1">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <MapPin className="h-4 w-4 text-gray-400" />
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
