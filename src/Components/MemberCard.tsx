import { TeamMember } from "@/Types/main";
import Image from "next/image";

const MemberCard = ({
  member,
  fullWidth,
}: {
  member: TeamMember;
  fullWidth?: boolean;
}) => (
  <div
    className={`group relative  bg-card-light dark:bg-card-dark rounded-3xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-transparent hover:border-primary/20 flex flex-col sm:flex-row gap-6 items-center sm:items-start ${
      fullWidth ? "w-full lg:w-[calc(50%-1.5rem)]" : ""
    }`}
  >
    <div className="shrink-0 relative">
      <div className="absolute inset-0 bg-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
      <Image
        width={450}
        height={300}
        alt={member.name}
        className="relative w-32 h-32 object-cover rounded-2xl shadow-inner grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
        src={member.image}
      />
    </div>
    <div className="grow text-center sm:text-left">
      <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-1">
        {member.name}{" "}
        {member.isLeader && (
          <span className="text-xs font-body font-normal text-accent opacity-90 lowercase">
            (the leader)
          </span>
        )}
      </h3>
      <p className="text-xs font-bold text-accent dark:text-accent/80 mb-3 uppercase tracking-widest">
        {member.role} • {member.age} Yrs
      </p>
      <div className="w-full h-px bg-stone-200 dark:bg-stone-800 my-3 transition-colors"></div>
      <a
        className="inline-flex items-center gap-2 text-stone-500 dark:text-stone-400 hover:text-primary dark:hover:text-accent transition-colors text-sm group/link"
        href={`mailto:${member.email}`}
      >
        <span className="material-icons text-accent group-hover/link:scale-110 transition-transform">
          mail
        </span>
        <span className="underline decoration-transparent group-hover/link:decoration-accent transition-all truncate max-w-45 sm:max-w-none">
          {member.email === "example@email.com"
            ? "Send an email"
            : member.email}
        </span>
      </a>
    </div>
  </div>
);
export default MemberCard;
