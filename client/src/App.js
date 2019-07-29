import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from '@reach/router';
import './assets/stylesheets/main.scss';

import {actions} from './reducers/AppReducer';

import Main from './pages/Main';
import Game from './pages/BeginnerGame/Game';
import InaccessibleGame from "./pages/BeginnerGame/InaccessibleGame";
import GameInstructions from "./pages/BeginnerGame/GameInstructions";
import AccessibleInstructions from "./pages/BeginnerGame/AccessibleInstructions";
import AccessibleGame from "./pages/BeginnerGame/AccessibleGame";
import CodeChange from "./pages/BeginnerGame/CodeChange";
import HelloWorld from "./pages/BeginnerGame/HelloWorld";
import AdvancedGame from "./pages/AdvancedGame/AdvancedGame";
import AdvancedInstructions from "./pages/AdvancedGame/AdvancedInstructions";
import ProblemDiscovery from "./pages/AdvancedGame/ProblemDiscovery";
import ProblemExplanation from "./pages/AdvancedGame/ProblemExplanation";
import ProblemFix from "./pages/AdvancedGame/ProblemFix";
import AccessibleUserUpdatedGame from "./pages/BeginnerGame/AccessibleUserUpdatedGame";
import BeginnerGameConclusion from "./pages/BeginnerGame/BeginnerGameConclusion";

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
                <Main path="/"/>
                <Game path="/game"/>
                <GameInstructions path={"/GameInstructions"}/>
                <InaccessibleGame path={"/InAccessibleGame"}/>
                <AccessibleInstructions path={"/AccessibleInstructions"}/>
                <AccessibleGame path={"/AccessibleGame"}/>
                <CodeChange path={"/CodeChange"}/>
                <HelloWorld path={"/HelloWorld"}/>
                <AdvancedGame path={"/AdvancedGame"}/>
                <AdvancedInstructions path={"/AdvancedInstructions"}/>
                <ProblemDiscovery path={"/ProblemDiscovery"}/>
                <ProblemExplanation path={"/ProblemExplanation"}/>
                <ProblemFix path={"/ProblemFix"}/>
                <AccessibleUserUpdatedGame path={"/AccessibleUserUpdatedGame"}/>
                <BeginnerGameConclusion path={"/BeginnerGameConclusion"}/>
            </Router>
        );
    }
}

export default connect(null, mapDispatchToProps)(App);
