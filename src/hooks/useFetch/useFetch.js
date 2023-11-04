import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint, responseKey) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_ROOT = "https://www.themealdb.com/api/json/v1/1/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_ROOT}${endpoint}`);
        setData(response.data[responseKey]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, responseKey]);

  return { error, loading, data };
};

export default useFetch;
