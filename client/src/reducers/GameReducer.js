import update from 'immutability-helper';
import {GAME_IDLE} from '../constants';

export const types = {
	UPDATE_STATE: '@accessibility-lab/audio-cue/game/update_state'
};

export const initialState = {
	state: GAME_IDLE
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_STATE:
			return {
				...state,
				state: action.state
			};
		default:
			return state;
	}
};

export const actions = {
	updateState: (state) => ({ type: types.UPDATE_STATE, state }),
};
