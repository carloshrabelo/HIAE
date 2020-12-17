import React, { useEffect, useState } from "react";

const api = "/api/search";

const Home = () => {
  const [result, setResult] = useState({});
  useEffect(() => {
    fetch(`${api}/tesco`)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(setResult);
  }, []);
  return (
    <>
      <h1>WIP</h1>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </>
  );
};

export default Home;
