import { Home, Building2, TrendingUp, MapPin } from "lucide-react";
import { useGetCompanyConfigQuery } from "~/store/api";

interface StatsProps {
  showIcons?: boolean;
}

export default function Stats({ showIcons = true }: StatsProps) {
  const { data: companyConfig, isLoading, error } = useGetCompanyConfigQuery();


  if (error) {
    console.error('API Error:', error);
    console.error('Error details:', {
      status: 'status' in error ? error.status : 'unknown',
      data: 'data' in error ? error.data : 'unknown',
      message: 'message' in error ? error.message : 'unknown'
    });
  }

  // Fallback stats if API call fails or is loading
  const fallbackStats = [
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

  // Use API data if available, otherwise fallback
  const stats = companyConfig ? [
    {
      icon: Home,
      value: `${companyConfig.stats.propertiesSold}+`,
      label: "Properties Sold",
    },
    {
      icon: Building2,
      value: `${companyConfig.stats.activeListings}+`,
      label: "Active Listings",
    },
    {
      icon: TrendingUp,
      value: `${companyConfig.stats.clientSatisfaction}%`,
      label: "Client Satisfaction",
    },
    {
      icon: MapPin,
      value: `${companyConfig.stats.yearsOfExperience}+`,
      label: "Years Experience",
    },
  ] : fallbackStats;

  // Show loading state
  if (isLoading) {
    return (
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 md:gap-12">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {showIcons && (
                  <div className="mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gray-200 animate-pulse">
                  </div>
                )}
                <div className="mb-2 h-8 w-16 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Show error state (optional - you can remove this if you want to always show fallback)
  if (error) {
    console.warn('Failed to load company config, using fallback data:', error);
  }

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
                {/* Icon Circle - only show if showIcons is true */}
                {showIcons && (
                  <div className="mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-[#1a1464] shadow-lg">
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" strokeWidth={2} />
                  </div>
                )}

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
