const Contact = () => (
  <div
    className="relative min-h-screen bg-cover bg-center flex items-center justify-center mt-8"
    style={{
      backgroundImage:
        'url("https://media.istockphoto.com/id/2158915139/photo/the-grid-of-the-solar-panel-rural-landscape-in-the-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=0GxiifyH7wbQhdDIJjRWyHQBbTh5zsjXyaelVP5tfZU=")',
    }}
  >
    <div className="bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-md max-w-lg w-full text-white text-center">
      <h1 className="text-4xl font-bold mb-4 gradient-text">Contact Us</h1>
      <p className="text-lg font-light mb-4">
        For all your electrical solutions, feel free to contact us.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">S B Electrical Solutions</h2>
        <p className="text-md text-xl">Contractor Name: </p>
        <span className="font-bolder text-2xl">Er Mohammed Yusuf</span>
        <p className=" text-xl">
          Phone:{" "}
          <a
            href="tel:+1234567890"
            className="text-blue-400 hover:underline text-2xl"
          >
            +919960168385
          </a>
        </p>
        <p className="text-md text-xl">
          Experience:{" "}
          <span className="font-bold text-2xl">1+ years of experience</span>
        </p>
        <p className="text-md text-xl">
          Installation Expertise: Solar, DP & Poles Installation
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold mb-2">Our Work</h3>
        <p className="text-md">
          We have successfully completed:
          <ul className="list-disc list-inside text-left mx-auto mt-2 text-xl">
            <li>DP Installation Projects</li>
            <li>Polls Erection</li>
            <li>Transformer Maintenance</li>
          </ul>
        </p>
      </div>

      <p className=" text-gray-400 text-xl">
        Feel free to reach out for inquiries or quotes.
      </p>
    </div>
  </div>
);

export default Contact;
