import { SET_GAMES } from './action-types';

export function setGames(games) {
	return {
		type: SET_GAMES,
		games
	}
}

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