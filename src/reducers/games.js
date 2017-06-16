import { SET_GAMES, ADD_GAME } from '../action-types';

export default function games(state = [], action) {
	switch (action.type) {
		case SET_GAMES:
			return action.games;
		case ADD_GAME:
			let newGame = {game: action.game};
			return state.concat(newGame);
		default: return state;
	}
	
}