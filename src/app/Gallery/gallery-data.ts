export interface GalleryItem {
  id: string;
  category: string;
  categoryAr: string;
  nameAr: string;
  nameEn: string;
  images: string[];
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "tamarix",
    category: "Plants",
    categoryAr: "النباتات",
    nameAr: "الأثل",
    nameEn: "Tamarix",
    images: [
      "/Assets/gallary/%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA/%D8%A7%D9%84%D8%A3%D8%AB%D9%84%20(Tamarix)/%D8%A7%D9%84%D8%A3%D8%AB%D9%84%20(Tamarix).webp",
    ],
    description:
      "شجرة معمرة أو شجيرة طويلة يمكن أن يصل ارتفاعها إلى حوالي 13 متراً، وتتميز بلحاء بني محمر إلى رمادي وأوراق صغيرة جداً.",
  },
  {
    id: "papyrus",
    category: "Plants",
    categoryAr: "النباتات",
    nameAr: "البردي",
    nameEn: "Papyrus",
    images: [
      "/Assets/gallary/%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA/%D8%A7%D9%84%D8%A8%D8%B1%D8%AF%D9%8A%20(Papyrus)%20%D8%A7%D9%84%D8%A7%D8%B3%D9%85%20%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A%20Typha%20domingensis/%D8%A7%D9%84%D8%A8%D8%B1%D8%AF%D9%8A%20(Papyrus)%20%D8%A7%D9%84%D8%A7%D8%B3%D9%85%20%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A%20Typha%20domingensis.jpg",
    ],
    description:
      "يُعرف هذا النوع من النباتات المائية باسم القصب أو البردي، وهو منتشر بكثرة في مناطق الأهوار العراقية",
  },
  {
    id: "scirpus",
    category: "Plants",
    categoryAr: "النباتات",
    nameAr: "الجولان",
    nameEn: "scirpus",
    images: [
      "/Assets/gallary/%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA/%D8%A7%D9%84%D8%AC%D9%88%D9%84%D8%A7%D9%86%20(scirpus)/%D8%A7%D9%84%D8%AC%D9%88%D9%84%D8%A7%D9%86%20(scirpus).jpg",
    ],
    description:
      "تتميز هذه النباتات بسيقان خضراء مستديرة وطويلة، وتنتهي عناقيد زهرية صغيرة بنية اللون.",
  },
  {
    id: "coontail",
    category: "Plants",
    categoryAr: "النباتات",
    nameAr: "الشمبلان",
    nameEn: "Coontail",
    images: [
      "/Assets/gallary/%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA/%D8%A7%D9%84%D8%B4%D9%85%D8%A8%D9%84%D8%A7%D9%86%20(Coontail)/%D8%A7%D9%84%D8%B4%D9%85%D8%A8%D9%84%D8%A7%D9%86%20(Coontail).jpg",
    ],
    description:
      "هو نبات مائي ينمو بالكامل تحت الماء، وغالباً ما يكون طافياً بحرية دون جذور حقيقية",
  },
  {
    id: "reeds",
    category: "Plants",
    categoryAr: "النباتات",
    nameAr: "القصب",
    nameEn: "Reeds",
    images: [
      "/Assets/gallary/%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA/%D8%A7%D9%84%D9%82%D8%B5%D8%A8%20(Reeds)/%D8%A7%D9%84%D9%82%D8%B5%D8%A8%20(Reeds).jpg",
    ],
    description:
      "ينمو هذا النبات في المناطق المدية حيث يغمر بالماء المالح أو المالح جزئياً، ويبلغ طوله عادة من 1 إلى 1.5 متر",
  },
  {
    id: "water-hyacinth",
    category: "Plants",
    categoryAr: "النباتات",
    nameAr: "زهرة النيل",
    nameEn: "Water Hyacinth",
    images: [
      "/Assets/gallary/%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA/%D8%B2%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D9%8A%D9%84%20(Water%20Hyacinth)/%D8%B2%D9%87%D8%B1%D8%A9%20%D8%A7%D9%84%D9%86%D9%8A%D9%84%20(Water%20Hyacinth).png",
    ],
    description:
      "وهو نبات مائي طافي مشهور بزهوره الأرجوانية الجذابة وأوراقه الخضراء السميكة",
  },
  {
    id: "duckweed",
    category: "Plants",
    categoryAr: "النباتات",
    nameAr: "عدس الماء",
    nameEn: "Duckweed",
    images: [
      "/Assets/gallary/%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA/%D8%B9%D8%AF%D8%B3%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20(Duckweed)/%D8%B9%D8%AF%D8%B3%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20(Duckweed).jpg",
    ],
    description:
      "نبات مائي صغير جداً، يتراوح قطره بين 2 إلى 3 ملم، ويطفو على سطح الماء",
  },
  {
    id: "water-lily",
    category: "Plants",
    categoryAr: "النباتات",
    nameAr: "كعيبة  زنبق الماء",
    nameEn: "Water Lily",
    images: [
      "/Assets/gallary/%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA/%D9%83%D8%B9%D9%8A%D8%A8%D8%A9%20%20%D8%B2%D9%86%D8%A8%D9%82%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20(Water%20Lily)/%D9%83%D8%B9%D9%8A%D8%A8%D8%A9%20%D8%B2%D9%86%D8%A8%D9%82%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20(Water%20Lily).png",
    ],
    description:
      "زهرة زنبق الماء الوردي (Water Lily)، وهي نبتة مائية تعيش في البرك والمياه الهادئة",
  },
  {
    id: "stonewort",
    category: "Plants",
    categoryAr: "النباتات",
    nameAr: "نبات نيتل",
    nameEn: "Stonewort",
    images: [
      "/Assets/gallary/%D8%A7%D9%84%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA/%D9%86%D8%A8%D8%A7%D8%AA%20%D9%86%D9%8A%D8%AA%D9%84%20(Stonewort)/%D9%86%D8%A8%D8%A7%D8%AA%20%D9%86%D9%8A%D8%AA%D9%84%20(Stonewort).jpg",
    ],
    description:
      'يُطلق على هذه النباتات محلياً في بعض المناطق، مثل أهوار الجبايش في العراق، اسم "الكعيبة".',
  },
  {
    id: "item-10",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "بلبل القصب البصري",
    nameEn: "Basra Reed Warbler",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/Basra%20Reed%20Warbler%20(%D8%AA%D9%85)/Basra-Reed-Warbler.jpg",
    ],
    description:
      "يُصنف هذا الطائر على أنه مهدد بخطر انقراض أقصى نظراً لانخفاض أعداده بشكل سريع جداً وتدمير موائله الطبيعية.",
  },
  {
    id: "marbled-teal",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "أبو المنجل الرخامي",
    nameEn: "Marbled Teal",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A3%D8%A8%D9%88%20%D8%A7%D9%84%D9%85%D9%86%D8%AC%D9%84%20%D8%A7%D9%84%D8%B1%D8%AE%D8%A7%D9%85%D9%8A%20(Marbled%20Teal)(%D8%AA%D9%85)/%D8%A3%D8%A8%D9%88%20%D8%A7%D9%84%D9%85%D9%86%D8%AC%D9%84%20%D8%A7%D9%84%D8%B1%D8%AE%D8%A7%D9%85%D9%8A%20(Marbled%20Teal).jpeg",
    ],
    description:
      "يتميز بريش داكن يظهر بلمعة أرجوانية وخضراء وبرونزية تحت ضوء الشمس، ولديه منقار طويل منحني للأسفل.",
  },
  {
    id: "collared-pratincole",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "أبو اليسر المطوق",
    nameEn: "Collared Pratincole",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A3%D8%A8%D9%88%20%D8%A7%D9%84%D9%8A%D8%B3%D8%B1%20%D8%A7%D9%84%D9%85%D8%B7%D9%88%D9%82%20(Collared%20Pratincole)(%D9%83%D8%A7%D9%85%D9%84%20%D8%B9%D9%86%D8%AF%20%D8%A3%D8%BA%D8%A7%D8%AF%D9%8A%D8%B1)/%D8%A3%D8%A8%D9%88%20%D8%A7%D9%84%D9%8A%D8%B3%D8%B1%20%D8%A7%D9%84%D9%85%D8%B7%D9%88%D9%82%20(Collared%20Pratincole).jpg",
    ],
    description:
      "طيور متوسطة الحجم تشبه مزيجاً بين الزقزاق والسنونو، وتتميز بظهر بني رمادي، وذيل متشعب، وبقعة صفراء باهتة على الحلق محددة بخط أسود.\nتعيش عادة في المناطق المفتوحة مثل السهول الجافة، الحقول، والمناطق الرطبة ذات الشواطئ الطينية.",
  },
  {
    id: "white-wagtail",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "أبو فصادة  الذعرة البيضاء",
    nameEn: "White Wagtail",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A3%D8%A8%D9%88%20%D9%81%D8%B5%D8%A7%D8%AF%D8%A9%20%20%D8%A7%D9%84%D8%B0%D8%B9%D8%B1%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1%20(White%20Wagtail)(%D8%AA%D9%85)/%D8%A3%D8%A8%D9%88%20%D9%81%D8%B5%D8%A7%D8%AF%D8%A9%20%20%D8%A7%D9%84%D8%B0%D8%B9%D8%B1%D8%A9%20%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D8%A1%20(White%20Wagtail).jpg",
    ],
    description:
      "طائر صغير وأنيق يتميز بريشه الأبيض والأسود المتباين وذيله الطويل الذي يهزه باستمرار.",
  },
  {
    id: "great-white-pelican",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "البجع الأبيض",
    nameEn: "Great White Pelican",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%A8%D8%AC%D8%B9%20%D8%A7%D9%84%D8%A3%D8%A8%D9%8A%D8%B6%20(Great%20White%20Pelican)(%D8%AA%D9%85)/%D8%A7%D9%84%D8%A8%D8%AC%D8%B9%20%D8%A7%D9%84%D8%A3%D8%A8%D9%8A%D8%B6%20(Great%20White%20Pelican).jpg",
    ],
    description:
      "تتميز بمنقار طويل وجراب حلقي كبير يستخدم لصيد الأسماك وتصفية الماء.\nتعيش في المناطق الساحلية والممرات المائية الداخلية، وغالباً ما تتواجد في مجموعات.",
  },
  {
    id: "purple-swamphen",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "البرهان",
    nameEn: "Purple Swamphen",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%A8%D8%B1%D9%87%D8%A7%D9%86%20(Purple%20Swamphen)(%D8%AA%D9%85)/%D8%A7%D9%84%D8%A8%D8%B1%D9%87%D8%A7%D9%86%20(Purple%20Swamphen).jpg",
    ],
    description:
      'دجاجة الماء الأرجوانية (المعروف أيضاً باسم "الفرفر" أو "السحنون").',
  },
  {
    id: "common-pochard",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "البط أحمر الرأس",
    nameEn: "Common Pochard",
    images: [
      "/Assets/gallary/حيوانات/البط أحمر الرأس (Common Pochard)/البط أحمر الرأس (Common Pochard).jpg",
    ],
    description:
      "يتميز ذكور هذا النوع برأس برتقالي مستدير، ومنقار أحمر زاهٍ، وصدر أسود.\nتعتبر هذه الطيور من الأنواع الغطاسة التي تفضل البحيرات الكبيرة والمستنقعات ذات القصب",
  },
  {
    id: "little-egret",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "البلشون الأبيض الصغير",
    nameEn: "Little Egret",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%A8%D9%84%D8%B4%D9%88%D9%86%20%D8%A7%D9%84%D8%A3%D8%A8%D9%8A%D8%B6%20%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%20(Little%20Egret)(%D8%AA%D9%85)/%D8%A7%D9%84%D8%A8%D9%84%D8%B4%D9%88%D9%86%20%D8%A7%D9%84%D8%A3%D8%A8%D9%8A%D8%B6%20%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%20(Little%20Egret).jpg",
    ],
    description:
      "طائر أبيض اللون بالكامل مع منقار طويل ورفيع باللون الأسود، وساقين طويلتين باللون الأسود.",
  },
  {
    id: "purple-heron",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "البلشون الأرجواني",
    nameEn: "Purple Heron",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%A8%D9%84%D8%B4%D9%88%D9%86%20%D8%A7%D9%84%D8%A3%D8%B1%D8%AC%D9%88%D8%A7%D9%86%D9%8A%20(Purple%20Heron)(%D8%AA%D9%85)/%D8%A7%D9%84%D8%A8%D9%84%D8%B4%D9%88%D9%86%20%D8%A7%D9%84%D8%A3%D8%B1%D8%AC%D9%88%D8%A7%D9%86%D9%8A%20(Purple%20Heron)..jpeg",
    ],
    description:
      "بلشون أرجواني (Ardea purpurea)، وهو طائر مائي طويل الساقين يتميز بلونه الرمادي الأرجواني ورقبة طويلة",
  },
  {
    id: "common-teal",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "الحذاف الشتوي",
    nameEn: "Common Teal",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%AD%D8%B0%D8%A7%D9%81%20%D8%A7%D9%84%D8%B4%D8%AA%D9%88%D9%8A%20(Common%20Teal)(%D8%AA%D9%85)/%D8%A7%D9%84%D8%AD%D8%B0%D8%A7%D9%81%20%D8%A7%D9%84%D8%B4%D8%AA%D9%88%D9%8A%20(Common%20Teal).webp",
    ],
    description:
      'طائر مائي مهاجر صغير الحجم، يتميز بوجود رقعة خضراء زاهية على أجنحته تُعرف باسم "المرآة" (speculum).',
  },
  {
    id: "mallard",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "الخضيري",
    nameEn: "Mallard",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%AE%D8%B6%D9%8A%D8%B1%D9%8A%20(Mallard)(%D8%AA%D9%85)/%D8%A7%D9%84%D8%AE%D8%B6%D9%8A%D8%B1%D9%8A%20(Mallard).jpg",
    ],
    description:
      "بطة برية (Mallard) وتعرف علمياً باسم Anas platyrhynchos.\nغالباً ما تُرى هذه البط في مجموعات وتتغذى على أسطح المياه (Dabbling duck).",
  },
  {
    id: "whiskered-tern",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "الخطاف الأبيض الخد",
    nameEn: "Whiskered Tern",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%AE%D8%B7%D8%A7%D9%81%20%D8%A7%D9%84%D8%A3%D8%A8%D9%8A%D8%B6%20%D8%A7%D9%84%D8%AE%D8%AF%20(Whiskered%20Tern)(%D8%AA%D9%85)/%D8%A7%D9%84%D8%AE%D8%B7%D8%A7%D9%81%20%D8%A7%D9%84%D8%A3%D8%A8%D9%8A%D8%B6%20%D8%A7%D9%84%D8%AE%D8%AF%20(Whiskered%20Tern).jfif",
    ],
    description:
      "تعيش هذه الطيور بشكل أساسي في المناطق الساحلية.\nتتغذى بشكل رئيسي على الأسماك الصغيرة، وتصطادها عن طريق الغوص من الجو.",
  },
  {
    id: "item-22",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "الرفراف أبيض الصدر",
    nameEn: "White-throated Kingfisher",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%B1%D9%81%D8%B1%D8%A7%D9%81%20%D8%A3%D8%A8%D9%8A%D8%B6%20%D8%A7%D9%84%D8%B5%D8%AF%D8%B1(%D9%83%D8%A7%D9%85%D9%84%20%D8%B9%D9%86%D8%AF%20%D8%A3%D8%BA%D8%A7%D8%AF%D9%8A%D8%B1)/%D8%A7%D9%84%D8%B1%D9%81%D8%B1%D8%A7%D9%81%20%D8%A3%D8%A8%D9%8A%D8%B6%20%D8%A7%D9%84%D8%B5%D8%AF%D8%B1.jpg",
    ],
    description:
      'الرفراف أبيض الصدر (Halcyon smyrnensis)، والمعروف أيضاً باسم "عروس البستان"',
  },
  {
    id: "pied-kingfisher",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "الرفراف الأبقع",
    nameEn: "Pied Kingfisher",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%B1%D9%81%D8%B1%D8%A7%D9%81%20%D8%A7%D9%84%D8%A3%D8%A8%D9%82%D8%B9%20(Pied%20Kingfisher)(%D9%83%D8%A7%D9%85%D9%84%20%D8%B9%D9%86%D8%AF%20%D8%A3%D8%BA%D8%A7%D8%AF%D9%8A%D8%B1)/%D8%A7%D9%84%D8%B1%D9%81%D8%B1%D8%A7%D9%81%20%D8%A7%D9%84%D8%A3%D8%A8%D9%82%D8%B9%20(Pied%20Kingfisher).jpg",
    ],
    description:
      "يتميز بريشه الأبيض والأسود المتباين، ومنقار طويل مدبب، ورأس بقلنسوة صغيرة.",
  },
  {
    id: "item-24",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "الزقزاق الشامي",
    nameEn: "Spur-winged Lapwing",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%B2%D9%82%D8%B2%D8%A7%D9%82%20%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%8A(%D9%83%D8%A7%D9%85%D9%84%20%D8%B9%D9%86%D8%AF%20%D8%A3%D8%BA%D8%A7%D8%AF%D9%8A%D8%B1)/%D8%A7%D9%84%D8%B2%D9%82%D8%B2%D8%A7%D9%82%20%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%8A.jpg",
    ],
    description:
      "يتميز هذا النوع بساقيه الطويلتين ذات اللون الأصفر الزاهي.\nيعيش في المناطق الرطبة والأهوار، ويواجه تحديات بسبب الجفاف ونقص المياه",
  },
  {
    id: "bull-headed-shrike",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "الصرَد محمر الرأس",
    nameEn: "Bull-headed Shrike",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%B5%D8%B1%D9%8E%D8%AF%20%D9%85%D8%AD%D9%85%D8%B1%20%D8%A7%D9%84%D8%B1%D8%A3%D8%B3%20(Bull-headed%20Shrike)(%D9%83%D8%A7%D9%85%D9%84%20%D8%B9%D9%86%D8%AF%20%D8%A3%D8%BA%D8%A7%D8%AF%D9%8A%D8%B1)/%D8%A7%D9%84%D8%B5%D8%B1%D9%8E%D8%AF%20%D9%85%D8%AD%D9%85%D8%B1%20%D8%A7%D9%84%D8%B1%D8%A3%D8%B3%20(Bull-headed%20Shrike).jpg",
    ],
    description:
      ": يتميز الذكر بوجود قناع أسود عبر العينين، وتاج بني اللون، وأجزاء سفلية ذات لون ضارب إلى الحمرة.",
  },
  {
    id: "little-grebe",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "الغطاس الصغير",
    nameEn: "Little Grebe",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D8%BA%D8%B7%D8%A7%D8%B3%20%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%20(Little%20Grebe)(%D8%AA%D9%85)/%D8%A7%D9%84%D8%BA%D8%B7%D8%A7%D8%B3%20%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%20(Little%20Grebe).jpg",
    ],
    description:
      "هو طائر مائي صغير الحجم ينتمي إلى فصيلة الغطاسيات.\n يتميز بامتلاكه أقداماً طويلة تنتهي بكفوف تشبه الزعانف، مما يسهل حركته أثناء السباحة أو الغوص للتغذية.",
  },
  {
    id: "curlew",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "الكروان",
    nameEn: "Curlew",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D9%83%D8%B1%D9%88%D8%A7%D9%86%20(Curlew)(%D8%AA%D9%85)/%D8%A7%D9%84%D9%83%D8%B1%D9%88%D8%A7%D9%86%20(Curlew).jpg",
    ],
    description:
      "يتميز بمنقار طويل جداً ورقيق ومنحني لأسفل، وهو الأداة المثالية للبحث عن الطعام في الطين أو الرمل.",
  },
  {
    id: "white-stork",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "اللقلق الأبيض",
    nameEn: "White Stork",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D9%84%D9%82%D9%84%D9%82%20%D8%A7%D9%84%D8%A3%D8%A8%D9%8A%D8%B6%20(White%20Stork)(%D8%AA%D9%85)/%D8%A7%D9%84%D9%84%D9%82%D9%84%D9%82%20%D8%A7%D9%84%D8%A3%D8%A8%D9%8A%D8%B6%20(White%20Stork).jpg",
    ],
    description:
      "يتميز بريشه الأبيض والأسود على أطراف أجنحته، بالإضافة إلى منقاره وسيقانه الطويلة ذات اللون الأحمر.",
  },
  {
    id: "greater-flamingo",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "النحام الكبير",
    nameEn: "Greater Flamingo",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D9%86%D8%AD%D8%A7%D9%85%20%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1%20(Greater%20Flamingo)(%D8%AA%D9%85)/%D8%A7%D9%84%D9%86%D8%AD%D8%A7%D9%85%20%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1%20(Greater%20Flamingo).jpeg",
    ],
    description:
      "النحام الكبير (المعروف أيضاً باسم الفلامنجو الكبير)، وهو أكبر أنواع طيور الفلامنجو وأكثرها انتشاراً",
  },
  {
    id: "armenian-gull",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "النورس أرميني",
    nameEn: "Armenian Gull",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D9%86%D9%88%D8%B1%D8%B3%20%D8%A3%D8%B1%D9%85%D9%8A%D9%86%D9%8A%20(Armenian%20Gull)(%D8%AA%D9%85)/%D8%A7%D9%84%D9%86%D9%88%D8%B1%D8%B3%20%D8%A3%D8%B1%D9%85%D9%8A%D9%86%D9%8A%20(Armenian%20Gull).png",
    ],
    description:
      "النورس أسود الذيل (Black-tailed Gull): يتوافق مع النطاق الجغرافي لشرق آسيا ويتميز بمنقار أصفر ذو طرف أسود وأحمر.",
  },
  {
    id: "marsh-harrier",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "الهارير مرزة المستنقعات",
    nameEn: "Marsh Harrier",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D9%87%D8%A7%D8%B1%D9%8A%D8%B1%20%D9%85%D8%B1%D8%B2%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D9%82%D8%B9%D8%A7%D8%AA%20(Marsh%20Harrier)(%D8%AA%D9%85)/%D8%A7%D9%84%D9%87%D8%A7%D8%B1%D9%8A%D8%B1%20%D9%85%D8%B1%D8%B2%D8%A9%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%86%D9%82%D8%B9%D8%A7%D8%AA%20(Marsh%20Harrier).jpg",
    ],
    description:
      "طائر جارح متوسط الحجم يتميز بريش بني داكن مع درجات ذهبية أو كريمية على الرأس والرقبة.",
  },
  {
    id: "little-bittern",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "الواق الصغير",
    nameEn: "Little Bittern",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D9%88%D8%A7%D9%82%20%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%20(Little%20Bittern).(%D8%AA%D9%85)/%D8%A7%D9%84%D9%88%D8%A7%D9%82%20%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1%20(Little%20Bittern)..jpg",
    ],
    description:
      "يفضل هذا الطائر العيش في المستنقعات المائية العذبة، والمناطق الرطبة، وضفاف البحيرات، والجداول حيث يتغذى على الأسماك الصغيرة والمخلوقات المائية الأخرى.",
  },
  {
    id: "greylag-goose",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "الوز الأغبر",
    nameEn: "Greylag Goose",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A7%D9%84%D9%88%D8%B2%20%D8%A7%D9%84%D8%A3%D8%BA%D8%A8%D8%B1%20(Greylag%20Goose)(%D8%AA%D9%85)/%D8%A7%D9%84%D9%88%D8%B2%20%D8%A7%D9%84%D8%A3%D8%BA%D8%A8%D8%B1%20(Greylag%20Goose).jpg",
    ],
    description:
      "تتميز هذه الإوزة بريش رمادي وأبيض مخطط، ومنقار برتقالي، وأرجل وردية.\nتعتبر أكبر أنواع الإوز الرمادي، وهي السلف لغالبية سلالات الإوز المستأنس.",
  },
  {
    id: "black-crowned-night-heron",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "بلشون الليل",
    nameEn: "Black-crowned Night Heron",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%A8%D9%84%D8%B4%D9%88%D9%86%20%D8%A7%D9%84%D9%84%D9%8A%D9%84%20(Black-crowned%20Night%20Heron)(%D8%AA%D9%85)/%D8%A8%D9%84%D8%B4%D9%88%D9%86%20%D8%A7%D9%84%D9%84%D9%8A%D9%84%20(Black-crowned%20Night%20Heron).jpg",
    ],
    description:
      "يتميز البالغون بتاج وظهر أسودين، وأجنحة رمادية، وأجزاء سفلية بيضاء، مع عيون حمراء زاهية.",
  },
  {
    id: "iraq-babbler",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "ثرثار العراق",
    nameEn: "Iraq Babbler",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%AB%D8%B1%D8%AB%D8%A7%D8%B1%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82%20(Iraq%20Babbler)(%D9%83%D8%A7%D9%85%D9%84%20%D8%B9%D9%86%D8%AF%20%D8%A3%D8%BA%D8%A7%D8%AF%D9%8A%D8%B1)/%D8%AB%D8%B1%D8%AB%D8%A7%D8%B1%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82%20(Iraq%20Babbler).jfif",
    ],
    description:
      "طائر صغير الحجم يتميز بلون بني فاتح (أسمر/ buff)، وذيل طويل، وأجنحة قصيرة، مع خطوط خفيفة على الظهر والرأس.",
  },
  {
    id: "common-moorhen",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "دجاجة الماء",
    nameEn: "Common Moorhen",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%AF%D8%AC%D8%A7%D8%AC%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20(Common%20Moorhen)./%D8%AF%D8%AC%D8%A7%D8%AC%D8%A9%20%D8%A7%D9%84%D9%85%D8%A7%D8%A1%20(Common%20Moorhen)..jpg",
    ],
    description:
      "تتميز هذه الطيور بلونها الرمادي الداكن إلى الأسود، مع وجود منقار وجبهة باللون الأبيض الناصع.",
  },
  {
    id: "osprey",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "صقر السمك  العقاب النساري",
    nameEn: "Osprey",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%B5%D9%82%D8%B1%20%D8%A7%D9%84%D8%B3%D9%85%D9%83%20%20%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%A8%20%D8%A7%D9%84%D9%86%D8%B3%D8%A7%D8%B1%D9%8A%20(Osprey)/%D8%B5%D9%82%D8%B1%20%D8%A7%D9%84%D8%B3%D9%85%D9%83%20%20%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%A8%20%D8%A7%D9%84%D9%86%D8%B3%D8%A7%D8%B1%D9%8A%20(Osprey).jpeg",
    ],
    description:
      "يتميز بظهره البني الداكن وأجزائه السفلية البيضاء، مع شريط أسود مميز يمر عبر عينيه.",
  },
  {
    id: "common-kingfisher",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "صياد السمك الأخضر",
    nameEn: "Common Kingfisher",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%B5%D9%8A%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B3%D9%85%D9%83%20%D8%A7%D9%84%D8%A3%D8%AE%D8%B6%D8%B1%20(Common%20Kingfisher)(%D9%83%D8%A7%D9%85%D9%84%20%D8%B9%D9%86%D8%AF%20%D8%A3%D8%BA%D8%A7%D8%AF%D9%8A%D8%B1)/%D8%B5%D9%8A%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B3%D9%85%D9%83%20%D8%A7%D9%84%D8%A3%D8%AE%D8%B6%D8%B1%20(Common%20Kingfisher).webp",
    ],
    description:
      "يتميز هذا الطائر الصغير بحجمه المقارب للعصفور، ورأسه الكبير، ومنقاره الطويل المدبب.",
  },
  {
    id: "طائر-الجزار",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "طائر الجزار",
    nameEn: "Red-backed Shrike",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%B7%D8%A7%D8%A6%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%B1/%D8%B7%D8%A7%D8%A6%D8%B1%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%B1.jpg",
    ],
    description:
      'وهو طائر صغير معروف بلقب "طائر الجزار" بسبب عادته في تخزين فرائسه على الأشواك أو الأسلاك',
  },
  {
    id: "passer-domesticus",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "عصفور دوري",
    nameEn: "Passer domesticus",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%B9%D8%B5%D9%81%D9%88%D8%B1%20%D8%AF%D9%88%D8%B1%D9%8A%20(Passer%20domesticus)/%D8%B9%D8%B5%D9%81%D9%88%D8%B1%20%D8%AF%D9%88%D8%B1%D9%8A%20(Passer%20domesticus).jpg",
    ],
    description:
      "ينتشر هذا النوع بشكل كبير في جميع أنحاء العالم ويعيش بشكل وثيق مع البشر في المناطق الحضرية والريفية",
  },
  {
    id: "great-cormorant",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "غراب البحر",
    nameEn: "Great Cormorant",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%BA%D8%B1%D8%A7%D8%A8%20%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%20(Great%20Cormorant)/%D8%BA%D8%B1%D8%A7%D8%A8%20%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%20(Great%20Cormorant).jfif",
    ],
    description:
      "طيور مائية كبيرة الحجم ذات ريش أسود لامع، ورقبة طويلة وسميكة، ومنقار خطافي قوي.",
  },
  {
    id: "item-42",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "غطاس صغير",
    nameEn: "Little Grebe",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%BA%D8%B7%D8%A7%D8%B3%20%D8%B5%D8%BA%D9%8A%D8%B1(%D8%AA%D9%85)/%D8%BA%D8%B7%D8%A7%D8%B3%20%D8%B5%D8%BA%D9%8A%D8%B1.jpg",
    ],
    description: "وهو طائر ماهر في السباحة والغوص.",
  },
  {
    id: "coot",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "غُرّة",
    nameEn: "Coot",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D8%BA%D9%8F%D8%B1%D9%91%D8%A9%20(Coot)/%D8%BA%D9%8F%D8%B1%D9%91%D8%A9%20(Coot).jpg",
    ],
    description:
      "وهو طائر مائي ينتمي إلى عائلة المرعات، ويشتهر بوجود درع أمامي أبيض مميز فوق منقاره.",
  },
  {
    id: "galerida-cristata",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "قبرة متوجة",
    nameEn: "Galerida cristata",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D9%82%D8%A8%D8%B1%D8%A9%20%D9%85%D8%AA%D9%88%D8%AC%D8%A9%20(%20Galerida%20cristata)/%D9%82%D8%A8%D8%B1%D8%A9%20%D9%85%D8%AA%D9%88%D8%AC%D8%A9%20(%20Galerida%20cristata).jpg",
    ],
    description:
      "تتميز بوجود عرف ريشي مميز على رأسها، والذي ترفعه عند الانتباه أو أثناء التودد.\nيغطي جسمها ريش بلون بني رملي أو باهت مع خطوط داكنة، مما يوفر لها تمويهاً ممتازاً في بيئتها الطبيعية.",
  },
  {
    id: "black-winged-stilt",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "كرسوع",
    nameEn: "Black-winged Stilt",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D9%83%D8%B1%D8%B3%D9%88%D8%B9%20(Black-winged%20Stilt)(%D9%83%D8%A7%D9%85%D9%84%20%D8%B9%D9%86%D8%AF%20%D8%A3%D8%BA%D8%A7%D8%AF%D9%8A%D8%B1%20%D9%88%20%D9%87%D9%88%20%D9%86%D9%81%D8%B3%D9%87%20%D9%84%D9%83%D8%B1%D9%83%D8%B1%20%D9%88%20%D9%87%D9%85%20%D9%85%D9%88%20%D8%A7%D8%B3%D9%85%D9%87%20%D9%87%D9%8A%D8%AC)/%D9%83%D8%B1%D8%B3%D9%88%D8%B9%20%20(Black-winged%20Stilt).jpg",
    ],
    description:
      "يتميز هذا الطائر بأرجله الطويلة جداً ذات اللون الوردي أو الأحمر، والتي تساعده في الخوض في المياه الضحلة.",
  },
  {
    id: "black-winged-stilt-1",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "لكركر المألوف",
    nameEn: "Black-winged Stilt",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D9%84%D9%83%D8%B1%D9%83%D8%B1%20%D8%A7%D9%84%D9%85%D8%A3%D9%84%D9%88%D9%81%20(Black-winged%20Stilt)(%D9%83%D8%A7%D9%85%D9%84%20%D8%B9%D9%86%D8%AF%20%D8%A3%D8%BA%D8%A7%D8%AF%D9%8A%D8%B1)/%D8%A7%D9%84%D9%83%D8%B1%D9%83%D8%B1%20%D8%A7%D9%84%D9%85%D8%A3%D9%84%D9%88%D9%81%20(Black-winged%20Stilt).jpg",
    ],
    description:
      "يتميز هذا الطائر بأرجله الطويلة جداً ذات اللون الوردي أو الأحمر، والتي يستخدمها للخوض في المياه الضحلة.",
  },
  {
    id: "item-47",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "نسر ملتحي",
    nameEn: "Bearded Vulture",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D9%86%D8%B3%D8%B1%20%D9%85%D9%84%D8%AA%D8%AD%D9%8A(%D9%83%D8%A7%D9%85%D9%84%20%D8%B9%D9%86%D8%AF%20%D8%A3%D8%BA%D8%A7%D8%AF%D9%8A%D8%B1)/%D9%86%D8%B3%D8%B1%20%D9%85%D9%84%D8%AA%D8%AD%D9%8A.jpg",
    ],
    description:
      "هو طائر جارح كبير الحجم، يتميز بذيل طويل على شكل ماسة وأجنحة طويلة.",
  },
  {
    id: "great-reed-warbler",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "هازجة القصب الكبيرة",
    nameEn: "Great Reed Warbler",
    images: [
      "/Assets/gallary/%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA/%D9%87%D8%A7%D8%B2%D8%AC%D8%A9%20%D8%A7%D9%84%D9%82%D8%B5%D8%A8%20%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1%D8%A9%20(Great%20Reed%20Warbler)(%D8%AA%D9%85)/%D9%87%D8%A7%D8%B2%D8%AC%D8%A9%20%D8%A7%D9%84%D9%82%D8%B5%D8%A8%20%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1%D8%A9%20(Great%20Reed%20Warbler).jpg",
    ],
    description:
      "تتميز هذه الطيور بظهر بني غير مخطط وبطن أبيض باهت.\nتوجد عادةً في المناطق ذات الكثافة النباتية العالية مثل القصب، وتتغذى على الحشرات.",
  },
  {
    id: "أبو-اليسر-طوقي",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "أبو اليسر طوقي",
    nameEn: "Collared Pratincole",
    images: [
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D8%A3%D8%A8%D9%88%20%D8%A7%D9%84%D9%8A%D8%B3%D8%B1%20%D8%B7%D9%88%D9%82%D9%8A/%D8%A3%D8%A8%D9%88%20%D8%A7%D9%84%D9%8A%D8%B3%D8%B1%20%D8%B7%D9%88%D9%82%D9%8A.jpeg",
    ],
    description:
      'هذه المجموعة من الطيور الجميلة هي أبو اليسر طوقي (Collared Pratincole)، وتُعرف علمياً باسم Glareola pratincola. في العراق، يطلق عليها أحياناً أسماء محلية ترتبط بسرعتها أو شكل طيرانها الذي يشبه طيران السنونو.الوصف الخارجيالطوق المميز: تلاحظ وجود خط أسود رفيع يحيط بالحلق (الذي يكون بلون كريمي أو أصفر فاتح)، وهذا "الطوق" هو سبب تسميتها بـ "أبو اليسر الطوقي".المنقار: منقارها قصير وأسود، لكنه يتميز بقاعدة حمراء زاهية تظهر بوضوح في صورتك، وهي علامة جمالية تميز هذا النوع.الأجنحة والذيل: تمتلك أجنحة طويلة ومدببة وذيلاً مشقوقاً (يشبه مقص السنونو)، مما يجعلها بارعة جداً ورشيقة في الطيران.اللون: الجزء العلوي من الجسم بني زيتوني، بينما الأجزاء السفلية فاتحة أو بيضاء. السلوك والتغذيةعلى الرغم من أنها من الطيور الخواضة (التي تعيش قرب الماء)، إلا أنها تصطاد الحشرات أثناء الطيران مثل السنونو، وتتغذى على اليعاسوب والجراد والبعوض.وتكون في قمة نشاطها عند الغسق (وقت الغروب) أو الفجر.كما يظهر هي طيور اجتماعية جداً وتتواجد دائماً في مجموعات أو أسراب، وتفضل الراحة على الأرض المستوية أو الطينية قرب المياه.التواجد في المنطقة والعراقتفضل الأراضي الطينية المكشوفة القريبة من الأهوار، والمزارع المحروثة، والسهول الملحية.و في العراق تُعتبر من الطيور المهاجرة والمفرخة (التي تضع بيضها في العراق)، وتتواجد بكثرة في مناطق الأهوار والسهول الفيضية خلال فصل الصيف والربيع.تُعد رؤية هذه المجموعة وهي تجلس بهدوء على الأرض لقطة رائعة، لأنها غالباً ما تكون سريعة الحركة ويصعب رصدها بوضوح وهي ثابتة.',
  },
  {
    id: "ابو-المغازل",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "ابو المغازل",
    nameEn: "Black-winged Stilt",
    images: [
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D8%A7%D8%A8%D9%88%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B2%D9%84/%D8%A3%D8%A8%D9%88%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B2%D9%84(%D8%A7%D9%84%D9%83%D8%B1%D8%B7%D8%A9).jpeg",
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D8%A7%D8%A8%D9%88%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B2%D9%84/%D8%A7%D9%84%D9%83%D8%B1%D8%B7%D9%91%D8%A9.jpeg",
    ],
    description:
      'هذا الطائر الجميل ذو الأرجل الطويلة هو أبو المغازل (Black-winged Stilt)، ويُعرف في العراق بأسماء شعبية منها "الكرطّة" أو "أبو المغازل". الوصف الخارجيالأرجل: هي السمة الأبرز فيه، فهي طويلة جداً ونحيفة ولونها وردي فاقع أو أحمر، وتعتبر من أطول الأرجل بالنسبة لحجم الجسم بين جميع أنواع الطيور.الألوان: يتميز بتضاد لوني واضح؛ فالظهر والأجنحة باللون الأسود، بينما الرأس والصدر والبطن باللون الأبيض الناصع.المنقار: طويل، أسود، ومستقيم، وهو دقيق جداً لمساعدته في التقاط الفرائس الصغيرة من الماء والطين. البيئة والتواجد في العراقيعيش في المسطحات المائية الضحلة، المستنقعات، ضفاف الأنهار، والمزارع المغمورة بالمياه.وفي العراق يتواجد بكثرة في الأهوار والمناطق المائية في جنوب ووسط العراق، وهو من الطيور المقيمة والمهاجرة في آن واحد.السلوك والتغذيةيتغذى على الحشرات المائية، القشريات، واليرقات التي يبحث عنها في المياه الضحلة.يمشي بخطوات رشيقة وهادئة داخل الماء مستخدماً أرجله الطويلة التي تمكنه من الخوض في أعماق لا تصل إليها الطيور الصغيرة الأخرى.هو طائر "حذر" جداً، ويصدر أصواتاً حادة وعالية عند شعوره بالخطر لتنبيه بقية الطيور.في الصورة، يظهر طائر بالغ (الذي في المقدمة بألوانه الواضحة) وطائر يافع أو في مرحلة نمو (الذي في الخلف وتكون ألوانه أقل حدة ومنقاره أقصر قليلاً).',
  },
  {
    id: "القوبعة-المتوجة",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "القوبعة المتوجة",
    nameEn: "Crested Lark",
    images: [
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D8%A7%D9%84%D9%82%D9%88%D8%A8%D8%B9%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%AC%D8%A9/%D8%A7%D9%84%D9%82%D9%88%D8%A8%D8%B9%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D9%88%D8%AC%D8%A9.jpeg",
    ],
    description:
      'ويُعرف محلياً في العديد من المناطق العربية باسم "القوبعة". تعود هذه التسمية إلى العُرف المميز من الريش الموجود فوق رأسه والذي يشبه "القبعة" أو التاج. إليك أهم المعلومات عنه:الوصف الخارجيالعُرف: يتميز بخصلة ريش بارزة على الرأس (تاج) يرفعها عند الانتباه أو الاستعراض. اللون: يغطيه ريش بني رملي من الأعلى مع نقوش مخططة تساعده على التمويه في البيئات الجافة. أما الناحية البطنية فتكون فاتحة اللون مع وجود خطوط داكنة على الصدر. الحجم: طائر متوسط الحجم، يتراوح طول جسمه بين 17 و19 سم. الأجزاء الأخرى: منقاره قرني الشكل، وعيونه بنية، وأرجله مائلة للاصفرار وقصيرة. الموطن والبيئةيتواجد بشكل واسع في أوروبا، وشمال أفريقيا، والشرق الأوسط، وأجزاء من آسيا. يعيش في المناطق المفتوحة والقاحلة مثل الحقول الزراعية، والمراعي، والمناطق الرملية، وحتى على جوانب الطرق وفي الحدائق العامة. ويُعتبر من الطيور المقيمة (غير المهاجرة) في معظم مناطق انتشاره.      السلوك والتغذيةيتغذى بشكل أساسي على الأرض، حيث يبحث عن الحبوب، والبذور، والحشرات (مثل الخنافس). ويشتهر بصوته العذب وتغريده الجميل الذي يؤديه سواء وهو على الأرض أو أثناء الطيران. يتحرك بسرعة ونشاط على الأرض، وغالباً ما يُرى منفرداً أو في أزواج خلال موسم التكاثر، وفي مجموعات صغيرة خلال الشتاء.       التكاثرتبني القبرة المتوجة أعشاشها على الأرض، غالباً في حفرة صغيرة مخفية تحت شجيرة أو صخرة. وتضع الأنثى عادةً ما بين 3 إلى 5 بيضات، وتتراوح فترة الحضانة بين 12 إلى 13 يوماً.',
  },
  {
    id: "ثرثار-القصب",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "ثرثار القصب",
    nameEn: "Iraq Babbler",
    images: [
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D8%AB%D8%B1%D8%AB%D8%A7%D8%B1%20%D8%A7%D9%84%D9%82%D8%B5%D8%A8/%D8%AB%D8%B1%D8%AB%D8%A7%D8%B1%20%D8%A7%D9%84%D9%82%D8%B5%D8%A8.jpeg",
    ],
    description:
      'ثرثار العراق (Iraq Babbler)، ويُعرف علمياً باسم Turdoides altirostris.يعتبر هذا الطائر مميزاً جداً وهاماً من الناحية البيئيةهو الطائر الوحيد الذي يستوطن العراق والمنطقة المحيطة به بشكل حصري تقريباً، وتعتبر الأهوار العراقية موطنه الأساسي والقلب النابض لوجوده.يُعرف في العراق بأسماء مثل "ثرثار القصب" أو "البابلي"، ويطلق عليه اسم "الثرثار" بسبب أصواته العالية والمتكررة وكأنها "ثرثرة" لا تنقطع.  الوصف الخارجياللون: يغطي جسمه ريش بني رملي شاحب أو مائل للرمادي، وهو لون يساعده على التخفي تماماً بين سيقان القصب والبردي الجافة.المنقار: يمتلك منقاراً قوياً ومنحنياً قليلاً لأسفل باللون الداكن.الذيل: يتميز بذيل طويل نسبياً يستخدمه للتوازن أثناء التنقل السريع بين القصب.العين: لون العين فاتح (أبيض أو أصفر باهت) مما يمنحه نظرة حادة ومميزة.  السلوك والبيئةيعيش حصرياً في غابات القصب والبردي الكثيفة والبيئات النهرية.هو طائر اجتماعي جداً، يعيش في مجموعات عائلية صغيرة تتنقل معاً، وغالباً ما تُسمع أصواتها قبل رؤيتها بسبب طبيعة القصب الكثيفة التي تختبئ بداخلها.يتغذى على الحشرات واليرقات التي يبحث عنها بين ثنايا نباتات القصب، كما يتناول بعض البذور.التعشيشيبني عشه بعناية فائقة على شكل كأس عميق يربطه بين سيقان القصب القوية، مما يحميه من الرياح وارتفاع مناسيب المياه.يُعد ثرثار العراق رمزاً للتنوع الإحيائي في العراق، وهو من الأنواع التي يسعى مراقبو الطيور من كل أنحاء العالم لرؤيتها في بيئتها الأصلية بالأهوار.',
  },
  {
    id: "خضيري",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "خضيري",
    nameEn: "White-throated Kingfisher",
    images: [
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D8%AE%D8%B6%D9%8A%D8%B1%D9%8A/%D8%A7%D9%84%D8%AE%D8%B6%D9%8A%D8%B1%D9%8A.jpeg",
    ],
    description:
      'هذا الطائر الجميل والملون هو صياد السمك أبيض الصدر (White-throated Kingfisher)، ويُعرف في العراق بأسماء محلية أشهرها "الخضيري" أو "الكاوند".الاسم العربي الفصيح: صياد السمك أبيض الصدر أو الرفراف أبيض الصدر.الاسم في العراق: يُسمى شعبياً "الخضيري" (بسبب لون ريشه الفيروزي الزاهي) أو "الكاوند".   الوصف الخارجيالألوان: يتميز بتناسق لوني مذهل؛ ظهره وأجنحته وذيله بلون أزرق فيروزي (تركوازي) لامع، ورأسه وأكتافه وجوانب بطنه باللون البني الشوكولاتي، بينما يبرز اللون الأبيض الناصع في منطقة الحلق والصدر.المنقار: يمتلك منقاراً طويلاً وقوياً جداً بلون أحمر مرجاني، وهو مصمم خصيصاً للصيد.الأرجل: قصيرة ولونها أحمر داكن.   السلوك والتغذيةصياد ماهر على عكس أنواع الرفراف الأخرى التي تعتمد فقط على الأسماك، فإن هذا النوع "متعدد المواهب"؛ فهو يصطاد الأسماك من الماء، وأيضاً الحشرات الكبيرة، القوارض الصغيرة، الضفادع، وحتى الثعابين الصغيرة والعصافير.أسلوب الصيد يقف ساكناً جداً على غصن أو عود قصب (كما في الصورة) يراقب الأرض أو الماء، وعندما يلمح الفريسة ينقض عليها بسرعة البرق.التواجد في العراقيُعد من الطيور المقيمة والشائعة جداً في العراق، خاصة في المناطق القريبة من الأنهار، الجداول، والمزارع، وحتى في حدائق المنازل والمنتزهات داخل المدن (مثل بغداد والبصرة).صوته مميز جداً، وهو عبارة عن صرخة عالية ومجلجلة تُسمع من مسافات بعيدة.هذا الطائر يعتبر صديقاً للمزارعين لأنه يتغذى على الكثير من الآفات والحشرات الضارة بالزراعة.',
  },
  {
    id: "item-54",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "صرد محمر الذنب",
    nameEn: "Red-tailed Shrike",
    images: [
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D8%B5%D8%B1%D8%AF%20%D9%85%D8%AD%D9%85%D8%B1%20%D8%A7%D9%84%D8%B0%D9%86%D8%A8(%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D9%85%D9%8A)/%D8%B5%D8%B1%D8%AF%20%D9%85%D8%AD%D9%85%D8%B1%202%D8%A7%D9%84%D8%B0%D9%86%D8%A8(%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D9%85%D9%8A).jpeg",
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D8%B5%D8%B1%D8%AF%20%D9%85%D8%AD%D9%85%D8%B1%20%D8%A7%D9%84%D8%B0%D9%86%D8%A8(%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D9%85%D9%8A)/%D8%B5%D8%B1%D8%AF%20%D9%85%D8%AD%D9%85%D8%B1%20%D8%A7%D9%84%D8%B0%D9%86%D8%A8(%D8%A7%D9%84%D8%AD%D9%85%D8%A7%D9%85%D9%8A).jpeg",
    ],
    description:
      'صرد محمر الذنب (Isabelline Shrike)، ويُعرف علمياً باسم Lanius isabellinus. في العراق ودول الخليج، يُطلق عليه محلياً اسم "الدرج" أو "الحمامي"، وينتمي لعائلة الطيور المعروفة بـ "الصرد" أو "النهس".     الوصف الخارجيالقناع الأسود: يتميز بوجود خط أسود (قناع) يمتد من المنقار ويمر بالعين، وهو ما يعطيه مظهراً حاداً يشبه "اللصوص".اللون: يغطي جسمه لون رملي أو بيج شاحب (Isabelline)، بينما يكون الذيل مائلاً للون الأحمر الصدئي الباهت، ومن هنا جاءت تسميته.المنقار: منقاره قوي ونهايته معقوفة قليلاً لأسفل، مما يساعده في تمزيق فرائسه.     السلوك (طائر جزار)يُلقب هذا الطائر بـ "الطائر الجزار"؛ لأنه يمتلك سلوكاً فريداً حيث يقوم بتعليق فرائسه (مثل الحشرات الكبيرة أو السحالي الصغيرة) على أشواك الأشجار أو الأسلاك الشائكة لتثبيتها وتناولها أو لتخزينها للأكل لاحقاً.يُحب الوقوف في أماكن مرتفعة وبارزة (كما يظهر في الصورة فوق عود القصب) ليرصد الأرض بانتظار حركة فريسته.     الموطن والتواجد في العراقيفضل المناطق المفتوحة، والمناطق الزراعية، والسهول ذات الشجيرات المتفرقة.ويُعتبر طائراً مهاجراً شائعاً جداً في العراق خلال فصلي الربيع والخريف، وبعضها يقضي فصل الشتاء في المناطق الدافئة مثل جنوب العراق (الأهوار).      الغذاءيتغذى بشكل أساسي على الحشرات الكبيرة (مثل الجراد والخنافس)، والعناكب، وقد يصطاد أحياناً فقاريات صغيرة مثل السحالي أو العصافير الصغيرة جداً.',
  },
  {
    id: "صقر-الاهوار",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "صقر الاهوار",
    nameEn: "Western Marsh Harrier",
    images: [
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D8%B5%D9%82%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D9%85%D8%B1%D8%B2%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B7%D8%A7%D8%A6%D8%AD(%D8%B5%D9%82%D8%B1%20%D8%A7%D9%84%D8%A3%D9%87%D9%88%D8%A7%D8%B1).jpeg",
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D8%B5%D9%82%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D9%85%D8%B1%D8%B2%D8%A9%20%D8%A7%D9%84%D8%A8%D8%B7%D8%A7%D8%A6%D8%AD(%D8%B5%D9%82%D8%B1%20%D8%A7%D9%84%D8%A3%D9%87%D9%88%D8%A7%D8%B1)2.jpeg",
    ],
    description:
      'مرزة البطائح (أو هارير المستنقعات الغربي)، واسمه العلمي Circus aeruginosus.الاسم العربي الفصيح: مرزة البطائح أو المرزة الغربية.الأسماء المحلية: يُعرف في العراق والعديد من المناطق باسم "باشق المستنقعات" أو "صقر الأهوار"، نظراً لارتباطه الوثيق ببيئة القصب والمسطحات المائية.     الوصف الخارجي اللون: يتميز بلون بني داكن يغطي معظم الجسم والأجنحة، مع وجود مساحات أفتح (مائلة للبيج أو الكريمي) على الرأس والأكتاف، وهي صفة تميز الإناث أو الطيور اليافعة من هذا النوع.الأجنحة: أجنحته طويلة وعريضة نسبياً، ونهايات ريش الطيران تظهر بشكل "أصابع" متباعدة أثناء الطيران لمساعدته على المناورة المنخفضة.الذيل: طويل وضيق، يساعده على التوازن أثناء الطيران فوق القصب.      السلوك والبيئةيشتهر بطيرانه المنخفض جداً فوق حقول القصب والمستنقعات، حيث يحلق ببطء مع رفع جناحيه قليلاً على شكل حرف (V).ويعيش بشكل أساسي في الأهوار، والمستنقعات، والبحيرات الضحلة التي يكثر فيها القصب والبردي.هو طائر جارح يتغذى على الطيور المائية الصغيرة، والضفادع، والثدييات الصغيرة (مثل جرذان الحقل)، والأسماك التي تقترب من السطح.تواجده في المنطقةيُعد من الطيور الشائعة جداً في جنوب العراق (الأهوار) ووسطه خلال فترات الهجرة والشتاء، وهو جزء أساسي من التنوع الحيوي في البيئة المائية العراقية.',
  },
  {
    id: "صياد-السمك-الأبقع",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "صياد السمك الأبقع",
    nameEn: "Pied Kingfisher",
    images: [
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D8%B5%D9%8A%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B3%D9%85%D9%83%20%D8%A7%D9%84%D8%A3%D8%A8%D9%82%D8%B9/%D8%B5%D9%8A%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B3%D9%85%D9%83%20%D8%A7%D9%84%D8%A3%D8%A8%D9%82%D8%B9.jpeg",
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D8%B5%D9%8A%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B3%D9%85%D9%83%20%D8%A7%D9%84%D8%A3%D8%A8%D9%82%D8%B9/%D8%B5%D9%8A%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B3%D9%85%D9%83%20%D8%A7%D9%84%D8%A3%D8%A8%D9%82%D8%B92.jpeg",
    ],
    description:
      'الرفراف الأبقع (Pied Kingfisher)، ويُعرف علمياً باسم Ceryle rudis. في العراق، يُطلق عليه محلياً اسم "السماك" أو "صياد السمك الأبقع".الوصف الخارجيالألوان: يتميز بكسوة ريش منقوشة باللونين الأبيض والأسود فقط (أبقع)، مما يجعله فريداً بين أنواع الرفراف الملونة الأخرى.العُرف: يمتلك عُرفاً صغيراً من الريش فوق رأسه يظهر بوضوح عند شعوره بالإثارة.المنقار: منقار طويل، مستقيم، وقوي جداً بلون أسود، وهو أداة صيد فتاكة للأسماك.مهارات الصيد صياد متخصص هو الصياد الوحيد من نوعه الذي يستطيع "الحوم" في مكان واحد في الهواء فوق الماء دون الحاجة للوقوف على غصن، حيث يرفرف بجناحيه بسرعة كبيرة ليظل ثابتاً تماماً (مثل المروحية)  وهو يراقب فريسته قبل الانقضاض عمودياً لصيد السمكة.يمتلك عيوناً مهيئة لتعديل الانكسار الضوئي الناتج عن الماء، مما يسمح له برؤية مكان السمكة الحقيقي بدقة متناهية تحت السطح لحظة الانقضاض.بعد صيد السمكة، يعود الطائر إلى منصة وقوفه ويقوم بضرب السمكة بقوة ضد السطح الصلب لقتلها وتليين عظامها، ثم يبتلعها من جهة الرأس دائماً لضمان عدم علوق الزعانف القشرية في حلقه. التواجد في العراق يُعد من الطيور المقيمة والشائعة جداً في العراق. يتواجد حول الأنهار الكبيرة مثل دجلة والفرات، وفي الأهوار، والبحيرات، وحتى الجداول الصغيرة داخل المدن. يُمكن رؤيته باستمرار واقفاً على أسلاك الكهرباء أو أغصان الأشجار القريبة من الماء لمراقبة فرائسه.الفرق بين الذكر والأنثى: يمكن تمييزهما بسهولة؛ فالذكر يمتلك "خطين" سوداوين على صدره، بينما تمتلك الأنثى "خطاً واحداً" يكون غالباً مقطوعاً في المنتصف.التعشيش: يحفر أنفاقاً طويلة في ضفاف الأنهار الطينية لبناء عشه بداخلها.النظام الاجتماعي: على عكس الكثير من أنواع الرفراف التي تعيش بشكل منفرد ومنعزل، يُعتبر الرفراف الأبقع طائراً اجتماعياً وقد يعيش في مستعمرات صغيرة، وأحياناً تساعد الطيور الصغيرة (الأبناء من الموسم السابق) والديها في تربية الصغار الجدد، وهو سلوك نادر في عالم الطيور الجارحة أو الصيادة.ينتشر في أفريقيا وآسيا، وتعتبر منطقة الأهوار وجنوب العراق من البيئات المثالية له نظراً لتوفر المياه الضحلة والغذاء الوفير من الأسماك الصغيرة.',
  },
  {
    id: "قطقاط-أبيض-الذيل",
    category: "Animals",
    categoryAr: "الحيوانات",
    nameAr: "قطقاط أبيض الذيل",
    nameEn: "White-tailed Lapwing",
    images: [
      "/Assets/gallary/%D8%B7%D9%8A%D9%88%D8%B1%20%D8%A7%D9%84%D8%A7%D9%87%D9%88%D8%A7%D8%B1/%D9%82%D8%B7%D9%82%D8%A7%D8%B7%20%D8%A3%D8%A8%D9%8A%D8%B6%20%D8%A7%D9%84%D8%B0%D9%8A%D9%84/%D9%82%D8%B7%D9%82%D8%A7%D8%B7%20%D8%A3%D8%A8%D9%8A%D8%B6%20%D8%A7%D9%84%D8%B0%D9%8A%D9%84.jpeg",
    ],
    description:
      'قطقاط أبيض الذيل (White-tailed Lapwing)، ويُعرف علمياً باسم Vanellus leucurus. في العراق، ينتمي هذا الطائر لمجموعة طيور "الزقزاق" أو "القطقاط" التي تعيش في المناطق الرطبة. الوصف الخارجيالأرجل: يتميز بأرجل طويلة جداً ونحيفة ذات لون أصفر فاقع، وهي علامة فارقة تميزه عن غيره من طيور القطقاط.اللون: يغطي جسمه ريش بني رمادي فاتح (رملي)، مع صدر رمادي وبطن مائل للبياض.الرأس والعين: الرأس فاتح اللون، وتبرز عيناه الداكنتان المحاطتان بحلقة فاتحة، مما يعطيه مظهراً هادئاً.الذيل: كما يوحي اسمه، يتميز بذيل أبيض ناصع يظهر بوضوح عند الطيران. البيئة والتواجد في العراقيفضل العيش في أطراف الأهوار، والمستنقعات الضحلة، والمناطق الطينية التي ينمو فيها القصب (كما يظهر في خلفية الصورة).و في العراق يُعتبر من الطيور المقيمة والمفرخة في العراق، خاصة في أهوار الجنوب والوسط. العراق يُعد من أهم المناطق العالمية لتكاثر هذا النوع تحديداً. السلوك والتغذيةيتغذى على الحشرات المائية، الديدان، والقشريات الصغيرة التي يجدها في الطين أو المياه الضحلة.يمشى بوقار وهدوء، وغالباً ما يقف في أماكن مرتفعة قليلاً (مثل قطعة الطين في الصورة) لمراقبة المنطقة حوله.ويتواجد غالباً في أزواج أو مجموعات صغيرة، وهو أقل ضجيجاً من أنواع القطقاط الأخرى (مثل قطقاط المسارح "زقزاق الشامي").يعتبر رؤية هذا الطائر وتصويره في بيئته الطبيعية علامة على جودة النظام البيئي في المناطق الرطبة العراقية.',
  },
];
