import {
  BookOpen,
  AlertTriangle,
  Globe,
  Droplets,
  Users,
  Leaf,
} from "lucide-react";
import TimelineSection from "./TimelineSection";

const HistoryPage = () => {
  const sections = [
    {
      number: 1,
      title: "The Sumerian Cradle",
      subtitle: "Dawn of Civilization · 4000 BC",
      icon: BookOpen,
      iconBg: "bg-primary",
      image: "/Assets/history/1977.jpeg",
      imageAlt:
        "Ma'dan families aboard a traditional boat on the marshes, 1977",
      content: (
        <>
          <p className="first-letter:text-6xl first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:mt-1 leading-relaxed">
            The Iraqi Marshes are believed to be the first home of Sumerian
            civilization, dating back to around 4000 BC. Historians believe the
            Sumerians settled these wetlands and drew from them the arts of
            architecture and boat-building that seeded urban civilization
            itself.
          </p>
          <p className="mt-4">
            The <strong>Mashhoof</strong>—the traditional canoe still used
            today—is a refined descendant of Sumerian vessels depicted on
            ancient cylinder seals. And the <strong>Mudhif</strong>, the iconic
            reed guesthouse, has remained architecturally unchanged for
            thousands of years: a living monument to the ingenuity of the
            world&apos;s first builders.
          </p>
        </>
      ),
      isReversed: true,
    },
    {
      number: 2,
      title: "The Garden of Eden",
      subtitle: "Where Rivers Meet",
      icon: Leaf,
      iconBg: "bg-accent",
      image: "/Assets/history/1980.jpeg",
      imageAlt: "A Mashhoof in front of a traditional Mudhif reed house, 1980",
      content: (
        <>
          <p>
            Many archaeologists and biblical scholars believe the confluence of
            the Tigris and Euphrates—where the marshes sit—is the closest
            geographic match to the historical <strong>Garden of Eden</strong>.
            The abundance of water, plants, birds, and wildlife described in
            ancient texts mirrors the marshes&apos; extraordinary biodiversity.
          </p>
          <p className="mt-4">
            During the Islamic golden ages, the marshes were known as
            <strong> Al-Bata&apos;ih</strong>—vast expanses of water and reeds
            stretching between Basra, Kufa, and Wasit. Their impenetrable
            terrain made them a refuge for dissident movements; the 9th-century
            Zanj Revolt used the marshes&apos; labyrinthine channels as a
            fortress no army could easily breach.
          </p>
        </>
      ),
      isReversed: false,
    },
    {
      number: 3,
      title: "The Ma'dan People",
      subtitle: "A Living Museum",
      icon: Users,
      iconBg: "bg-stone-700",
      image: "/Assets/history/1970.jpeg",
      imageAlt: "Ma'dan women in Mashhoofs on the marshes, 1970",
      content: (
        <>
          <p className="mb-4">
            The <strong>Ma'dan</strong>—the marsh Arabs—have maintained a
            continuous way of life spanning thousands of years, making them a
            living archive of human history. Their dialect still carries
            Sumerian and Akkadian vocabulary, preserved in the names of birds,
            fish, and fishing tools used every day.
          </p>
          <p className="text-sm italic opacity-80 border-l-2 border-primary pl-4">
            Water is not merely a resource for the Ma'dan—it is identity.
            Travel, marriage, and even funerals all pass through the Mashhoof.
            The Mudhif, built entirely from reeds without a single nail, stands
            as perhaps the world's oldest continuously practiced architectural
            tradition.
          </p>
        </>
      ),
      isReversed: true,
      hasBox: true,
    },
    {
      number: 4,
      title: "Ecology & Wildlife",
      subtitle: "The World's Rest Stop",
      icon: Droplets,
      iconBg: "bg-primary",
      image: "/Assets/history/1978.jpeg",
      imageAlt: "Fishermen poling through misty marsh waters, 1978",
      content: (
        <>
          <p>
            The marshes are the most critical stopover on the migratory flyway
            between Siberia and Africa—a global crossroads for hundreds of bird
            species including the rare Iraq Babbler and Little Grebe. They are
            also Iraq's primary source of freshwater fish, with species like
            Binni, Gattan, and Shabbot sustaining local communities for
            millennia.
          </p>
          <p className="mt-4">
            The <strong>water buffalo</strong> is the keystone animal of marsh
            life—grazing on reeds and papyrus, providing milk, meat, and labor.
            The marshes also produce Iraq's most prized dairy product:
            <strong> Geymar al-Arab</strong>, the rich water-buffalo clotted
            cream beloved across the country.
          </p>
        </>
      ),
      isReversed: false,
    },
    {
      number: 5,
      title: "Draining & Destruction",
      subtitle: "90% Lost · The 1990s",
      icon: AlertTriangle,
      iconBg: "bg-red-900",
      image: "/Assets/history/1978.jpeg",
      imageAlt:
        "Marsh fishermen in the mist, a world that nearly vanished, 1978",
      content: (
        <>
          <p className="mb-4">
            In the 1990s, the marshes faced a deliberate and systematic campaign
            of drainage that destroyed over <strong>90%</strong> of their area
            for political and security reasons. Vast wetlands turned to barren
            salt flats overnight. Tens of thousands of Ma'dan were displaced
            from the only home their families had known for generations.
          </p>
          <p className="text-sm italic opacity-80 border-l-2 border-red-700 pl-4">
            Rising salinity and desertification threatened to permanently erase
            a culture that had survived five thousand years—wiped out in less
            than a decade.
          </p>
          <p className="mt-4">
            After 2003, local and international efforts began re-flooding the
            plains. Life returned—slowly, stubbornly—as birds reappeared and the
            Ma'dan came home.
          </p>
        </>
      ),
      isReversed: true,
      hasBox: true,
    },
    {
      number: 6,
      title: "UNESCO World Heritage",
      subtitle: "Global Recognition · 2016",
      icon: Globe,
      iconBg: "bg-primary",
      image: "/Assets/history/1989.jpeg",
      imageAlt: "Ma'dan settlement with cattle and reed houses, 1989",
      content: (
        <>
          <p>
            In <strong>2016</strong>, the Iraqi Marshes achieved a historic
            milestone: recognition as a{" "}
            <strong>UNESCO World Heritage Site</strong>— one of the rare mixed
            (natural and cultural) designations, honoring both the extraordinary
            biodiversity and the living heritage of the Ma'dan who have
            preserved their way of life across millennia.
          </p>
          <p className="mt-4">
            Today the marshes span three provinces:{" "}
            <strong>Hawr al-Hawizeh</strong> (Maysan, extending to the Iranian
            border), the <strong>Central Marshes</strong> (Dhi Qar / Nasiriyah,
            the beating heart of the wetlands), and{" "}
            <strong>Hawr al-Hammar</strong> (between Dhi Qar and Basra). They
            remain under threat from climate change and upstream damming—but
            they endure.
          </p>
          <p className="mt-4 font-bold text-primary dark:text-accent">
            Marshtopia is part of this story—using digital preservation to
            ensure these landscapes and their people are never forgotten.
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
            From the cradle of Sumerian civilization to a UNESCO World Heritage
            Site—six thousand years of water, reeds, and resilience.
          </p>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: "6,000+", label: "Years of History" },
              { value: "90%", label: "Lost in the 90s" },
              { value: "2016", label: "UNESCO Listed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-primary dark:text-accent">
                  {stat.value}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-1 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
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
