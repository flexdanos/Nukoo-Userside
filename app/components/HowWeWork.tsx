import React, { useState, useRef } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface HowWeWorkProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We discuss your requirements, goals, and budget to understand your needs."
  },
  {
    number: "02", 
    title: "Property Research",
    description: "Our team identifies suitable properties that match your criteria and investment goals."
  },
  {
    number: "03",
    title: "Site Visits & Evaluation", 
    description: "We arrange property viewings and conduct thorough evaluations and due diligence."
  },
  {
    number: "04",
    title: "Negotiation & Closing",
    description: "We handle all negotiations and guide you through the closing process smoothly."
  }
];

export default function HowWeWork({ 
  title = "How We Work",
  subtitle = "Our streamlined process ensures a smooth and transparent experience from start to finish",
  steps = defaultSteps
}: HowWeWorkProps) {
  const [rotations, setRotations] = useState<number[]>(new Array(steps.length).fill(0));
  const [isDragging, setIsDragging] = useState<number | null>(null);
  const [dragStart, setDragStart] = useState<{ x: number; y: number; rotation: number } | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setIsDragging(index);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
      rotation: rotations[index]
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging === null || dragStart === null) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    
    // Calculate rotation based on mouse movement
    const rotation = dragStart.rotation + (deltaX + deltaY) * 0.5;
    
    setRotations(prev => {
      const newRotations = [...prev];
      newRotations[isDragging] = rotation;
      return newRotations;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(null);
    setDragStart(null);
  };

  // Add event listeners for mouse move and up
  React.useEffect(() => {
    if (isDragging !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  const resetRotation = (index: number) => {
    setRotations(prev => {
      const newRotations = [...prev];
      newRotations[index] = 0;
      return newRotations;
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Drag the cards to rotate them • Click to reset rotation
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              onMouseDown={(e) => handleMouseDown(e, index)}
              onClick={() => resetRotation(index)}
              className={`
                bg-[#28243D] rounded-lg p-6 text-white cursor-grab transition-transform duration-200
                hover:bg-[#1a1464] hover:scale-105 hover:shadow-xl
                ${isDragging === index ? 'cursor-grabbing' : ''}
                transform-gpu
              `}
              style={{
                transform: `rotate(${rotations[index]}deg)`,
                transformOrigin: 'center center'
              }}
            >
              {/* Step Number */}
              <div className="text-4xl font-bold text-orange-500 mb-4">
                {step.number}
              </div>
              
              {/* Step Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>

              {/* Rotation Indicator */}
              <div className="mt-4 flex justify-center">
                <div className="text-xs text-gray-400">
                  Drag to rotate • Click to reset
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
