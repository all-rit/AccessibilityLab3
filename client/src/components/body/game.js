import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from '@reach/router';
import './../../assets/stylesheets/main.scss';

import {actions as appActions} from './../../reducers/AppReducer';
import { actions as gameActions } from "../../reducers/GameReducer";

import Main from './../../pages/Main';
import FullGame from './../../pages/BeginnerGame/Game';
import InaccessibleGame from './../../pages/BeginnerGame/InaccessibleGame';
import GameInstructions from './../../pages/BeginnerGame/GameInstructions';
import AccessibleInstructions from './../../pages/BeginnerGame/AccessibleInstructions';
import AccessibleGame from './../../pages/BeginnerGame/AccessibleGame';
import CodeChange from './../../pages/BeginnerGame/CodeChange';
import HelloWorld from './../../pages/BeginnerGame/HelloWorld';
import AdvancedGame from './../../pages/AdvancedGame/AdvancedGame';
import AdvancedInstructions from './../../pages/AdvancedGame/AdvancedInstructions';
import ProblemDiscovery from './../../pages/AdvancedGame/ProblemDiscovery';
import ProblemExplanation from './../../pages/AdvancedGame/ProblemExplanation';
import ProblemFix from './../../pages/AdvancedGame/ProblemFix';
import AccessibleUserUpdatedGame from './../../pages/BeginnerGame/AccessibleUserUpdatedGame';
import BeginnerGameConclusion from './../../pages/BeginnerGame/BeginnerGameConclusion';
import AdvancedGameConclusion from './../../pages/AdvancedGame/AdvancedGameConclusion';
import ViewFix from './../../pages/AdvancedGame/ViewFix';
import ProblemDiscoveryFixedExperience from './../../pages/AdvancedGame/ProblemDiscoveryFixedExperience';
import './../../vendor/bootstrap/css/bootstrap.min.css';
import './../../css/agency.min.css';
import './../../css/style.css';
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => ({
  state: state,
});
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...appActions, ...gameActions }, dispatch),
    login: appActions.login
  };
};


class Game extends Component {
  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    const {user, actions} = this.props;
    if (user !== undefined) {
      console.log(user);
    }
    this.props.login();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const {actions} = this.props;
    return (
      <div class="container bottomSpace" >
        <section class="page-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <br />
                <br />
                <h2 class="section-heading text-uppercase">
                  Screenreader Lab: Game
                </h2>
              </div>
            </div>
          </div>
        </section>
        <Router basepath={process.env.PUBLIC_URL} className="app">
          <Main path="/" />
          <FullGame path="/game" actions={actions}/>
          <GameInstructions path={'/GameInstructions'} actions={actions}/>
          <InaccessibleGame path={'/InAccessibleGame'} actions={actions}/>
          <AccessibleInstructions path={'/AccessibleInstructions'} actions={actions}/>
          <AccessibleGame path={'/AccessibleGame'} actions={actions}/>
          <CodeChange path={'/CodeChange'} actions={actions}/>
          <HelloWorld path={'/HelloWorld'} actions={actions}/>
          <AdvancedGame path={'/AdvancedGame'} actions={actions}/>
          <AdvancedInstructions path={'/AdvancedInstructions'} actions={actions}/>
          <ProblemDiscovery path={'/ProblemDiscovery'} actions={actions}/>
          <ProblemExplanation path={'/ProblemExplanation'} actions={actions}/>
          <ProblemDiscoveryFixedExperience
            path={'/ProblemDiscoveryFixedExperience'}
            actions={actions}
          />
          <ProblemFix path={'/ProblemFix'} actions={actions}/>
          <AccessibleUserUpdatedGame path={'/AccessibleUserUpdatedGame'} actions={actions}/>
          <BeginnerGameConclusion path={'/BeginnerGameConclusion'} actions={actions}/>
          <AdvancedGameConclusion path={'/AdvancedGameConclusion'} actions={actions}/>
          <ViewFix path={'/ViewFix'} actions={actions}/>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
