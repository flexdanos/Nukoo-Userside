import { useState } from "react";
import { Search, Filter } from "lucide-react";

interface PropertyFiltersProps {
  onSearch: (query: string) => void;
  onTypeFilter: (type: string) => void;
  onSortFilter: (sort: string) => void;
  onMoreFilters: () => void;
  totalProperties: number;
}

export default function PropertyFilters({
  onSearch,
  onTypeFilter,
  onSortFilter,
  onMoreFilters,
  totalProperties
}: PropertyFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("All Types");
  const [sortBy, setSortBy] = useState("Newest First");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    setPropertyType(type);
    onTypeFilter(type);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    setSortBy(sort);
    onSortFilter(sort);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Search and Filters Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col gap-4">
          {/* Search Bar */}
          <div className="w-full relative">
            <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by property name or location..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a1464] focus:border-transparent bg-white text-gray-700 placeholder-gray-400 text-sm sm:text-base"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            {/* Property Type Filter */}
            <select
              value={propertyType}
              onChange={handleTypeChange}
              className="flex-1 sm:min-w-[120px] px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a1464] focus:border-transparent bg-white text-gray-700 text-sm sm:text-base"
              aria-label="Filter by property type"
            >
              <option value="All Types">All Types</option>
              <option value="Residential">Residential</option>
              <option value="Land">Land</option>
              <option value="Commercial">Commercial</option>
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="flex-1 sm:min-w-[140px] px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a1464] focus:border-transparent bg-white text-gray-700 text-sm sm:text-base"
              aria-label="Sort properties"
            >
              <option value="Newest First">Newest First</option>
              <option value="Price Low to High">Price Low to High</option>
              <option value="Price High to Low">Price High to Low</option>
              <option value="Most Popular">Most Popular</option>
            </select>

            {/* More Filters Button */}
            <button
              onClick={onMoreFilters}
              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-[#1a1464] focus:border-transparent bg-white text-gray-700 text-sm sm:text-base sm:min-w-[130px]"
            >
              <Filter className="h-4 w-4" />
              <span className="hidden xs:inline">More Filters</span>
              <span className="xs:hidden">Filters</span>
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-3">
          <p className="text-xs sm:text-sm text-gray-500">
            Showing {totalProperties} properties
          </p>
        </div>
      </div>
    </div>
  );
}
