import { BookOpen, AlertTriangle, Globe } from "lucide-react";
import TimelineSection from "./TimelineSection";

const HistoryPage = () => {
  const sections = [
    {
      number: 1,
      title: "Early History",
      subtitle: "The Dawn of Sumer",
      icon: BookOpen,
      iconBg: "bg-primary",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB2_Uhy-yd11v8CkstTWTYP3792xHWKGYtKnvTbIEzQxARKqOArcHJ9XmsRdE6h4toUZGQhyomc9v2ihxiJe1cA78jeqr_fNywXr2fOOQJmAvi0I_LHT5hKmOXJg9DHnuMNYtZlsM6KZicfmaNw1omawO2_WWk9kC6WO_OxqEbNoyH8d66hCchcGSmi3PC8LuCgW70LQBza1BtioRY7DjytcwtcxyTYD3dbWqG8tpXm3_e_dXZMzrFF25WihmhDkkwQqOCRuFhAk3a_",
      imageAlt: "Ancient photo of marsh boats",
      content: (
        <>
          <p className="first-letter:text-6xl first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:mt-1 leading-relaxed">
            The Iraqi marshes, often called the &quot;Mesopotamian
            Marshes,&quot; are among the oldest wetland ecosystems in the world.
            Historical records suggest that these wetlands have existed for
            thousands of years, providing a natural habitat for wildlife and
            humanity alike.
          </p>
          <p className="mt-4">
            Serving as the garden for the first cities, these wetlands supported
            the fishing, agriculture, and reed-building traditions that birthed
            urban civilization.
          </p>
        </>
      ),
      isReversed: true,
    },
    {
      number: 2,
      title: "Cultural Heritage",
      subtitle: "Home of the Ma'dan",
      icon: BookOpen,
      iconBg: "bg-accent",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDQFmbnf0Lp9KAkHYQM9lUWcBj9WgseGzKD1Qm6N0qkDa7st8a2IM6-t7JUZXEtriI32o6P_wweYau4JOv8Wq1cP72dO5l3YCimiLfiBOojoLRxFQh5BczYTlV4LZrwqPS7Tgd1srdihdiFgP8QuOsS7MB-n2RuW-n2nbZ82nRQ16Bl3Yyf66TN5DhF0xpZa54n460TOGPotPErWdgsGDqgYXvJDwP0tqRAAlyLk1YAoLlfK36Et3X34ZeK8ZZGa6YYEnRZFa7RLQ2j",
      imageAlt: "Traditional marsh environment",
      content: (
        <>
          <p>
            The Ma&apos;dan people have lived in harmony with the water for
            millennia. Their culture is defined by the Mudhif—stately reed guest
            houses built without a single nail—and the Mashhoof canoes that
            navigate the narrow reed channels.
          </p>
          <p className="mt-4">
            This unique symbiosis between man and nature inspired centuries of
            poetry, folklore, and craft that remains a pillar of Iraqi identity
            today.
          </p>
        </>
      ),
      isReversed: false,
    },
    {
      number: 3,
      title: "Environmental Peril",
      subtitle: "A Vanishing Landscape",
      icon: AlertTriangle,
      iconBg: "bg-stone-800",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD-laZyzxpKPiHzK-L31iTVsoVL3Mrb9fTfPf4MbHICY41JEIF1TmjW7rSH3an363Ho9gjfhfvFTI6nJiUwXUOE0NAWLP0tIuvjpa6OfocatzPqbFcdDQVB1tx7-f-FdLRBHbM2hgmrU5dXjlCax5Wazt8XbiFvxFEqI7zxpdH0Cb214elK9FMCPiW5bnhC6iCf-0jFuuJ43k6eWoh-wVYaN0kDHA86k0JA4Q2O9tHRIN9lsHBmzlJ4SxQNe5ER2A_M0XM_yok-MI6k",
      imageAlt: "Drought conditions",
      content: (
        <>
          <p className="mb-4">
            In recent decades, the marshes faced existential threats.
            Large-scale drainage projects, climate shifts, and damming reduced
            the vital flow of the Tigris and Euphrates.
          </p>
          <p className="text-sm italic opacity-80 border-l-2 border-primary pl-4">
            Rising salinity and desertification threatened to erase a culture
            that had survived for five thousand years.
          </p>
        </>
      ),
      isReversed: true,
      hasBox: true,
    },
    {
      number: 4,
      title: "Modern Restoration",
      subtitle: "Global Heritage",
      icon: Globe,
      iconBg: "bg-primary",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAzIG-HwGvhRI16yWMLpvFz1icbla3JHLMWNFUarmxATfnKX1vxeesW5sUfHpVtLzRTgd-UvIr7paZy-5ZHtluMdXm7Djx_vfzZ9DnlgXh4_6MtK_aDHrAE2ekM5f0B6qFj3SSWW3_vV388o1zeu1f8k47JGZQMgtLkAxF1Pj2v34s_09V21LluIoLeFoXENg4JBXbtVRR3GL7oZBdhR7Ye2S27g6bOgv9Bmsf_al4CxybxOkCV6I4qpTZK_TNePSUQ-1ZkCOkF1KFe",
      imageAlt: "Modern lush marshland",
      content: (
        <>
          <p>
            In 2016, the Iraqi Marshes were recognized as a UNESCO World
            Heritage site. Restoration efforts continue to re-flood the plains,
            bringing back the bird migrations and the ancestral way of life.
          </p>
          <p className="mt-4 font-bold text-primary dark:text-accent">
            Marshtopia is part of this journey—using digital 3D restoration to
            preserve these stories forever.
          </p>
        </>
      ),
      isReversed: false,
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark transition-colors duration-500">
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary/5 dark:bg-black/20">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten" />
          <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-accent rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-lighten" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="font-display text-5xl md:text-8xl font-bold text-primary dark:text-accent mb-6 leading-tight">
            History{" "}
            <span className="text-stone-800 dark:text-white font-light italic">
              Of The
            </span>{" "}
            Marshes
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto font-body font-light leading-relaxed">
            Discover the rich history and culture of the Mesopotamian wetlands,
            the cradle of civilization.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-32 relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 dark:bg-stone-700 -translate-x-1/2 z-0 h-full" />
        <div className="space-y-32 py-20">
          {sections.map((section) => (
            <TimelineSection key={section.number} {...section} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HistoryPage;
