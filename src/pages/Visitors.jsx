import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import "./Visitors.css"; // Import the CSS file for styling

const Visitors = () => {
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  // Sample data
  const getVisitor = async () => {
    setLoading(true);
    let { data, error } = await supabase
      .from("visitors")
      .select("*", { count: "exact" })
      .not("city", "is", null);
    if (error) {
      return;
    }
    setLoading(false);
    setTableData(data);
  };
  useEffect(() => {
    getVisitor();
  }, []);
  return (
    <div
      className="relative  bg-cover bg-center flex items-center justify-start flex-col mt-20 overflow-y-auto "
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1559919304-00f415bab202?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        height: `calc(100vh - 9.2vh)`,
      }}
    >
      <p className="text-lg font-bold mb-4 px-3 mt-2">
        Showing available record only
      </p>
      <table className="custom-table ">
        <thead>
          <tr>
            <th>Flag</th>
            <th>City</th>
            <th>Country</th>
            <th>Network</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <h1 className="text-center text-green-400 font-bold italic">
              Loading...
            </h1>
          )}
          {!loading && tableData?.length === 0 && (
            <h1 className="text-center  font-bold italic">No data found</h1>
          )}
          {}
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>
                <img
                  src={row.flag}
                  alt={`${row.country} flag`}
                  className="flag-img"
                />
              </td>
              <td>{row.city}</td>
              <td>{row.country}</td>
              <td>{row.network}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Visitors;
