import React, { useEffect, useState } from "react";

export const useFetchData = ({ requestFunction, dependecy =[] }) => {
  const [data, setData] = useState();
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      try {
        const res = await requestFunction();
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoding(false);
      }
    };
    fetchData();
  }, [...dependecy]);

  return { data, loading, error };
};
