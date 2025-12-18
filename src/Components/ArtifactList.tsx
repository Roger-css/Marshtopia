import React from "react";
import { Artifact } from "../Types/main";
import Image from "next/image";
import { ArrowRight, Box } from "lucide-react";
import Link from "next/link";

const ARTIFACTS: Artifact[] = [
  {
    id: "sumerian-vessel",
    title: "Sumerian Vessel",
    description:
      "A digital reconstruction of a traditional clay vessel used for storing water and grains. This artifact highlights the craftsmanship typical of the early marsh settlements, featuring hand-etched geometry.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPOvFpTvOpqX7ho-s-78L7FZWn0BtTZcCplYsHBlbrxhshHJcs3pwJmJhSQ0QVT7mx3F5jA00316YB7L_h6fUVms-58ncM1-4s7cN7pl-AygL3tUolZeTLpdKkK0psyFGWKTu_nJxXxY1mA4mYG9yRvdWJJQGbcv14CE-f2O3FUAes6sHlRLJigvd6KYcHmDJJqGzStUZr9zXeffQMSJ2Wr5OSbiPFNSFzxjI4ATW3fCNlHiXq-xshtPdRVzZVRzDyMVCFaGMTgMJB",
    alt: "Ancient pottery artifact 3D model render",
    link: "#",
  },
  {
    id: "mudhif",
    title: "The Mudhif",
    description:
      "An architectural marvel made entirely of reeds and mud. This 3D model allows you to walk through the grand arches of a traditional guest house, reconstructed from 1950s surveys.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCB4ZKF3kzRRdZ4bSypNSfaLnwn4DuLaQDNcmtbryDO4STbdZP7a8z2DnibFvlvYAdt0W42WI_XPwhxJNBzXRhepoPcWinFZf5v9TfPA02jkLv4jRR9wG-Kh9xwTKofz3roKAHKH6hPjXfFk3HV6T9AH8onPlrMkNhEn1WqjCXZZ3zL2XYV5h2YbUIxyGPa8pcLGgVWPq8p7yzCAHsV6b6w0qHmal1l5jzj0XKhsNtzCtbDq50AdjAf3X0RpMOC1wUq2z3RuchoWBO",
    alt: "Reed House Mudhif Structure",
    link: "MudhifSplat",
  },
  {
    id: "mashhoof",
    title: "The Mashhoof",
    description:
      "Navigate the waterways with this detailed model of a Mashhoof, the traditional canoe of the Marsh Arabs. Its sleek, tar-coated design has remained unchanged for millennia.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCynQWH7Y_ABmEt02NwTqgrwoVCKswg6tnS4zVvaQQNCSDA9KOeXoXHV4f1FwleXWUoYa-TDGZlwA9-s9A3XLUeceIXW9dFQ3CoiN7kSCFL2PFt2cN3zuI10QJ_yLHcSERlILRvFdJb8mVzaerZdHfqYAbJ5Y30_yzqZClLK8Li-_j-Roreh3-AzOR8i5pgFkyKH3AmalHLPdd9kVfloR5wXNaKSFL7HyigWSDJvv7jRNilcV66bRPwhVpNED6XweNmXBt6m14R9zaI",
    alt: "Marsh canoe Mashhoof",
    link: "#",
  },
  {
    id: "tablet",
    title: "Cuneiform Tablet",
    description:
      "Examine the intricate markings of this ancient Cuneiform tablet. Our high-resolution scan captures every stylus stroke, recording trade and daily life in the cradle of civilization.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4LaiXmu4LxgiX6HR4he4ajCYZoFGbAfWPKTiElPLxljPH7qj59x79V_DPmQQfDaKRByRR8dcclxFxp-jgrIzTAguclR6Mx7sUhWt-NSenCQLSVX0hJwrreNK5q4V_TGFuButw_QDhG20t_mLlZtC_EAZHcjCBo2usie6vShg7IpS4u7OIhxqBu5Zx_cShHiDFr9-h7Yb_IqMYelPPSZ8Mwwt0HtwkFbeZh2juvNWKMs4Omh7GkkTiAQ-J-lyZOnoP8VOILELgGT_R",
    alt: "Tablet artifact",
    link: "#",
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
