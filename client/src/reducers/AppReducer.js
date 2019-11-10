export const types = {
    LOGIN: '@accessibility-lab/audio-cue/app/login',
    UPDATE_USER: '@accessibility-lab/audio-cue/app/update_user',
};

export const initialState = {
    user: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_USER:
            return {
                ...state,
                user: action.user
            };

        default:
            return state;
    }
};

export const actions = {
    login: () => ({type: types.LOGIN}),
    updateUser: (user) => ({type: types.UPDATE_USER, user}),
};
