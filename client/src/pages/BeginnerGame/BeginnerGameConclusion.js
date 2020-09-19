import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import {GAME_IDLE, GAME_PLAYING} from "../../constants";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
class BeginnerGameConclusion extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/");
  }
    componentDidMount() {
        const { data, actions } = this.props;
        actions.updateState(GAME_IDLE);
    }
  render() {
      const appBarStyle = { flexGrow: "1" };
    const conclusionTypographyStyle = { marginTop: "20px" };
    return (
      <div>
        <AppBar position="static" color={"primary"} style={appBarStyle}>
          <Toolbar>
            <Grid justify="center" container spacing={10}>
              <Grid item>
                <Typography variant={"h4"}>Conclusion</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Typography
          variant={"h6"}
          paragraph={true}
          style={conclusionTypographyStyle}
        >
          You have successfully completed the activity! Click on the home button
          to return to the main page
        </Typography>
        <Button
          href="#"
          onClick={this.handleSubmit}
          variant={"contained"}
          color={"primary"}
        >
          Home
        </Button>
      </div>
    );
  }
}

export default BeginnerGameConclusion;
