const Services = () => (
  //https://media.istockphoto.com/id/2166121823/photo/solar-power-plant-in-green-grass.webp?a=1&b=1&s=612x612&w=0&k=20&c=EtyVq65LxC3WYr4J0J7cPXubJjJLOa8RmpU6OEqjNR4=
  <section
    className="h-screen bg-cover bg-center text-center flex flex-col justify-center items-center"
    style={{
      backgroundImage:
        "url(https://media.istockphoto.com/id/2166121823/photo/solar-power-plant-in-green-grass.webp?a=1&b=1&s=612x612&w=0&k=20&c=EtyVq65LxC3WYr4J0J7cPXubJjJLOa8RmpU6OEqjNR4=)",
    }}
  >
    <h2 className="text-4xl sm:text-6xl text-center font-bold my-6 ">
      Our Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold">Solar Installation</h3>
        <p className="mt-4">
          We provide high-quality solar panel installations for homes and
          businesses.
        </p>
      </div>
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold">Poll and DP Installation</h3>
        <p className="mt-4">
          Efficient and reliable pole, DP installation services for your
          electrical systems.
        </p>
      </div>
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold">Transformer Maintenance</h3>
        <p className="mt-4">
          Maintenance and repair services for transformers to ensure smooth
          operations.
        </p>
      </div>
    </div>
  </section>
);

export default Services;
