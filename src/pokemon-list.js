import React, { Component, useEffect, useState, useContext } from 'react';
import { Link, NavLink } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { PokemonContext } from "./PokemonContext";

 function PokemonList () {  
  const {ownedTotal, setOwnedTotal} = useContext(PokemonContext);
  const {pokemonNameCaught, setPokemonNameCaught} = useContext(PokemonContext);
  const [pokemonList, setPokemonList] = useState([]);

  const getData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) =>
      setPokemonList(response.data.results)
    )
  }
  useEffect(()=>{
    getData();
  }, [])
  return (
    <div className="container pokemon-list-container">
      <div className="owned-total">
        Owned Total: {ownedTotal}
        {console.log("caught", pokemonNameCaught)}
      </div>
      {
        pokemonList.length !== 0 && pokemonList.map((pokemon, index) =>{
          return (
          <NavLink to={`/pokemon-detail/${index+1}`} className="pokemon-list">{pokemon.name}</NavLink>
          )
        })
      }
    </div>
  );
  
}

export default PokemonList;
