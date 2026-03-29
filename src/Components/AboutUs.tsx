import { TeamMember } from "../Types/main";
import MemberCard from "./MemberCard";

const MEMBERS: TeamMember[] = [
  {
    name: "Haider Hassan",
    role: "3D Designer",
    age: 23,
    email: "haider.hassan.ch@gmail.com",
    image: "/Assets/haider.jpeg",
    isLeader: true,
  },
  {
    name: "Hussein Bashir",
    role: "3D Designer",
    age: 23,
    email: "drako225iq@gmail.com",
    image: "/Assets/hussein.jpg",
  },
  {
    name: "Mustafa Haider",
    role: "Developer & UI/UX",
    age: 22,
    email: "mustafahaider351@gmail.com",
    image: "/Assets/mustafa.jpg",
  },
  {
    name: "Jannah Hamed",
    role: "UI/UX Designer & 3D Designer",
    age: 19,
    email: "jannahhamedd@gmail.com",
    image: "/Assets/Jannah.jpeg",
  },
  {
    name: "Agadeer Majid",
    role: "UI/UX Designer",
    age: 19,
    email: "agadeer2006@gmail.com",
    image: "/Assets/aghadeer.jpeg",
  },
  {
    name: "Heba Naeem",
    role: "UI/UX Designer",
    age: 21,
    email: "naeemhiba787@gmail.com",
    image: "/Assets/Hiba.jpeg",
  },
  {
    name: "Taha Hashim",
    role: "Photogrammetry",
    age: 23,
    email: "tahahashimb@gmail.com",
    image: "/Assets/tahaa.jpeg",
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
