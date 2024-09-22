import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../config/supabase";

const hasVisited = "hasVisited";
const Home = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const getVisitor = async () => {
    setLoading(true);
    let { error, count } = await supabase
      .from("visitors")
      .select("*", { count: "exact" });
    if (error) {
      return;
    }
    setCount(count);
    setLoading(false);
  };
  const fetchGeolocation = async () => {
    try {
      const response = await fetch(
        "https://api.ipgeolocation.io/ipgeo?apiKey=18911211ce24446184b030799e9feced"
      );
      const data = await response.json();
      addVisitor({
        city: data.city,
        flag: data.country_flag,
        country: data.country_name,
        network: data.organization,
      });
      console.log(data);
    } catch (error) {
      console.error("Error fetching geolocation:", error);
      addVisitor({});
    }
  };
  const addVisitor = async (parameObj) => {
    const { error } = await supabase
      .from("visitors")
      .insert([parameObj])
      .select("*");
    if (error) {
      return;
    }
    getVisitor();
  };
  useEffect(() => {
    if (!localStorage.getItem(hasVisited)) {
      localStorage.setItem(hasVisited, true);
      fetchGeolocation();
    } else getVisitor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {}, []);

  return (
    <section
      className="h-screen bg-cover bg-center text-center flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1671808063740-2511d6c4cc7f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <h1 className="text-3xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 italic">
        S B Electrical Solutions
      </h1>
      <p className="mt-4 text-2xl text-white bg-black p-2 rounded-lg">
        Providing the best solar solutions, DP installation, and transformer
        maintenance.
      </p>
      <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs mx-auto mt-12">
        <h2 className="text-2xl font-bold text-gray-800">Visitors Count</h2>
        {loading ? (
          <h2 className="text-xl font-bold text-gray-800">Loading...</h2>
        ) : (
          <>
            <p className="text-4xl font-extrabold text-blue-600 mt-4">
              {count}
            </p>
          </>
        )}
        <p className="text-gray-600 mt-2">
          Thank you for visiting our website!
        </p>
      </div>
      <Link
        to="/contact"
        className="mt-8 bg-blue-600 text-white text-xl font-bold py-2 px-5 rounded-lg hover:bg-blue-500 transition-all"
      >
        Contact Us
      </Link>
    </section>
  );
};

export default Home;
