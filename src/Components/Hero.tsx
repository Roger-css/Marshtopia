import Image from "next/image";

export const Hero = () => {
  return (
    <header className="relative pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-16/7 overflow-hidden rounded-3xl border border-primary/30 shadow-2xl group">
          <Image
            alt="Cinematic view of marshland waters"
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-in-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZZjhtL7TNGPSoV4iIEKCE6qtnf4OWIsxJqemwSi_eXIOunMw7cchY3uVLk-i1ly-U-7o0yE-SQ3AITcMj8pgnLw47hI4YVWMjErdpMwbZ7cHs528-bhFCvu0pyEz9L1iLYVkNsyhVVniTxe6IjpttBkzISQcKaVTaJtw1aT8sQUvLwUT0E_QTW0hqSAaV9wVqxOUHtjxk1AafR_0CPyODC2HWcs9vOG4RhzQz693G3nlpDy685dJpEN2GbOVTcYbM9vppu01HnDbx"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <span className="font-display text-white text-4xl md:text-6xl tracking-widest uppercase opacity-80 mix-blend-overlay">
              Restoration
            </span>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-20 border-primary border m-4 rounded-2xl"></div>
        </div>
      </div>
    </header>
  );
};
