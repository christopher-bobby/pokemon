import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Route, Redirect, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import PokemonList from './pokemon-list';
import PokemonDetail from './pokemon-detail';
import MyPokemonList from './my-pokemon-list';
import { PokemonContext }  from './PokemonContext';
import './index.css';



function AppRouter() {
	const [idCollection, setIdCollection] = useState([]);
	const [nameCollection, setNameCollection] = useState([]);
	return (
		<Router>
			<div className="container">
				<div className="navbar">
					<img src="/pokemon_logo.png" className="navbar-logo" alt="Pokemon ball" />
					<ul>
						<li><NavLink to="/pokemon-list">Pokemon List</NavLink></li>
						<li><NavLink to="/my-pokemon-list">My Pokemon List</NavLink></li>
					</ul>
				</div>
				<PokemonContext.Provider value={{idCollection, setIdCollection, nameCollection, setNameCollection}} >
					<Switch>
						<Route path="/pokemon-list" component={PokemonList} />
						<Route path="/pokemon-detail/:id" component={PokemonDetail} />
						<Route path="/my-pokemon-list" component={MyPokemonList} />
					</Switch>
				</PokemonContext.Provider>
			</div>
			<Redirect exact from="/" to="/pokemon-list" />
		</Router>
	)
}


ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
