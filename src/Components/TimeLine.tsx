import { TimelineEvent } from "../Types/main";

const events: TimelineEvent[] = [
  {
    year: "1950",
    description:
      "Initial discovery of the marshland artifacts. Local archaeologists uncover pottery fragments dating back centuries.",
  },
  {
    year: "1960",
    description:
      'First major excavation project begins. The foundations of the submerged "Sunken Hall" are mapped for the first time.',
  },
  {
    year: "1970",
    description:
      "Preservation efforts become law. The area is designated a protected heritage site, stopping industrial drainage.",
  },
  {
    year: "1980",
    description:
      "Modern museum opens its doors. Virtual reconstruction technologies allow visitors to see the marsh as it once was.",
  },
];

export const Timeline = () => {
  return (
    <section
      id="history"
      className="py-20 px-6 bg-primary dark:bg-background-dark text-white relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-16 text-center text-background-light dark:text-accent">
          history
        </h2>
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 h-[95%] w-0.5 bg-white/30 rounded-full"></div>

          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={event.year}
                className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 w-full group"
              >
                {/* Left Side */}
                <div
                  className={`w-full md:w-5/12 pr-0 md:pr-12 ${
                    isEven
                      ? "text-center md:text-right mb-4 md:mb-0 order-2 md:order-1"
                      : "order-3 md:order-1"
                  }`}
                >
                  {isEven && (
                    <p className="text-lg opacity-80 leading-relaxed font-light">
                      {event.description}
                    </p>
                  )}
                </div>

                {/* Center Year Bubble */}
                <div className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-card-light text-primary font-display font-bold text-2xl shadow-xl border-4 border-primary/50 order-1 md:order-2 mb-4 md:mb-0 transform transition-transform group-hover:scale-110">
                  {event.year}
                </div>

                {/* Right Side */}
                <div
                  className={`w-full md:w-5/12 pl-0 md:pl-12 ${
                    !isEven
                      ? "text-center md:text-left order-2 md:order-3"
                      : "order-3"
                  }`}
                >
                  {!isEven && (
                    <p className="text-lg opacity-80 leading-relaxed font-light">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
