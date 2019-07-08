import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router'
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {changeColors, selectGameOption, changeGameState, changeUser} from './controllers/reducers';

let browserHistory = Router.browserHistory;

const rootReducer = combineReducers({changeColors, selectGameOption, changeGameState, changeUser});

const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} basename="Lab3">
      <Switch>
        <Route exact path="/" component={App}/>
        <Route component={App} />
      </Switch>
    </Router>
  </Provider>),
    document.getElementById('root')
);
