import React, { useEffect } from "react";

// API KEY: f9530aea

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f9530aea";

const App = () => {
  const searcMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searcMovies("Spiderman");
  }, []);

  return (
    <>
      <h1>App</h1>
    </>
  );
};

export default App;
