import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Route, Redirect, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import PokemonList from './pokemon-list';
import PokemonDetail from './pokemon-detail';
import MyPokemonList from './my-pokemon-list';
import './index.css';



function AppRouter() {

	return (
		<Router>
			<div className="container">
				<div className="navbar">
					<ul>
						<li><NavLink to="/pokemon-list">Pokemon List</NavLink></li>
						<li><NavLink to="/my-pokemon-list">My Pokemon List</NavLink></li>
					</ul>
				</div>
					<Switch>
						<Route path="/pokemon-list" component={PokemonList} />
						<Route path="/pokemon-detail/:id" component={PokemonDetail} />
						<Route path="/my-pokemon-list" component={MyPokemonList} />
					</Switch>
			</div>
			<Redirect exact from="/" to="/pokemon-list" />
		</Router>
	)
}


ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
