import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from '@reach/router';
import './assets/stylesheets/main.scss';

import { actions } from './reducers/AppReducer';

import Main from './pages/Main';
import Game from './pages/Game';
import InaccessibleGame from "./pages/InaccessibleGame";
import BlindnessInstructions from "./pages/BlindnessInstructions";
import AccessibleInstructions from "./pages/AccessibleInstructions";
import AccessibleGame from "./pages/AccessibleGame";
import CodeChange from "./pages/CodeChange";
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
				<Game path="/game" />
				<BlindnessInstructions path={"/BlindnessInstructions"}/>
				<InaccessibleGame path={"/InAccessibleGame"}/>
				<AccessibleInstructions path={"/AccessibleInstructions"} />
				<AccessibleGame path={"/AccessibleGame"}/>
				<CodeChange path={"/CodeChange"}/>
			</Router>
		);
	}
}

export default connect(null, mapDispatchToProps)(App);
