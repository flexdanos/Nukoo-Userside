import { Home, Building2, TrendingUp, MapPin } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: Home,
      value: "500+",
      label: "Properties Sold",
    },
    {
      icon: Building2,
      value: "250+",
      label: "Active Listings",
    },
    {
      icon: TrendingUp,
      value: "98+",
      label: "Client Satisfaction",
    },
    {
      icon: MapPin,
      value: "15+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className="mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#1a1464] shadow-lg">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" strokeWidth={2} />
                </div>

                {/* Value */}
                <h3 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-sm sm:text-base text-gray-600">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
