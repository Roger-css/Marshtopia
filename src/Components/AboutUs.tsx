import { TeamMember } from "../Types/main";
import MemberCard from "./MemberCard";

const MEMBERS: TeamMember[] = [
  {
    name: "Haider Hassan",
    role: "3D Designer",
    age: 23,
    email: "example@email.com",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIFUzqsqtFsNAd31gQJS-aAmiMhofSdYN_Rpcw4UvVcHQgHIilRyKJtpZr495PI2kOuQ4ZguyE6nxZbM5UOtn_7QmbVK9Su8sEi6ieJ4-H3gwJr7gfP11_TnTtmA8h2TwJSnKCbb7KsxOSLTfjrRdLI3JJKV_MAGAW9zt7Kt5h4KJlUkzMmg5n6fEHdSgU_LnKSAsoUmzlS2ls0q2N45qAnENmEcJGr_94wguEv8fIqeigjPSaZ_hqs8IRxBZT-uajSadbR15fqTZi",
    isLeader: true,
  },
  {
    name: "Hussein Bashir",
    role: "3D Designer",
    age: 23,
    email: "drako225iq@gmail.com",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAP22CvKsM2G1EATAgnZrZNjL3WEIQx7Ah3ake9wwo-Dt-dv0WBv1_qEeU3_qrdCyqTxAOAN7gaOgGgyFKkUmXkBsD68JNrIGXGUQFvro0BmLbY_Z78Asyqtg2AP8HOPHgNZSNVp8VnRnbYvizHPyTASoKs33joQ21uPc4n9RrEef5LEXe-0Dgo8wLFlpo8f7UI3wQvZuXt94Zpl-pL_3YZO_6KQWwpVR5nU2sm9hHkoK7KyE2Rld6CBqlT0jB3ujG5B6DceVY0GcHp",
  },
  {
    name: "Mustafa Haider",
    role: "Developer & UI/UX",
    age: 22,
    email: "example@email.com",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQA6xyxrie5JS-alDx9jTJRyAPVMXkAU3xzGOTYjDuLdgnJTIIwwKzby7USZKbHT9h0NAhEEG6lGbLyuTsCofg8lOD_8-rYlfvsTFe6VDKnYM-EUvDZ-SUr8p0WFabD3M3l8z73_kn7rDKvIrFMc8bvwInc0tP0jshRdBr-4T2XrM5ZRlOqhaByBgrk5BpEsMX4uIjv8S2Sza6vHLOmuLoDzI6T1YeqIEhGqMSiZObxnN4d20QFqaxIzTRIVIhpUV1-ac0l-AVPEW7",
  },
  {
    name: "Jannah Hamed",
    role: "UI/UX Designer",
    age: 19,
    email: "jannahhamedd@gmail.com",
    image: "/Assets/Jannah.png",
  },
  {
    name: "Agadeer Majid",
    role: "UI/UX Designer",
    age: 19,
    email: "example@email.com",
    image: "/Assets/Agadeer.png",
  },
  {
    name: "Heba Naeem",
    role: "UI/UX Designer",
    age: 21,
    email: "example@email.com",
    image: "/Assets/Hiba.png",
  },
  {
    name: "Taha Hashim",
    role: "Photogrammetry",
    age: 23,
    email: "tahahashimb@gmail.com",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAP22CvKsM2G1EATAgnZrZNjL3WEIQx7Ah3ake9wwo-Dt-dv0WBv1_qEeU3_qrdCyqTxAOAN7gaOgGgyFKkUmXkBsD68JNrIGXGUQFvro0BmLbY_Z78Asyqtg2AP8HOPHgNZSNVp8VnRnbYvizHPyTASoKs33joQ21uPc4n9RrEef5LEXe-0Dgo8wLFlpo8f7UI3wQvZuXt94Zpl-pL_3YZO_6KQWwpVR5nU2sm9hHkoK7KyE2Rld6CBqlT0jB3ujG5B6DceVY0GcHp",
  },
];

export const AboutUs = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen transition-colors duration-500">
      <section className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary dark:text-accent mb-6">
            The{" "}
            <span className="italic font-light text-stone-800 dark:text-white">
              Marshtopia
            </span>{" "}
            Team
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 dark:text-stone-400 font-light italic max-w-2xl mx-auto leading-relaxed">
            “Meet the architects, designers, and storytellers restoring the
            heart of Mesopotamia.”
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-12 rounded-full opacity-40"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-12 lg:gap-20">
          {MEMBERS.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
