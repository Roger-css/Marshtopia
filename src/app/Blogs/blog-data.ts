export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
  author: string;
}

export const BLOGS: BlogPost[] = [
  {
    id: "marsh-environment",
    title: "The Marsh Environment: Ecosystem & Challenges",
    excerpt:
      "A deep dive into the unique aquatic ecosystem of the Marshes, its diverse birdlife, vital plant life, and the critical challenges of water scarcity.",
    content: `
      <div class="mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-stone-800 dark:text-stone-100">A Unique Aquatic World</h2>
        <p class="text-lg leading-relaxed text-stone-700 dark:text-stone-300">The Marsh environment is a unique natural wetland located in southern Iraq, distinguished by its blend of land and water. It consists of vast expanses of shallow waters, reeds, papyrus, and aquatic plants, creating an ecosystem unlike any other.</p>
      </div>

      <div class="flex flex-col md:flex-row gap-8 items-start my-16">
        <div class="md:w-1/2">
          <h3 class="text-3xl font-bold mb-4 text-stone-800 dark:text-stone-100">The Reed (Qasab)</h3>
          <p class="text-stone-700 dark:text-stone-300 mb-4">Reeds are tall, strong plants reaching over 3 meters with thick stems, growing in shallow waters. They are crucial for shelter and construction.</p>
          <ul class="list-disc list-inside space-y-2 text-stone-700 dark:text-stone-300 mb-4">
            <li><strong>Khuss (Short Reed):</strong> Known for its water resistance and durability, lasting for decades.</li>
            <li><strong>Hosh (Long Reed):</strong> Another variety used in traditional structures.</li>
          </ul>
          <p class="text-stone-700 dark:text-stone-300">Sadly, local reeds have become scarce due to water shortages. Although reed houses remain, the material is often sourced from other cities like Hilla and Samawa, where it is less utilized than in the Marshes.</p>
        </div>
        <div class="md:w-1/2">
          <img src="/Assets/blog%20biodiversity/IMG_20251218_231230_889.jpg.jpeg" alt="Thick Reeds of the Marshes" class="w-full h-auto object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
        </div>
      </div>

      <div class="my-12 p-8 bg-stone-50 dark:bg-stone-900 rounded-2xl">
        <h3 class="text-3xl font-bold mb-4 text-stone-800 dark:text-stone-100">Birdlife of the Marshes</h3>
        <p class="text-stone-700 dark:text-stone-300 mb-4">The Marshes are a haven for migratory birds, especially in winter. The region hosts unique species:</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h4 class="font-bold text-xl text-primary dark:text-accent mb-2">Al-Shakrraka (Kingfisher)</h4>
            <p class="text-stone-600 dark:text-stone-400 text-sm">A green-hued bird that feeds on fish and nests in mud holes to protect its eggs.</p>
          </div>
          <div>
             <h4 class="font-bold text-xl text-primary dark:text-accent mb-2">Water Chicken (Gallinule)</h4>
             <p class="text-stone-600 dark:text-stone-400 text-sm">Dark grey with a distinct red and yellow beak and long legs. It builds floating nests among the reeds.</p>
          </div>
          <div>
             <h4 class="font-bold text-xl text-primary dark:text-accent mb-2">The Barbresh (Wild Duck)</h4>
             <p class="text-stone-600 dark:text-stone-400 text-sm">Brown-spotted with an orange beak, seen swimming with its young near the banks.</p>
          </div>
          <div>
             <h4 class="font-bold text-xl text-primary dark:text-accent mb-2">The Khudairi</h4>
             <p class="text-stone-600 dark:text-stone-400 text-sm">Similar to a duck but smaller, famous for its unique green-shelled eggs.</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row-reverse gap-8 items-center my-16">
        <div class="md:w-1/2">
          <h3 class="text-3xl font-bold mb-4 text-stone-800 dark:text-stone-100">The Crisis of Water & Salinity</h3>
          <p class="text-stone-700 dark:text-stone-300 mb-4">Life here relies entirely on water. Dropping levels and rising salinity are existential threats. High salinity (now reaching 2500-3000 in some areas) has made the water undrinkable and toxic to both reeds and fish.</p>
          <p class="text-stone-700 dark:text-stone-300">This has led to the near extinction of the <strong>Bunni fish</strong>, a prized local delicacy. Once abundant, it is now a luxury imported at high prices (25,000-30,000 IQD), served only on special occasions as a symbol of pride.</p>
        </div>
        <div class="md:w-1/2">
          <img src="/Assets/blog%20biodiversity/IMG_20251218_231224_095.jpg.jpeg" alt="Marsh Water Landscape" class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
        </div>
      </div>
    `,
    imageUrl: "/Assets/blog%20biodiversity/IMG_20251218_231223_860.jpg.jpeg",
    date: "February 8, 2026",
    author: "Hassan Al-Ahwari",
  },
  {
    id: "tangible-heritage",
    title: "Tangible Heritage: Architecture & Traditions",
    excerpt:
      "Discover the architectural marvels and daily tools of the Marsh Arabs, from the majestic Mudhif to the essential Mashhoof canoe.",
    content: `
      <div class="mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-stone-800 dark:text-stone-100">The Mudhif</h2>
        <p class="text-lg leading-relaxed text-stone-700 dark:text-stone-300">The Mudhif is the traditional guesthouse of the Marsh Arabs and inhabitants of southern Iraq. It stands as a symbol of hospitality and social cooperation, where guests are welcomed, agreements are made, and disputes are resolved. In Ramadan, it hosts communal Iftar and Suhoor gatherings, while in Muharram, it is dedicated to Hussein mourning councils. Remarkably, it is built almost entirely from reeds and papyrus, without cement or iron.</p>
      </div>

      <div class="flex flex-col md:flex-row gap-8 items-start my-16">
        <div class="md:w-1/2">
          <h3 class="text-3xl font-bold mb-4 text-stone-800 dark:text-stone-100">Construction of the Mudhif</h3>
          <p class="text-stone-700 dark:text-stone-300 mb-4"><strong>Materials:</strong> Reeds are used for columns and arches, while papyrus covers the roof and walls. Natural ropes made from reeds or fiber bind the structure together.</p>
          <p class="text-stone-700 dark:text-stone-300"><strong>The Process:</strong> Built on high ground to avoid flooding, strong reed bundles are planted in the ground and bent to form meeting arches—the Mudhif's signature shape. This arched design is aerodynamic, with natural ventilation that keeps it cool in summer and relatively warm in winter. It is a communal effort, often built by the village in just a few days.</p>
        </div>
        <div class="md:w-1/2">
          <img src="/Assets/blog%20heratige/Picture2.jpg" alt="Traditional Mudhif Structure" class="w-full h-auto object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
        </div>
      </div>

      <div class="my-12 p-8 bg-stone-50 dark:bg-stone-900 rounded-2xl">
        <h3 class="text-3xl font-bold mb-4 text-stone-800 dark:text-stone-100">The Sarifa</h3>
        <p class="text-stone-700 dark:text-stone-300">The Sarifa is the summer version of the marsh house. Also built from reeds and papyrus, it features open sides or minimal walls to maximize airflow during the scorching summer months. Simpler and smaller than the Mudhif, it serves as the daily family dwelling for rest during day and night.</p>
      </div>

      <div class="flex flex-col md:flex-row-reverse gap-8 items-center my-16">
        <div class="md:w-1/2">
          <h3 class="text-3xl font-bold mb-4 text-stone-800 dark:text-stone-100">The Mashhoof</h3>
          <p class="text-stone-700 dark:text-stone-300">The Mashhoof is a traditional wooden canoe used for daily transport, fishing, and trade. Long, slender, and lightweight, it is perfectly designed to navigate the shallow waters and dense reed beds of the marshes. Propelled by a long pole called a "Mirdi", the Mashhoof remains an enduring symbol of the unique water-based lifestyle of the marshes.</p>
        </div>
        <div class="md:w-1/2">
          <img src="/Assets/blog%20heratige/Picture1.jpg" alt="Mashhoof Canoe in the Marshes" class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
        </div>
      </div>

      <div class="my-12 border-l-4 border-primary pl-6">
        <h3 class="text-3xl font-bold mb-4 text-stone-800 dark:text-stone-100">The Clay Tannour</h3>
        <p class="text-stone-700 dark:text-stone-300 mb-4">The clay tannour is a traditional cylindrical oven used to bake the famous Iraqi bread ("Khobz"). Made by women from local red clay mixed with straw and water, it is a staple of rural life.</p>
        <p class="text-stone-700 dark:text-stone-300"><strong>Craftsmanship:</strong> The clay is mixed into a paste, formed into a cylinder on a base, and dried in the shade to prevent cracking. Once hardened by fire, it bakes bread that is known for its distinct taste. The Tannour represents the simplicity and self-sufficiency of the marsh heritage.</p>
      </div>
    `,
    imageUrl: "/Assets/blog%20heratige/Picture1.jpg",
    date: "February 7, 2026",
    author: "Karim Al-Sultan",
  },
  {
    id: "history-of-the-marshes",
    title: "History of the Marshes: A 5,000-Year Legacy",
    excerpt:
      "Exploring the rich history of the Iraqi Marshes, from the cradle of Sumerian civilization to their revival and recognition as a UNESCO World Heritage site.",
    content: `
      <div class="mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-stone-800 dark:text-stone-100">Ancient Roots</h2>
        <p class="text-lg leading-relaxed text-stone-700 dark:text-stone-300">The Iraqi Marshes are considered one of the oldest natural environments inhabited by humans, with a history spanning more than five thousand years. Originating in southern Iraq between the Tigris and Euphrates rivers, this unique ecosystem has been a cradle of civilization.</p>
      </div>

      <div class="flex flex-col md:flex-row gap-8 items-center my-16">
        <div class="md:w-1/2">
          <h3 class="text-3xl font-bold mb-4 text-stone-800 dark:text-stone-100">1. Ancient Times</h3>
          <p class="text-stone-700 dark:text-stone-300">Humans have called the Marshes home since the Sumerian era (c. 3000 BC), nurturing the rise of the world's first civilizations. Cities like Ur thrived near these waters, where the population developed a lifestyle based on fishing, agriculture, and reed construction—practices that have remarkably endured to this day.</p>
        </div>
        <div class="md:w-1/2">
          <img src="/Assets/blog%20history/Picture2.jpg" alt="Ancient lifestyle in the Marshes" class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
        </div>
      </div>

      <div class="my-12 p-8 bg-stone-50 dark:bg-stone-900 rounded-2xl">
        <h3 class="text-3xl font-bold mb-4 text-stone-800 dark:text-stone-100">2. The Islamic Era</h3>
        <p class="text-stone-700 dark:text-stone-300">Throughout the Islamic periods, the Marshes played a pivotal role as natural sanctuaries. The inhabitants utilized the rich biodiversity for agriculture and water buffalo breeding. They also mastered the craft of the <em>Mashhoof</em> (canoe), fostering a distinct vibrant culture with unique customs and traditions.</p>
      </div>

      <div class="flex flex-col md:flex-row-reverse gap-8 items-center my-16">
        <div class="md:w-1/2">
          <h3 class="text-3xl font-bold mb-4 text-stone-800 dark:text-stone-100">3. The 20th Century</h3>
          <p class="text-stone-700 dark:text-stone-300">The 1990s witnessed a tragic turning point. The Marshes were subjected to systematic and extensive draining, which decimated vast areas of wetlands. This ecological catastrophe deepened with the forced displacement of the indigenous population, causing severe and lasting environmental and cultural damage.</p>
        </div>
        <div class="md:w-1/2">
          <img src="/Assets/blog%20history/Picture3.jpg" alt="Drying of the Marshes" class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-8 items-center my-16">
        <div class="md:w-1/2">
          <h3 class="text-3xl font-bold mb-4 text-stone-800 dark:text-stone-100">4. After 2003: Revival</h3>
          <p class="text-stone-700 dark:text-stone-300">A new chapter began after 2003 with the launch of ambitious restoration projects. Water was reintroduced to the dry seabeds, breathing life back into the ecosystem. This restoration enabled a portion of the Marsh Arabs to return to their ancestral lands and resume their traditional way of life.</p>
        </div>
        <div class="md:w-1/2">
           <img src="/Assets/blog%20history/Picture4.png" alt="Restoration of the Marshes" class="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" />
        </div>
      </div>

      <div class="my-12 border-l-4 border-primary pl-6">
        <h3 class="text-3xl font-bold mb-4 text-stone-800 dark:text-stone-100">5. Global Recognition</h3>
        <p class="text-xl font-medium text-stone-700 dark:text-stone-300">In 2016, the Iraqi Marshes received their long-awaited due. They were inscribed on the UNESCO World Heritage List, a global acknowledgement of their outstanding value—historically, culturally, and environmentally.</p>
      </div>
    `,
    imageUrl: "/Assets/blog%20history/Picture1.jpg",
    date: "February 6, 2026",
    author: "Zainab Al-Marsoumi",
  },
];
