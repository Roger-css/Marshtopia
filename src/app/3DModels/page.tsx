import { ArtifactList } from "@/Components/ArtifactList";
import { CollectionHero } from "@/Components/CollectionHero";

const page = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <main>
        <CollectionHero />
        <ArtifactList />
      </main>
    </div>
  );
};

export default page;
