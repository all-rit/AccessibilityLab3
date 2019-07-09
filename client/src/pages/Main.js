import React, { Component } from 'react';
import { Link } from '@reach/router';

class Main extends Component {
	render() {
		return (
			<div>
				<Link to="/game">Start Game!</Link>
			</div>
		);
	}
}

export default Main;
