import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section id="videos" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display italic text-4xl mb-8 text-primary dark:text-accent">
          videos
        </h2>
        <div
          onClick={togglePlay}
          className="w-full bg-card-light dark:bg-card-dark rounded-3xl overflow-hidden shadow-2xl aspect-video relative group cursor-pointer"
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/Assets/unv12-1.mp4"
            onEnded={() => setPlaying(false)}
          />
          <div
            className={`absolute inset-0 flex items-center justify-center transition-colors ${playing ? "bg-black/0 group-hover:bg-black/20" : "bg-black/20 group-hover:bg-black/30"}`}
          >
            <div
              className={`w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-all ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
            >
              {playing ? <Pause size={40} /> : <Play size={40} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
