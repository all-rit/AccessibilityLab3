import {
    GAME_IDLE,
} from '../constants';

export const types = {
    UPDATE_STATE: '@accessibility-lab/audio-cue/game/update_state',
    RESET: '@accessibility-lab/audio-cue/game/reset',
    TICK: '@accessibility-lab/audio-cue/game/tick',
};

export const initialState = {
    state: GAME_IDLE,
    plays: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_STATE:
            return {
                ...state,
                state: action.state
            };

        case types.RESET:
            return {
                ...initialState,
                plays: state.plays + 1,
                results: state.results,
                soundEnabled: state.soundEnabled
            };

        case types.TICK:
            return {
                ...state,
                time: state.time - 1
            };

        default:
            return state;
    }
};

export const actions = {
    updateState: (state) => ({type: types.UPDATE_STATE, state}),
    reset: () => ({type: types.RESET}),
    tick: () => ({type: types.TICK}),

};
