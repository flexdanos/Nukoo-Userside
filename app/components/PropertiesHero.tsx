export default function PropertiesHero() {
  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop')`,
        }}
        role="img"
        aria-label="Classic house rooftops and architectural details"
      >
        <div className="absolute inset-0 bg-[#1a1464]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Discover Premium Properties
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
            Browse our extensive collection of residential, commercial, and land properties
          </p>
        </div>
      </div>
    </section>
  );
}
