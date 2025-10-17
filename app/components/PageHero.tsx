interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundImageAlt?: string;
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage, 
  backgroundImageAlt = "Background image" 
}: PageHeroProps) {
  return (
    <section className="relative h-[100px] md:h-[400px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
        role="img"
        aria-label={backgroundImageAlt}
      >
        <div className="absolute inset-0 bg-[#1a1464]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
