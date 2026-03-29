import React from "react";
import { Artifact } from "../Types/main";
import Image from "next/image";
import { ArrowRight, Box } from "lucide-react";
import Link from "next/link";

const ARTIFACTS: Artifact[] = [
  {
    id: "mudhif",
    title: "The Mudhif",
    description:
      "An architectural marvel made entirely of reeds and mud. This 3D model allows you to walk through the grand arches of a traditional guest house, reconstructed from 1950s surveys of the southern Iraqi marshes.",
    image: "/Assets/mud.jpeg",
    alt: "Reed House Mudhif Structure",
    link: "mudeef.splat",
  },
  {
    id: "mashhoof",
    title: "The Mashhoof",
    description:
      "Navigate the waterways with this detailed model of a Mashhoof, the traditional canoe of the Marsh Arabs. Its sleek, tar-coated design has remained unchanged for millennia, gliding silently through the wetlands.",
    image: "/Assets/mashhoof.png",
    alt: "Marsh canoe Mashhoof",
    link: "mashoof.splat",
  },
  {
    id: "basket",
    title: "The Reed Basket",
    description:
      "Woven by hand from the abundant reeds of the marshes, this basket represents one of the oldest craft traditions of the Marsh Arabs. Each pattern encoded family lineage and tribal identity passed down through generations.",
    image: "/Assets/basket.jpeg",
    alt: "Traditional Iraqi marsh woven reed basket artifact",
    link: "basket2.splat",
  },
  {
    id: "camelchair",
    title: "The Camel Chair",
    description:
      "A finely crafted camel saddle chair used by the desert-dwelling tribes on the edges of the marshlands. This ornate seat blends Bedouin woodworking and leatherwork, a symbol of status and long journeys across ancient trade routes.",
    image: "/Assets/camelchair.jpeg",
    alt: "Traditional Bedouin camel saddle chair artifact",
    link: "camelchair.splat",
  },
  {
    id: "foodtray",
    title: "The Ceremonial Food Tray",
    description:
      "Used in communal gatherings within the Mudhif, this large wooden serving tray features intricate carvings representing fertility and abundance. Sharing food from a single tray was a cornerstone of Marsh Arab hospitality.",
    image: "/Assets/foodtray.jpeg",
    alt: "Ancient Mesopotamian wooden food serving tray artifact",
    link: "foodtray.splat",
  },
  {
    id: "jar",
    title: "The Clay Storage Jar",
    description:
      "Handcrafted from the rich alluvial clay of the Mesopotamian floodplains, this storage jar was essential for preserving grain, oil, and water. Its form has changed little since the earliest Sumerian settlements 6,000 years ago.",
    image: "/Assets/jar.jpeg",
    alt: "Ancient Sumerian clay storage jar artifact",
    link: "jar.splat",
  },
  {
    id: "minjal",
    title: "The Minjal",
    description:
      "A traditional sickle-shaped harvesting tool used by the Marsh Arabs to cut reeds for construction and weaving. The Minjal's curved iron blade and wooden handle exemplify the functional ingenuity born from centuries of life in the marshes.",
    image: "/Assets/mnjal.jpeg",
    alt: "Traditional Iraqi marsh minjal harvesting tool artifact",
    link: "minjal.splat",
  },
  {
    id: "plate",
    title: "The Painted Plate",
    description:
      "This ceremonial clay plate, adorned with geometric patterns in natural pigments, was used during seasonal festivals along the Tigris and Euphrates. Each motif carries symbolic meaning connecting the marsh community to the cosmos and the river's annual flood cycle.",
    image: "/Assets/plate.jpeg",
    alt: "Ancient Mesopotamian painted clay ceremonial plate artifact",
    link: "plate.splat",
  },
  {
    id: "qusa",
    title: "The Qusa",
    description:
      "A round coracle boat woven from reeds and sealed with bitumen, the Quffa has navigated Mesopotamian rivers since antiquity. Referenced in ancient texts and depicted on Assyrian reliefs, it remains one of humanity's oldest watercraft designs still in use.",
    image: "/Assets/qusa.jpeg",
    alt: "Traditional Iraqi quffa coracle round reed boat",
    link: "qusa.splat",
  },
];

export const ArtifactList: React.FC = () => {
  return (
    <section
      id="collection"
      className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-32"
    >
      <div className="space-y-32">
        {ARTIFACTS.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <Link
              href={"/3DModels/" + item.link}
              key={item.id}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 md:gap-20 group`}
            >
              <div className="w-full md:w-1/2 relative">
                <div
                  className={`absolute -top-12 ${
                    isEven ? "md:right-0" : "md:left-0"
                  } left-1/2 -translate-x-1/2 md:translate-x-0 flex flex-col items-center text-primary dark:text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0`}
                >
                  <div className="flex">
                    <p className="text-primary dark:text-accent mr-2.5">
                      View in AR
                    </p>
                    <Box />
                  </div>
                </div>

                <div className="aspect-4/3 bg-card-light dark:bg-card-dark rounded-[2.5rem] shadow-2xl overflow-hidden relative cursor-pointer transform transition-all duration-700 group-hover:scale-[1.03] border-8 border-white dark:border-stone-800">
                  <Image
                    width={600}
                    height={450}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-90"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 flex items-center justify-center">
                    <div className="bg-white/80 dark:bg-black/80 px-8 py-4 rounded-full font-bold text-primary dark:text-white shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100 backdrop-blur-md border border-white/20">
                      View 3D Model
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div
                className={`w-full md:w-1/2 ${
                  isEven
                    ? "text-center md:text-left"
                    : "text-center md:text-left"
                } px-4`}
              >
                <div className="inline-block px-4 py-1 rounded-full bg-accent/10 dark:bg-accent/20 text-primary dark:text-accent font-bold text-xs tracking-widest uppercase mb-6">
                  Archive Item #{index + 1}
                </div>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-stone-900 dark:text-white mb-6 leading-tight">
                  {item.title}
                </h2>
                <p className="text-stone-600 dark:text-stone-400 text-lg md:text-xl leading-relaxed mb-8 font-light">
                  {item.description}
                </p>
                <button className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                  <span className="font-bold mr-2">Explore Restoration</span>
                  <ArrowRight />
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
