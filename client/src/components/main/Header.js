import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import {navigate} from "@reach/router";

class Header extends Component {
    handleSubmit(){
        navigate(process.env.PUBLIC_URL + "/HelloWorld");

    }
  render() {
    const buttonStyle = { marginTop: "5px", margin:"auto"};
    return (
      <Toolbar>
            <Button
              onClick={this.handleSubmit}
              variant={"contained"}
              style={buttonStyle}
              href="#"
            >
              Screenreader Tutorial
            </Button>

      </Toolbar>
    );
  }
}

export default Header;
