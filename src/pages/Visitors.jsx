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
      className="relative  bg-cover bg-center flex items-center justify-start flex-col mt-20 "
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/2158915139/photo/the-grid-of-the-solar-panel-rural-landscape-in-the-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=0GxiifyH7wbQhdDIJjRWyHQBbTh5zsjXyaelVP5tfZU=")',
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
