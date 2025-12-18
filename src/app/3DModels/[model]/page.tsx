"use client";
import Navbar from "@/Components/Navbar";
import ThreeDViewer from "@/Components/ThreeDViewer";
import { useParams } from "next/navigation";

const Page = () => {
  const { model } = useParams<{ model: string }>();
  return (
    <div>
      <Navbar />
      <main>
        <ThreeDViewer url={model} />
      </main>
    </div>
  );
};

export default Page;
