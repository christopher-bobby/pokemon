import React, { Component, useEffect, useState, useContext, Fragment } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import EmptyComponent from '../src/components/EmptyComponent';
import { PokemonProvider } from "./PokemonContext";
import { useMetrics } from "./PokemonContext";

function MyPokemonList (props) {  
  //get context value
  const {idCollection, setIdCollection} = useMetrics();
  const {nameCollection, setNameCollection} = useMetrics();
  const {pokemonNameCaught, setPokemonNameCaught} = useMetrics();

  const removePokemonList = (idx) => {
    nameCollection.splice(idx, 1);
    setNameCollection([...nameCollection])
  }

  return (
    <div className="container pokemon-list-container">
      <div className="owned-total">Owned Total: {pokemonNameCaught.length}</div>

      <div>
      {nameCollection.length === 0 ? <EmptyComponent wording="You don't have a Pokemon yet! Catch one!"/> : 
        nameCollection.map((name, index) => {
        return (<div className="pokemon-list">{name} 
          <img src="./remove-ic.png" className="remove-ic" onClick={()=> removePokemonList(index)}/> </div>)
      })}
      </div>
    </div>
  );
}

export default MyPokemonList;
