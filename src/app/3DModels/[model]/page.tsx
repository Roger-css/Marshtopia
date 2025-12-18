import Navbar from "@/Components/Navbar";
import ThreeDViewer from "@/Components/ThreeDViewer";

const page = () => {
  return (
    <div>
      <Navbar />
      <main>
        <ThreeDViewer url="/gs_bh_1.splat" />
      </main>
    </div>
  );
};

export default page;
