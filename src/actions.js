import { SET_GAMES, ADD_GAME } from './action-types';

export function setGames(games) {
	return {
		type: SET_GAMES,
		games
	}
}

// export function addGame(game) {
// 	return {
// 		type: ADD_GAME,
// 		game
// 	}
// }

export function fetchGames() {
	return dispatch => {
		
		fetch('/api/games')
		.then(res => res.json())
		.then(data => {
			dispatch(setGames(data.games));
			console.log(SET_GAMES);
		})
		.catch(err => console.log(err));
	}
}

export function saveGame(game) {
	return dispatch => {
		console.log('@saveGame');
		fetch('/api/games', {
			method: 'post',
			header: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(game)
		})
		.then(res => res.json())
		.then(data => {
			
		})
		.catch(err => console.log(err));
	}
}