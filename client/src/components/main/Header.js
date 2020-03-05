import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

class Header extends Component {
  render() {
    const buttonStyle = { marginTop: "5px", margin:"auto"};
    return (
      <Toolbar>
            <Button
              href={"/Lab3/HelloWorld"}
              variant={"contained"}
              style={buttonStyle}
            >
              Screenreader Tutorial
            </Button>

      </Toolbar>
    );
  }
}

export default Header;
