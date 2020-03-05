import React, { Component } from "react";
import { Button, Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import { navigate } from "@reach/router";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";

class GameInstructions extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/InAccessibleGame");
  }
  render() {
    const appBarStyle = { flexGrow: "1" };
    const paperStyle = {
      marginLeft: "10px",
      marginRight: "10px",
      marginTop: "20px"
    };
    return (
      <div>
        <AppBar position="static" color={"primary"} style={appBarStyle}>
          <Toolbar>
            <Typography variant={"h4"} aria-label={"Instructions"}>
              Instructions{" "}
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper style={paperStyle} tabIndex={"0"}>
          <Typography
            variant={"h6"}
            color={"inherit"}
            paragraph={true}
            aria-label={
              "You clicked on an image." +
              " However, without the ability to see, it may be\n" +
              "                        difficult to decipher what these images represent.\n" +
              "                        Please make sure you are using Google Chrome. Please install the screen " +
              "reader from the Chrome webstore. Please make sure that ChromeVox is active and then click the " +
              "'next' button to experience what a similar, simple activity might look like to someone who is " +
              "blind."
            }
            tabIndex={"0"}
          >
            You clicked on an image. However, without the ability to see, it may
            be difficult to decipher what these images represent. Please make
            sure you are using
            <Link component={Link} target="_blank" href={"https://www.google.com/chrome/"}>
              {" "}
              Google Chrome
            </Link>
            . Please install the{" "}
            <Link
              component={Link} target="_blank"
              href={
                "https://chrome.google.com/webstore/" +
                "detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en"
              }
            >
              ChromeVox
            </Link>{" "}
            screenreader(If not already installed). Please make sure that
            ChromeVox is active and then click the 'next' button to experience
            what a similar, simple activity might look like to someone who is
            blind.
          </Typography>
        </Paper>
        <br />
        <Button
          href="#"
          onClick={this.handleSubmit}
          variant={"contained"}
          color={"primary"}
          aria-label={"Next"}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default GameInstructions;
