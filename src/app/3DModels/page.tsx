import { ArtifactList } from "@/Components/ArtifactList";
import { CollectionHero } from "@/Components/CollectionHero";
import Navbar from "@/Components/Navbar";

const page = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Navbar />
      <main>
        <CollectionHero />
        <ArtifactList />
      </main>
    </div>
  );
};

export default page;
