import React, { useEffect, useState, createContext } from "react";	

//CREATE CONTEXT
const PokemonContext = React.createContext();

function PokemonProvider(props) {
	const [idCollection, setIdCollection] = useState([]);
	const [nameCollection, setNameCollection] = useState([]);
	const [pokemonNameCaught, setPokemonNameCaught] = useState([]);

  	return <PokemonContext.Provider value={{idCollection, setIdCollection, nameCollection, setNameCollection,
			  pokemonNameCaught, setPokemonNameCaught}} {...props} />;

}
//MUTATION
function useMetrics() {
  const context = React.useContext(PokemonContext);	
  return context;
}
export { PokemonProvider, useMetrics };
