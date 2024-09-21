import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="flex items-center justify-center h-screen">
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl">
        Sorry, the page you&apos;re looking for cannot be found.
      </p>
      <Link to="/" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg">
        Go Back Home
      </Link>
    </div>
  </section>
);

export default NotFound;
