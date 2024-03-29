import React, { Component, useEffect, useState, useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';
import ModalError from '../src/components/ModalError';
import Loading from '../src/components/Loading';
import { PokemonProvider } from "./PokemonContext";
import { useMetrics } from "./PokemonContext";

 function PokemonList () {  
  //get context value
  const {pokemonNameCaught, setPokemonNameCaught} = useMetrics();

  //set initial state
  const [pokemonList, setPokemonList] = useState([]);
  const [generalError, setGeneralError] = useState(false);

  const getData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) =>
      setPokemonList(response.data.results)
    ).catch(error => {
        setGeneralError(true)
        setTimeout(()=>{ setGeneralError(false) }, 3000); // to close error modal automatically
    })
  }

  useEffect(()=>{
    getData();
  }, [])
  return (
    <div className="container pokemon-list-container">
      <div className="owned-total">
        Owned Total: {pokemonNameCaught.length}
      </div>
      {
        pokemonList.length === 0 ? (<Loading />) : pokemonList.map((pokemon, index) =>{
          return (
          <NavLink to={`/pokemon-detail/${index+1}`} className="pokemon-list">{pokemon.name}</NavLink>
          )
        }) 
      }
      {generalError && (
        <ModalError />
      )}

    </div>
  );
  
}

export default PokemonList;
