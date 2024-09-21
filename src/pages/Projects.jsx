import ImageCarousel from "../components/ImageCarousel";

const Projects = () => (
  <section className=" bg-white mt-20">
    <ImageCarousel /> {/* Add the ImageCarousel component here */}
    <div className="p-3">
      <p className="mt-4 text-3xl h-full ">
        Providing the best solar solutions, DP installation, and transformer
        maintenance.
      </p>
    </div>
  </section>
);

export default Projects;
