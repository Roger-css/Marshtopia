import Image from "next/image";
import { ReactNode } from "react";
import { LucideIcon, CheckCircle } from "lucide-react";
interface TimelineSectionProps {
  number: number;
  title: string;
  subtitle: string;
  content: ReactNode;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  iconBg: string;
  isReversed: boolean;
  hasBox?: boolean;
}
const TimelineSection = ({
  number,
  title,
  subtitle,
  content,
  image,
  imageAlt,
  icon: Icon,
  iconBg,
  isReversed,
  hasBox,
}: TimelineSectionProps) => {
  return (
    <section className="relative group">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Image */}
        <div
          className={`w-full lg:w-5/12 ${
            isReversed ? "order-2 lg:order-1" : "order-1 lg:order-2"
          } relative`}
        >
          {!isReversed && (
            <div className="absolute -inset-4 border border-accent/30 dark:border-accent/20 rounded-3xl transform -rotate-2 scale-105 z-0 transition-transform duration-700 group-hover:rotate-0" />
          )}
          {isReversed && (
            <div className="absolute -inset-6 bg-accent/5 rounded-full blur-[60px] transform translate-x-8 -z-10 animate-pulse" />
          )}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 bg-stone-200 dark:bg-stone-800 z-10 border-4 border-white dark:border-stone-900 group-hover:scale-[1.02] transition-transform duration-700">
            <Image
              width={450}
              height={300}
              alt={imageAlt}
              className={`w-full h-full object-cover ${
                number === 3
                  ? "grayscale brightness-75 group-hover:grayscale-0"
                  : number === 1
                  ? "grayscale sepia-[.2] hover:grayscale-0"
                  : ""
              } transition-all duration-1000`}
              src={image}
            />
            {number === 3 && (
              <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
            )}
            {number === 1 && (
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                <span className="text-white text-xs font-bold uppercase tracking-widest opacity-80">
                  Archival Restoration
                </span>
              </div>
            )}
            {number === 2 && (
              <div className="absolute top-6 right-6 bg-white/90 dark:bg-stone-900/90 px-4 py-2 rounded-full text-[10px] font-bold tracking-tighter uppercase shadow-lg">
                Living Traditions
              </div>
            )}
            {number === 4 && (
              <>
                <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-stone-900/95 px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-stone-200 dark:border-stone-800">
                  <CheckCircle
                    size={16}
                    className="text-primary dark:text-accent"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-800 dark:text-white">
                    UNESCO Official Site
                  </span>
                </div>
              </>
            )}
          </div>
          {number === 3 && (
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-stone-400 opacity-30" />
          )}
        </div>

        {/* Timeline Dot */}
        <div
          className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-4 border-background-light dark:border-background-dark ${iconBg} items-center justify-center z-20 shadow-xl`}
        >
          <Icon size={18} className="text-white" />
        </div>

        {/* Content */}
        <div
          className={`w-full lg:w-5/12 ${
            isReversed ? "order-1 lg:order-2" : "order-2 lg:order-1"
          }`}
        >
          <div className="relative inline-block mb-4">
            <span
              className={`absolute ${
                isReversed ? "-right-10" : "-left-10"
              } -top-6 text-7xl ${
                number === 3 ? "text-red-900/10" : "text-accent/10"
              } font-display font-bold`}
            >
              {number.toString().padStart(2, "0")}
            </span>
            <h2 className="font-display text-4xl text-stone-900 dark:text-white font-bold relative z-10">
              {title}
            </h2>
          </div>
          <h3
            className={`font-bold uppercase tracking-widest text-sm mb-6 ${
              number === 3 ? "text-red-800 dark:text-red-400" : "text-accent"
            }`}
          >
            {subtitle}
          </h3>
          {hasBox ? (
            <div className="p-8 rounded-3xl bg-stone-100 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 font-light text-stone-600 dark:text-stone-400">
              {content}
            </div>
          ) : (
            <div className="font-light text-stone-600 dark:text-stone-400 text-lg leading-relaxed">
              {content}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
