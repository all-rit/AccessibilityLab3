import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Header from "../components/main/Header";
import {actions as appActions} from '../reducers/AppReducer';
import AppInstructions from '../components/main/AppInstructions'
const mapStateToProps = (state) => {
    return {
        // General
        user: state.app.user,
        popupMessage: state.app.popupMessage,
        instructionsVisible: state.app.instructionsVisible,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({...appActions}, dispatch)
    };
};


class Main extends Component {

    render() {
        const {
            user,
            state,
            plays} = this.props;

        return (
            <Fragment>
                <div>
                    <Header state={state} user={user} plays={plays}/>
                </div>
                <div>
                    <h1>Accessibility Learning Lab 3</h1>
                </div>
                <div>
                    <AppInstructions/>
                    <Button href="/Lab3/game" component={Link}>Start Game!</Button>
                </div>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
