import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Header from "../components/main/Header";
import { actions as appActions } from "../reducers/AppReducer";
import { actions as gameActions } from "../reducers/GameReducer";
import AppInstructions from "../components/main/AppInstructions";
import { navigate } from "@reach/router";
import "./../vendor/bootstrap/css/bootstrap.min.css";
import "./../css/agency.min.css";
import "./../css/style.css";

const mapStateToProps = state => {
  return {
    // General
    user: state.app.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...appActions, ...gameActions }, dispatch)
  };
};

class Main extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/game");
  }
  handleSubmitAdv() {
    navigate(process.env.PUBLIC_URL + "/AdvancedGame");
  }
  render() {
    const { user, state, plays, actions } = this.props;
    const buttonStyleLeft = {
      marginTop:10,
      marginRight:2
    };
    const buttonStyleRight = {
      marginTop:10,
      marginLeft:2
    };
    return (
      <Fragment>

        <div class="center-div">
          <AppInstructions />
          <Button
            href="#"
            onClick={this.handleSubmit}
            component={Link}
            variant={"contained"}
            color={"primary"}
            style={buttonStyleLeft}
          >
            Beginner Game
          </Button>
          <Button
            href="#"
            onClick={this.handleSubmitAdv}
            component={Link}
            variant={"contained"}
            color={"secondary"}
            style={buttonStyleRight}
          >
            Advanced Game
          </Button>
          <Header state={state} user={user} plays={plays} />
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
