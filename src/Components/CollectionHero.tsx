import { ArrowDown } from "lucide-react";

export const CollectionHero = () => {
  return (
    <header className="relative bg-primary dark:bg-background-dark pt-32 pb-48 overflow-hidden border-b-8 border-accent/20 transition-colors duration-500">
      <div className="absolute inset-0 bg-linear-to-b from-black/20 to-transparent pointer-events-none"></div>

      {/* Abstract light blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-white/8 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
            Our 3D <br />
            <span className="italic font-light text-background-light/80">
              Collection
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-background-light/90 max-w-2xl font-body font-light leading-relaxed mb-10">
            Explore a curated selection of digital antiquities. Each piece is a
            high-fidelity restoration of historical fragments from the
            Mesopotamian marshlands.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#collection"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-xl hover:bg-background-light transition-all hover:-translate-y-1"
            >
              Start Exploring
              <ArrowDown className=" ml-2" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
