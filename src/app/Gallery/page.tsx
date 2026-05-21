"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Leaf,
  Bird,
  Info,
  Layers,
  Sparkles,
} from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "./gallery-data";
import { Footer } from "@/Components/Footer";

// Category configuration
const CATEGORIES = [
  { key: "All", en: "All Species", ar: "كل الأنواع", icon: Layers },
  { key: "Plants", en: "Plants", ar: "النباتات", icon: Leaf },
  { key: "Animals", en: "Animals", ar: "الحيوانات", icon: Sparkles },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dynamic counts for each category
  const categoryCounts = useMemo(() => {
    const counts = {
      All: GALLERY_ITEMS.length,
      Plants: 0,
      Animals: 0,
      "Marsh Birds": 0,
    };
    GALLERY_ITEMS.forEach((item) => {
      if (item.category === "Plants") counts.Plants++;
      if (item.category === "Animals") counts.Animals++;
    });
    return counts;
  }, []);

  // Filtered gallery items
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== "All" && item.category !== activeCategory) {
        return false;
      }
      // Search filter (handles English name, Arabic name, category name, and description)
      if (searchQuery.trim() === "") return true;
      const query = searchQuery.toLowerCase();
      return (
        item.nameAr.toLowerCase().includes(query) ||
        item.nameEn.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.categoryAr.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, searchQuery]);

  // Reset image index when selected item changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentImageIndex(0);
  }, [selectedItem]);

  // Carousel handlers
  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedItem.images.length - 1 : prev - 1,
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    setCurrentImageIndex((prev) =>
      prev === selectedItem.images.length - 1 ? 0 : prev + 1,
    );
  };

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-stone-800 dark:text-stone-200 transition-colors duration-300">
      <main className="grow pt-28 pb-16 px-6 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-accent/10 border border-primary/20 dark:border-accent/25 text-primary dark:text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            <span>Marshtopia Natural Archive</span>
          </div>
          <h1 className="font-display italic text-5xl md:text-6xl text-primary dark:text-accent mb-4 tracking-wide">
            Ecosystem Gallery
          </h1>
          <h2 className="font-display text-2xl md:text-3xl text-stone-600 dark:text-stone-400 mb-6 font-light">
            أرشيف الأهوار الطبيعي
          </h2>
          <p className="max-w-2xl mx-auto text-stone-600 dark:text-stone-400 text-sm md:text-base leading-relaxed">
            Discover the vibrant biodiversity of the Mesopotamian marshes.
            Explore our curated catalog of native flora, wild fauna, and the
            spectacular migratory birds that define this unique cradle of
            civilization.
          </p>
        </header>

        {/* Search & Filter Controls */}
        <section className="mb-12 space-y-6">
          {/* Live Search Bar */}
          <div className="max-w-xl mx-auto relative group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-primary dark:group-focus-within:text-accent transition-colors duration-200"
              size={18}
            />
            <input
              type="text"
              id="gallery-search"
              placeholder="Search animals, plants, birds, descriptions... (بحث...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-full border border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-900/60 backdrop-blur-md text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-primary/40 dark:focus:ring-accent/40 shadow-lg hover:shadow-xl transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 select-none">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              const count =
                categoryCounts[cat.key as keyof typeof categoryCounts];
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-xs md:text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-sm ${
                    isActive
                      ? "bg-primary dark:bg-accent border-primary dark:border-accent text-white dark:text-stone-900 shadow-md hover:shadow-lg font-semibold"
                      : "bg-white/80 dark:bg-stone-900/50 border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:bg-white dark:hover:bg-stone-900 hover:text-primary dark:hover:text-accent hover:border-primary/20 dark:hover:border-accent/20"
                  }`}
                >
                  <Icon size={14} className={isActive ? "animate-pulse" : ""} />
                  <span>{cat.en}</span>
                  <span className="text-xxs px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800/80 text-stone-500 dark:text-stone-400 border border-stone-200/50 dark:border-stone-700/50">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-8 border-b border-stone-200/60 dark:border-stone-800/60 pb-4 text-xs tracking-wider uppercase text-stone-500 dark:text-stone-400 font-medium">
          <span>Found {filteredItems.length} species</span>
          <span>Active Category: {activeCategory}</span>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white/40 dark:bg-stone-900/20 backdrop-blur-sm rounded-3xl border border-stone-200/50 dark:border-stone-800/50 max-w-lg mx-auto shadow-inner">
            <Info
              size={48}
              className="mx-auto text-stone-300 dark:text-stone-700 mb-4"
            />
            <h3 className="font-display text-xl font-medium mb-2">
              No Species Found
            </h3>
            <p className="text-stone-500 dark:text-stone-400 text-sm max-w-sm mx-auto px-4">
              We couldn&apos;t find any items matching &ldquo;{searchQuery}
              &rdquo; in this category. Try adjusting your keywords or category
              selection.
            </p>
          </div>
        )}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            // Determine visual card icon based on category
            const isPlant = item.category === "Plants";
            const isBird = item.category === "Marsh Birds";

            return (
              <article
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group flex flex-col bg-card-light dark:bg-card-dark border border-primary/10 dark:border-stone-800/60 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image Section */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100 dark:bg-stone-950">
                  <Image
                    src={item.images[0]}
                    alt={item.nameEn || item.nameAr}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Category Tag Overlay */}
                  <span className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-semibold bg-black/55 backdrop-blur-md text-white border border-white/20">
                    {isPlant ? (
                      <Leaf size={10} />
                    ) : isBird ? (
                      <Bird size={10} />
                    ) : (
                      <Sparkles size={10} />
                    )}
                    {item.category}
                  </span>

                  {/* Image count overlay if multiple */}
                  {item.images.length > 1 && (
                    <span className="absolute bottom-3 right-4 z-10 px-2 py-0.5 rounded bg-black/60 text-white text-[9px] font-bold tracking-wider">
                      +{item.images.length - 1} PHOTOS
                    </span>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-200 line-clamp-1">
                        {item.nameAr}
                      </h3>
                      {item.nameEn && (
                        <p className="text-stone-500 dark:text-accent/60 text-xs font-mono tracking-wide uppercase line-clamp-1">
                          {item.nameEn}
                        </p>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-stone-600 dark:text-stone-400 text-xs md:text-sm leading-relaxed line-clamp-3 text-right">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Footer Card trigger indicator */}
                  <div className="pt-4 mt-4 border-t border-stone-200/50 dark:border-stone-800/50 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-primary dark:text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore Species</span>
                    <ChevronRight
                      size={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {/* Details Modal Overlay */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-card-light dark:bg-card-dark rounded-3xl border border-primary/20 dark:border-stone-800 overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row transition-all duration-300"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 hover:bg-primary/95 text-white border border-white/20 hover:scale-105 hover:rotate-90 transition-all duration-300"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {/* Left Side: Photo Carousel */}
            <div className="md:w-1/2 aspect-4/3 md:aspect-auto md:h-auto relative bg-stone-950 flex items-center justify-center min-h-75">
              <Image
                src={selectedItem.images[currentImageIndex]}
                alt={selectedItem.nameEn || selectedItem.nameAr}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />

              {/* Carousel Arrows */}
              {selectedItem.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/85 text-white border border-white/10 hover:scale-105 transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/85 text-white border border-white/10 hover:scale-105 transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Image Paginator Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {selectedItem.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(i);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentImageIndex === i
                            ? "bg-white w-4 scale-100"
                            : "bg-white/40 hover:bg-white/70 scale-90"
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right Side: Detailed Descriptions */}
            <div className="md:w-1/2 p-8 md:max-h-[90vh] md:overflow-y-auto flex flex-col justify-between">
              <div className="space-y-6">
                {/* Category Header */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xxs tracking-wider uppercase font-bold bg-primary/10 dark:bg-accent/15 text-primary dark:text-accent border border-primary/20 dark:border-accent/20">
                  {selectedItem.category === "Plants" ? (
                    <Leaf size={10} />
                  ) : selectedItem.category === "Marsh Birds" ? (
                    <Bird size={10} />
                  ) : (
                    <Sparkles size={10} />
                  )}
                  <span>
                    {selectedItem.category} • {selectedItem.categoryAr}
                  </span>
                </div>

                {/* Main Titles */}
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-stone-50 leading-tight">
                    {selectedItem.nameAr}
                  </h2>
                  {selectedItem.nameEn && (
                    <p className="font-mono text-sm md:text-base font-semibold tracking-wider text-primary dark:text-accent uppercase">
                      {selectedItem.nameEn}
                    </p>
                  )}
                </div>

                {/* Subtitle details */}
                <div className="text-xs text-stone-400 border-t border-b border-stone-200/50 dark:border-stone-800/50 py-3 grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] font-bold tracking-wider text-stone-500 uppercase">
                      Native Name
                    </span>
                    <span className="font-medium text-stone-700 dark:text-stone-300">
                      {selectedItem.nameAr}
                    </span>
                  </div>
                  {selectedItem.nameEn && (
                    <div>
                      <span className="block text-[10px] font-bold tracking-wider text-stone-500 uppercase">
                        Scientific / Common
                      </span>
                      <span className="font-medium text-stone-700 dark:text-stone-300">
                        {selectedItem.nameEn}
                      </span>
                    </div>
                  )}
                </div>

                {/* Description Body */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold tracking-wider text-stone-400 uppercase">
                    Description / التفاصيل
                  </h4>
                  {selectedItem.description ? (
                    <p className="text-stone-700 dark:text-stone-300 text-sm md:text-base leading-relaxed text-right whitespace-pre-line font-medium">
                      {selectedItem.description}
                    </p>
                  ) : (
                    <p className="text-stone-500 italic text-sm">
                      No description available for this species.
                    </p>
                  )}
                </div>
              </div>

              {/* Modal footer details */}
              <div className="mt-8 pt-4 border-t border-stone-200/50 dark:border-stone-800/50 flex justify-between items-center text-[10px] font-bold tracking-wider text-stone-400 uppercase">
                <span>Species ID: {selectedItem.id}</span>
                <span className="inline-flex items-center gap-1 text-primary dark:text-accent">
                  <Info size={10} /> Marshtopia Archive
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer component */}
      <Footer />
    </div>
  );
}
