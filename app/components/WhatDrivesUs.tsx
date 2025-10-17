import { Target, Eye, Award } from "lucide-react";

export default function WhatDrivesUs() {
  const principles = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional real estate services that transform dreams into reality while maintaining the highest standards of integrity and professionalism.",
      bgColor: "bg-orange-600"
    },
    {
      icon: Eye,
      title: "Our Vision", 
      description: "To be the most trusted and innovative real estate company, setting new benchmarks in customer satisfaction and sustainable property development.",
      bgColor: "bg-blue-800"
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, transparency, excellence, and customer-centricity guide everything we do, ensuring long-lasting relationships built on trust.",
      bgColor: "bg-gray-800"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Drives Us
          </h2>
          <p className="text-lg text-gray-600">
            Our Core Principles
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className={`${principle.bgColor} rounded-lg p-8 text-white`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-blue-500">
                    <Icon className="h-8 w-8 text-blue-500" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-white leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
