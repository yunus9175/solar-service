const Portfolio = () => {
  return (
    <section id="portfolio" className="p-4">
      <h2 className="text-2xl font-bold">Our Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example project cards */}
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">Solar Installation Project 1</h3>
          <p>Description of the project.</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Portfolio;
