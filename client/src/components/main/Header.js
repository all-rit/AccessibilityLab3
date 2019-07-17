import React, { Component } from 'react';

import { GAME_IDLE} from '../../constants';

import WelcomeMessage from './WelcomeMessage';
import Button from "@material-ui/core/Button";

class Header extends Component {
	render() {
		const { state, user, plays} = this.props;
		const loginEnabled = !(plays > 0 || (plays === 0 && state !== GAME_IDLE));

		return (
			<header className="header">
				<div className={"header_column text-left"}>
					<Button href={"/Lab3/HelloWorld"}>Screenreader Tutorial</Button>
				</div>
				<div className="header__column text-right">
					<WelcomeMessage user={user} loginEnabled={loginEnabled} />
				</div>
			</header>
		);
	}
}

export default Header;
