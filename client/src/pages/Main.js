import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Header from "../components/main/Header";
import {actions as appActions} from '../reducers/AppReducer';
import AppInstructions from '../components/main/AppInstructions'
import StickyFooter from "../components/helpers/StickyFooter";

const mapStateToProps = (state) => {
    return {
        // General
        user: state.app.user,

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
            plays
        } = this.props;
        const buttonStyle = {marginRight: "10px", marginLeft: "10px"};
        return (
            <Fragment>
                <div>
                    <Header state={state} user={user} plays={plays}/>
                </div>
                <div>
                    <AppInstructions/>
                    <Button href="/Lab3/game" component={Link} variant={"contained"} color={"primary"}
                            style={buttonStyle}>
                        Beginner Game</Button>
                    <Button href="/Lab3/AdvancedGame" component={Link} variant={"contained"} color={"secondary"}>
                        Advanced Game</Button>
                </div>
                <StickyFooter/>
            </Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
