import React, { Component, useEffect, useState, useContext, Fragment } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { PokemonContext } from "./PokemonContext";


function MyPokemonList (props) {  
  const {idCollection, setIdCollection} = useContext(PokemonContext);
  const {nameCollection, setNameCollection} = useContext(PokemonContext);

  const removePokemonList = (idx) => {
    nameCollection.splice(idx, 1);
    setNameCollection([...nameCollection])
    console.log("masuk bangke", idx, nameCollection)
  }


  useEffect(() => {
  }, []);
  return (
    <div className="pokemon-list-container">
      My Pokemon List
        <h2>
          {nameCollection.map((name, index) => {
            return (<div className="pokemon-list">{name} 
              <img src="./remove-ic.png" className="remove-ic" onClick={()=> removePokemonList(index)}/> </div>)
          })}
        </h2>
       {/* <h2>
          {idCollection.map((id, index) => {
            return (<Fragment>{id}</Fragment>)
          })}
        </h2> */}
      
    </div>
  );
}

export default MyPokemonList;
