import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';
import './assets/stylesheets/main.scss';

import { actions } from './reducers/AppReducer';

import Main from './pages/Main';
import Game from './pages/Game';
import CssBaseline from '@material-ui/core/CssBaseline'
const mapDispatchToProps = {
	login: actions.login
};

class App extends Component {
	componentDidMount() {
		this.props.login();
	}

	render() {
		return (
			<Router className="app">
				<Main path="/" />
				<Game path="/game" />
			</Router>
		);
	}
}

export default connect(null, mapDispatchToProps)(App);
