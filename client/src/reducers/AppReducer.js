export const types = {
  LOGIN: "@accessibility-lab/app/login",
  LOGOUT: "@accessibility-lab/app/logout",
  UPDATE_USER: "@accessibility-lab/app/update_user",
  SET_BODY: '@accessibility-lab/app/set_body'
};

export const initialState = {
  user: null,
  body: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER:
      return {
        ...state,
        user: action.user
      };
    case types.SET_BODY:
      return {
        ...state,
        body: action.body
      };
    case types.LOGOUT:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export const actions = {
  login: () => ({ type: types.LOGIN }),
  logout: () => ({ type: types.LOGOUT }),
  setBody: (body) => ({type: types.SET_BODY, body}),
  updateUser: user => ({ type: types.UPDATE_USER, user })
};
