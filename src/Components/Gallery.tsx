import Link from "next/link";
import { GalleryItem } from "../Types/main";
import Image from "next/image";

const items: GalleryItem[] = [
  {
    title: "Environment",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxt_RA5A2kpYRSZo5te6SVX4Rsv3OUUxQERsjlJMAVS1Y2vjvD1qsjNqdERqbmT2eL7V5D5uOl8JClSbX1Wl-ffJENhYswrdpKHaER8H0DdglitW5ZdXzbINuDHnZOO00j7_jiI4LebsFMFjXTVtqkGo1dsB3lJiql4fZ8GXEV2B6zOTMVEGrRG0V6vgfg3S86SH6ucw047F5gZI3uUGR9ubNFqHTrws2pmjIzTtnQ5-UdWMzEnjDZplYPH3P2d8Kndxk4QoRM84Xa",
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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAq63frKVYtNTwM_5Hj4OEnLPoB9RZtnJODOK31_Ou91MOsUAvlo3oMw9IqG2R_RWQvSymvvZQemm1JSMjg4tP8ANtdyhFbNdtas5JFbo_Wf409q2_MwNASKq8ZPWkhYrr5Sp42TNjeJ66UXptkTtiEe89MbHVAC45AunmQ8lotPM4MTdiZO6TngnSx8GB6MlPAiDp46NnNIxo8DdwxaD76uyhf4OWUpA02CWpnYPZbZVCFk_8m_qFYW2hAI0JipNLIPRoqIYVTjTA7",
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
