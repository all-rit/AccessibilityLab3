import React, { Component } from "react";
import { AppBar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { navigate } from "@reach/router";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
class ViewFix extends Component {
  constructor(props) {
    super(props);
    ViewFix.navOnClick = ViewFix.navOnClick.bind(this);
  }

  static navOnClick() {
    navigate("/ProblemFix");
  }

  render() {
    const appBarStyle = { flexGrow: "1" };
    return (
      <div>
        <AppBar position="static" color={"primary"} style={appBarStyle}>
          <Toolbar>
            <Grid justify="center" container spacing={10}>
              <Grid item>
                <Typography variant={"h4"} aria-label={"Title"} gutterBottom>
                  Test Fix
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <br />
        <Typography
          variant={"h6"}
          aria-label={"Subtitle Instructions"}
          gutterBottom
        >
          Is your page now more accessible?
        </Typography>
        <br />
        <Typography
          variant={"body1"}
          aria-label={"Body Instructions"}
          gutterBottom
        >
          If you have updated the buttons with the appropriate aria-labels then
          you have succeeded. They can now be effectively described by
          screenreaders.
        </Typography>
        <br />
        <Button
          variant={"text"}
          aria-label={window.location.state.aria1.replace(/<[^>]*>?/gm, "")}
        >
          Ok
        </Button>
        <Button
          variant={"text"}
          aria-label={window.location.state.aria2.replace(/<[^>]*>?/gm, "")}
        >
          Cancel
        </Button>
        <br />

        <Button
          variant={"contained"}
          color={"primary"}
          onClick={ViewFix.navOnClick}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default ViewFix;
