import { Play } from "lucide-react";
import Image from "next/image";

export const VideoSection = () => {
  return (
    <section id="videos" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display italic text-4xl mb-8 text-primary dark:text-accent">
          videos
        </h2>
        <div className="w-full bg-card-light dark:bg-card-dark rounded-3xl overflow-hidden shadow-2xl aspect-video relative group cursor-pointer">
          <Image
            width={300}
            height={300}
            alt="Documentary video thumbnail"
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmv6HfDEdQRuY6KitLMIr2w3HDQeKLkPYZb07YyYYVQQKTY9aYn7-BxkNYqsl8DLbuJl5G9ePxXj2Fkjn_wHaeYOiBLkAoJZtGa-p_1srwsOf_onKL_DF2ab4yeamNKuBdjzGmGfCqYpQUAoL7UOyZiBUrmo_J03z6jR7jjLwJPan3WEU2ypVMIyqfQut3hiIxPPvZvU6b3kVJcM40ig2nyl5htZjxoAm3faahm-EkliMsLkLTjWv9mtEJaNoOfhZs4VIf7Hh7qGpu"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
              <Play size={"40px"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
