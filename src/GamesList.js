import React from 'react';
import './App.css';

export default function GamesList({games}){
	const emptyMessage = (
		<p>There are no games yet in your collection.</p>
	);

	const gamesList = (
		<ul>
		{
			games.map( game => displayGame(game))
		}
		</ul>
	);

	function displayGame(game) {
		return (
			<li key={game._id} id={game._id}>{game.title}</li>
		)
	}

	return (

	    <div>
	      {games.length === 0 ? emptyMessage : gamesList }
	    </div>
	    
	);

}
