import React, {Component} from 'react';

import LoginButton from './LoginButton';
import Signout from "./Signout";

class WelcomeMessage extends Component {
    render() {
        const {user, loginEnabled} = this.props;
        if (user === null || user.firstname === null) {
            return <LoginButton enabled={loginEnabled}/>;
        }

        return <Signout user={user.firstname}/>;


    }
}

export default WelcomeMessage;
