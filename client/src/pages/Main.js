import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Header from "../components/main/Header";
import { actions as appActions } from "../reducers/AppReducer";
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
    actions: bindActionCreators({ ...appActions }, dispatch)
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
    const { user, state, plays } = this.props;
    const buttonStyle = {
      marginRight: "10px",
      marginLeft: "10px"
    };
    return (
      <Fragment>
        <div>
          <Header state={state} user={user} plays={plays} />
        </div>
        <div>
          <AppInstructions />
          <Button
            href="#"
            onClick={this.handleSubmit}
            component={Link}
            variant={"contained"}
            color={"primary"}
            style={buttonStyle}
          >
            Beginner Game
          </Button>
          <Button
            href="#"
            onClick={this.handleSubmitAdv}
            component={Link}
            variant={"contained"}
            color={"secondary"}
          >
            Advanced Game
          </Button>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
