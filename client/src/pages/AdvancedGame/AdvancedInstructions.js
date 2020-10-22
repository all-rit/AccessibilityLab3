import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { AppBar, Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { navigate } from "@reach/router";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
import {GAME_PLAYING} from "../../constants";

class AdvancedInstructions extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/ProblemDiscovery");
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(GAME_PLAYING);
  }
  render() {
    const paperStyle = {
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "20px"
    };
    return (
      <div>
        <AppBar position="static" className = "appBar">
          <Toolbar>
            <Grid justify="center" container spacing={10}>
              <Grid item>
                <Typography
                  aria-label={"Advanced Instructions"}
                  variant={"h4"}
                  gutterBottom
                >
                  Instructions for Advanced Activity
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Paper style={paperStyle}>
          <Typography
            aria-label={"Instructions for Advanced Activity"}
            variant={"h6"}
            gutterBottom
          >
            You will have to learn about accessibility by performing a task
            which will involve finding the accessibility issues in a page.
            Please click next to proceed.
          </Typography>
        </Paper>
        <Button
          href="#"
          onClick={this.handleSubmit}
          variant={"contained"}
          className = "btn btn-second btn-xl text-uppercase js-scroll-trigger leftButton"
        >
          Next
        </Button>
      </div>
    );
  }
}

export default AdvancedInstructions;
