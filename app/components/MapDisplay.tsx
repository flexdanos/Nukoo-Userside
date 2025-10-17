import React from 'react';

export default function MapDisplay() {
  return (
    <div className="relative w-full h-[500px] bg-gray-50 overflow-hidden border border-gray-200 rounded-lg shadow-md">
      {/* Roads */}
      <div className="absolute top-0 left-[30%] w-4 h-full bg-gray-300"></div> {/* Main vertical road */}
      <div className="absolute top-[50%] left-[10%] w-[20%] h-4 bg-gray-300"></div> {/* Horizontal branch left */}
      <div className="absolute top-[10%] left-[30%] w-[40%] h-4 bg-gray-300 rotate-[-10deg] origin-top-left"></div> {/* Dan Avenue Oyarifa road segment */}
      <div className="absolute top-[0%] right-[15%] w-4 h-[30%] bg-gray-300 rotate-[20deg] origin-top-right"></div> {/* Curved road top-right */}
      <div className="absolute top-[60%] left-[30%] w-[40%] h-4 bg-gray-300"></div> {/* Another horizontal road */}

      {/* Buildings (simplified rectangles) */}
      <div className="absolute top-[5%] left-[20%] w-16 h-12 bg-gray-200 rounded-sm"></div>
      <div className="absolute top-[15%] left-[45%] w-10 h-8 bg-gray-200 rounded-sm"></div>
      <div className="absolute top-[25%] left-[15%] w-20 h-16 bg-gray-200 rounded-sm"></div>
      <div className="absolute top-[35%] left-[55%] w-14 h-10 bg-gray-200 rounded-sm"></div>
      <div className="absolute top-[40%] left-[25%] w-12 h-12 bg-gray-200 rounded-sm"></div>
      <div className="absolute top-[55%] left-[10%] w-18 h-14 bg-gray-200 rounded-sm"></div>
      <div className="absolute top-[65%] left-[40%] w-16 h-12 bg-gray-200 rounded-sm"></div>
      <div className="absolute top-[75%] left-[20%] w-10 h-8 bg-gray-200 rounded-sm"></div>
      <div className="absolute top-[80%] left-[50%] w-24 h-16 bg-gray-200 rounded-sm"></div>
      <div className="absolute top-[10%] right-[10%] w-16 h-12 bg-gray-200 rounded-sm"></div>
      <div className="absolute top-[30%] right-[20%] w-10 h-8 bg-gray-200 rounded-sm"></div>
      <div className="absolute top-[50%] right-[5%] w-20 h-16 bg-gray-200 rounded-sm"></div>
      <div className="absolute top-[70%] right-[15%] w-14 h-10 bg-gray-200 rounded-sm"></div>

      {/* Labels */}
      <div className="absolute top-[5%] left-[35%] text-sm font-semibold text-gray-700">
        Dan Avenue Oyarifa
      </div>

      {/* GhalyWorld Computer store marker */}
      <div className="absolute top-[55%] left-[60%] flex items-center space-x-1">
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-gray-400 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-white"></div>
          </div>
          <div className="absolute -top-8 -left-4 bg-white rounded-lg shadow-md p-2 flex items-center space-x-2 whitespace-nowrap">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-blue-600">GhalyWorld</span>{' '}
              <span className="text-blue-500 text-sm">Computer store</span>
            </div>
          </div>
        </div>
      </div>

      {/* Beck's Res label */}
      <div className="absolute top-[20%] right-[5%] text-sm font-semibold text-gray-700">
        Beck's Res
      </div>
    </div>
  );
}
