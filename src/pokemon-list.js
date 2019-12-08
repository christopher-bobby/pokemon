import React, { Component, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import axios from 'axios';

 function PokemonList () {  
  const [pokemonList, setPokemonList] = useState([]);
  const getData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) =>
      //console.log("res", response.data);
      setPokemonList(response.data.results)
    )
  }
  useEffect(()=>{
    getData();
  }, [])
  return (
    <div className="pokemon-list">

      {
        pokemonList.length !== 0 && pokemonList.map((pokemon, index) =>{
          return (
            <div><NavLink to={`/pokemon-detail/${index+1}`}>{pokemon.name}</NavLink></div>
          )
        })
      }
    </div>
  );
  
}

export default PokemonList;
