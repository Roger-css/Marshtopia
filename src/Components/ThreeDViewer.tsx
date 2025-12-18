"use client";
import * as SPLAT from "gsplat";
import { useEffect, useRef } from "react";
const ThreeDViewer = ({ url }: { url: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new SPLAT.WebGLRenderer(canvas);
    const scene = new SPLAT.Scene();
    const camera = new SPLAT.Camera();
    const controls = new SPLAT.OrbitControls(camera, canvas);

    const init = async () => {
      // Load the .splat or .ply file
      await SPLAT.Loader.LoadAsync(url, scene, (progress) => {
        console.log(`Loading: ${Math.round(progress * 100)}%`);
      });

      const frame = () => {
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(frame);
      };

      requestAnimationFrame(frame);
    };

    init();

    // Cleanup on unmount
    return () => {
      renderer.dispose();
    };
  }, [url]);
  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100vh", display: "block" }}
      />
    </div>
  );
};

export default ThreeDViewer;
