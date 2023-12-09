import "./App.css";

import React, { useEffect, useState } from "react";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151%27"
        );
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.log("Error found", error);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1>Pokemon List</h1>
        {pokemonList.map((pokemon, index) => (
          <div key={index}>{pokemon.name}</div>
        ))}
      </div>
    </React.Fragment>
  );
};
export default App;
