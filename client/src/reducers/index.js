import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import GameReducer from './GameReducer';

export default combineReducers({
    app: AppReducer,
    game: GameReducer,
});
