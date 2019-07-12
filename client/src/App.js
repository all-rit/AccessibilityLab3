import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';
import './assets/stylesheets/main.scss';

import { actions } from './reducers/AppReducer';

import Main from './pages/Main';
import Game from './pages/Game';
import BlindGame from "./pages/BlindGame";
import BlindnessInstructions from "./pages/BlindnessInstructions"
const mapDispatchToProps = {
	login: actions.login
};

class App extends Component {
	componentDidMount() {
		this.props.login();
	}

	render() {
		return (
			<Router basepath={process.env.PUBLIC_URL} className="app">
				<Main path="/" />
				<Game path="/Lab3/game" />
				<BlindnessInstructions path={"/Lab3/BlindnessInstruction"}/>
				<BlindGame path={"/Lab3/blindGame"}/>
			</Router>
		);
	}
}

export default connect(null, mapDispatchToProps)(App);
