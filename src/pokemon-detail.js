import React, { Component, useEffect, useState, Fragment, useContext } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Modal from '../src/components/Modal';
import { PokemonContext } from "./PokemonContext";

 function PokemonDetail ({props, match}) { 

  const {idCollection, setIdCollection} = useContext(PokemonContext);
  const {nameCollection, setNameCollection} = useContext(PokemonContext);
  const id = match.params.id;
  const [name, setName] = useState();
  const [frontImage, setFrontImage] = useState();
  const [backImage, setBackImage] = useState();
  const [types, setTypes] = useState([]);
  const [moves, setMoves] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [mathRandom, setMathRandom] = useState();
  let bodyDOM = document.getElementsByTagName("body")[0];

 // const [counter, setCounter] = useState(store.getState());
  const getData = (id) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => {
        if(response.data) {
          const data = response.data
          setName(data.name)
          setFrontImage(data.sprites.front_default)
          setBackImage(data.sprites.back_default)
          setTypes(data.types)
          setMoves(data.moves)
        }
      }
    )
  }
  const add = () =>{
    setShowModal(true);
    if(Math.random() > 0.5) {
      console.log("masuk", Math.random());
      setIdCollection([...idCollection, id])
    }
  }
  const submitPokemonName = (e) => {
    let pokemonName = document.getElementById("pokemon-name").value;
    if(e.keyCode === 13) {
      setNameCollection([...nameCollection, pokemonName])
      setShowModal(false)
    }
  }
  useEffect(()=>{
    getData(id);
    showModal ? bodyDOM.classList = "scroll-locked" : bodyDOM.classList = ""

  }, [showModal])

  return (
    <div className="container pokemon-detail">

        <Link to="/pokemon-list" className="back-link"> <img src="/chevron-right.jpg" alt="back" className="chevron-right" />Back to Pokemon List</Link>
      
        <h3>{name}</h3>
        <img src={frontImage}
            className="pokemon-img"
            onMouseOver={e => (e.currentTarget.src = backImage)} 
            onMouseOut={e => (e.currentTarget.src = frontImage)}
            alt={name}
        />
        <div className="types">
          Type: {types.map((type, index) => {
            return (<Fragment>{type.type.name}{index < types.length - 1  ? ', ' : ''}</Fragment>)
          })}
        </div>
        <div className="moves">
          Move: {moves.map((move, index)=> {
            return (<Fragment>{move.move.name}{index < moves.length - 1  ? ', ' : ''}</Fragment>)
          })}
        </div>
        <div className="catch-me">
          <span className="label animated fadeInDown">Catch me</span>
          <img src="/pokemon-ball.png" className="btn-catch" onClick={() => add()} />
        </div>
        {/*<button onClick={() => add()}>masuk</button>*/}

      {showModal ? Math.random() > 0.5 ? 

        (<Modal 
          status="Success"
          wording="You've caught it. Congrats!"
          closeModal={()=> setShowModal(false) }
          onKeyUp={(e) => submitPokemonName(e)}
        />)
         :   
         (<Modal 
          status="Failed"
          wording="Fret not! Keep catching!"
          closeModal={()=> setShowModal(false) }

        />) : null
      }


    </div>
 
  );

}


export default PokemonDetail;
