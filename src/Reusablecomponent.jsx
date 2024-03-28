import { useState, useEffect } from 'react';

const Reusablecomponent = (url, method = "GET", initialState = null) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { method });
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method]); // Re-run effect on URL or method change

  return { data, loading, error };
};

export default Reusablecomponent;