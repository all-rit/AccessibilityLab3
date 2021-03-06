import React, {Component} from "react";
import About from "./components/body/about";
import Game from "./components/body/game";
import Reading from "./components/body/reading";
import Video from "./components/body/video";
import Quiz from "./components/body/quiz";
import Change from "./components/footer/change";
import Header from "./components/header/header"
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./css/agency.min.css";
import "./css/style.css";
import {actions as gameActions, actions as appActions, actions as repairActions} from './reducers/AppReducer';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

const section = {
  0: <About/>,
  1: <Reading/>,
  2: <Game/>,
  3: <Video/>,
  4: <Quiz/>
};

const mapStateToProps = (state) => {
  return {
    // General
    state: state
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...appActions, ...gameActions,...repairActions }, dispatch)
});

class App extends Component {
  state = {count: 0};

  componentWillMount() {
    const {actions} = this.props;
    let x = window.location.href;
    x = x.split('/').pop();
    switch (x) {
      case "about":
        actions.setBody(0);
        break;
      case "reading":
        actions.setBody(1);
        break;
      case "game":
        actions.setBody(2);
        break;
      case "video":
        actions.setBody(3);
        break;
      case "quiz":
        actions.setBody(4);
        break;
      default:
    }
  }


  render() {
    const {state} = this.props;
    console.log(state);
    return (

        <div>
          <Header />
          <div className = "appBody">{section[state.app.body]}</div>
          <div>
            <Change />
          </div>
        </div>
    );
  }
}
export default connect(
    mapStateToProps, mapDispatchToProps)(App);
