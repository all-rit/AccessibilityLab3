import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar/AppBar";
import { navigate } from "@reach/router";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";

class AdvancedGameConclusion extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/");
  }
  render() {
    const appBarStyle = { flexGrow: "1" };
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
        <br />
        <Typography variant={"body1"}>
          You have successfully completed the activity! Click on the home button
          to return to the main page
        </Typography>
        <br />
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

export default AdvancedGameConclusion;
