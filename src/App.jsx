import React from 'react';
import useApiFetch from './Reusablecomponent';

const App = () => {
  const {  data,loading, error } = useApiFetch("https://fakestoreapi.com/products");

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data?.map(data => <p>{data.id}</p>)}
    </div>
  );
};

export default App;
