import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";

class AdvancedGame extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/AdvancedInstructions");
  }
  render() {
    const appBarStyle = { flexGrow: "1" };
    return (
      <div>
        <AppBar position="static" color={"primary"} style={appBarStyle}>
          <Toolbar>
            <Grid justify="center" container spacing={10}>
              <Grid item>
                <Typography
                  aria-label={"Advanced Game"}
                  variant={"h4"}
                  gutterBottom
                >
                  Advanced Game
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <br />
        <Typography
          aria-label={"instructions"}
          variant={"h6"}
          paragraph={true}
          gutterBottom
        >
          The learning objective of this lab is for students to learn and apply
          the Understandable accessibility principle. The game consists of
          performing some tasks. Click Start game to begin!
        </Typography>
        <br />
        <Button
          href="#"
          onClick={this.handleSubmit}
          variant={"contained"}
          color={"primary"}
          aria-label={"Start Game"}
        >
          Start Game
        </Button>
      </div>
    );
  }
}

export default AdvancedGame;
