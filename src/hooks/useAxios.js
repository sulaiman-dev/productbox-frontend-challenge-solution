import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const useAxios = (params) => {
 const [response, setResponse] = useState(null);
 const [error, setError] = useState(null);
 const [loading, setLoading] = useState(false);

 const handleRequest = async (params) => {
  setLoading(true);
  try {
   const res = await axios.request(params);
   setResponse(res.data);
   setError(null);
  } catch (err) {
   setError(err);
  } finally {
   setLoading(false);
  }
 };

 useEffect(() => {
  handleRequest(params);
 }, []);

 return { response, error, loading };
};

export default useAxios;
