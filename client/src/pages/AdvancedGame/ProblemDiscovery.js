import React, { Component } from "react";
import { AppBar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import catImage from "../../assets/images/c1.svg";
import carImage from "../../assets/images/c2.svg";
import burgerImage from "../../assets/images/b.png";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { navigate } from "@reach/router";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
import {GAME_PLAYING} from "../../constants";

class ProblemDiscovery extends Component {
  handleSubmit() {
    navigate(process.env.PUBLIC_URL + "/ProblemDiscoveryFixedExperience");
  }
    componentDidMount() {
        const { actions } = this.props;
        actions.updateState(GAME_PLAYING);
    }
  render() {
    const imgStyle = {
      width: "128px",
      height: "128px",
      border: "1px solid black",
      tabIndex: "0"
    };
    return (
      <div>
          <AppBar position="static" className = "appBar">
          <Toolbar>
            <Grid justify="center" container spacing={10}>
              <Grid item>
                <Typography
                  variant={"h4"}
                  aria-label={"Discover the problem"}
                  gutterBottom
                >
                  Discover the Problem
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <br />
        <Typography
          variant={"subtitle1"}
          aria-label={"Subtitle Instructions"}
          gutterBottom
        >
          Can you find the accessibility issues with this page? Try using your
          screenreader.
        </Typography>
        <br />
        <Typography
          variant={"body1"}
          aria-label={"Body Instructions"}
          gutterBottom
        >
          Write down the problems on a notepad or any other text editor. Go
          ahead take a guess. Don't actually click on the Ok and Cancel buttons.
          They are there for the example.
        </Typography>
        <br />
        <input
          style={imgStyle}
          type={"image"}
          src={catImage}
          alt={"image of cat"}
          tabIndex={"0"}
        />
        <br />
        <input
          style={imgStyle}
          type={"image"}
          src={carImage}
          alt={"image of car"}
          tabIndex={"0"}
        />
        <br />
        <input
          style={imgStyle}
          type={"image"}
          src={burgerImage}
          alt={"image of burger"}
          tabIndex={"0"}
        />
        <br />
        <Button variant={"text"}>Ok</Button>
        <Button variant={"text"}>Cancel</Button>
        <br />
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

export default ProblemDiscovery;
