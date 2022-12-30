import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const useAxios = (params, executeOnMount = true) => {
 const [response, setResponse] = useState(null);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(false);

 const fetchData = async (params) => {
  setLoading(true);
  try {
   const res = await axios.request(params);
   console.log("res123", res);
   setResponse(res.data);
   setError(null);
  } catch (err) {
   setError(err);
  } finally {
   setLoading(false);
  }
 };

 useEffect(() => {
  if (executeOnMount) fetchData(params);
 }, []);

 return { response, error, loading, execute: fetchData };
};

export default useAxios;
