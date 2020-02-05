import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

class Header extends Component {
  render() {
    const buttonStyle = { marginTop: "5px" };
    return (
      <Toolbar>
        <Grid justify="space-between" container spacing={10}>
          <Grid item>
            <Button
              href={"/Lab3/HelloWorld"}
              variant={"contained"}
              style={buttonStyle}
            >
              Screenreader Tutorial
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    );
  }
}

export default Header;
