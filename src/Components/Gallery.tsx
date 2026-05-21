import Link from "next/link";
import { GalleryItem } from "../Types/main";
import Image from "next/image";

const items: GalleryItem[] = [
  {
    title: "Environment",
    image: "/Assets/hero/photo_2026-05-21_03-30-58.jpg",
    alt: "3D Environment Render",
  },
  {
    title: "Items",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUqVzQ7QzwqvBxjMYDJFOpgzTyoXlcSd_Eg2RewTdEcy3pvcA0qwNv_rJJgo3xeaCZ8kADObp1LUYM3C6Y7ThenAcq6qKz-yMkg6EL-YfhOubQ6u3D-LcSVEkrGLN-hkJemdRN6iAs0wpA1W_IE5ll58WDJBGRynUCyan9tR-WGn32zXPE88l_B4pBxWqiWpOXxAyd08pPqH7uE-odcbDOFWJdtFCcHTpfJTugr_rQCUqd7nsx4Idf8ZWvEfHzd7QcfMF_2Ny1tXjf",
    alt: "Ancient Pottery Item",
  },
  {
    title: "Buildings",
    image: "/Assets/hero/cover.jpeg",
    alt: "Old Ruins Building",
  },
];

export const Gallery = () => {
  return (
    <section id="viewing" className="py-16 px-6 bg-primary/10 dark:bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-4xl mb-12 text-primary dark:text-accent">
          3D viewing
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {items.map((item, index) => (
            <div key={index} className="w-full md:w-[45%] group cursor-pointer">
              <Link
                href={"3DModels"}
                className="bg-card-light dark:bg-card-dark rounded-3xl p-8 aspect-4/3 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden flex flex-col justify-end items-center"
              >
                <Image
                  width={300}
                  height={300}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                  src={item.image}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <span className="relative z-10 font-body text-white text-lg tracking-wide uppercase">
                  {item.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
