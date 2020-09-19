import React, { Component } from "react";
import catImage from "../../assets/images/c1.svg";
import carImage from "../../assets/images/c2.svg";
import burgerImage from "../../assets/images/b.png";
import CatClickNavigate from "../../components/helpers/CatClickNavigate.js";
import cowImage from "../../assets/images/cow.jpg";
import { navigate } from "@reach/router";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PageService from "../../services/PageService";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
import {GAME_PLAYING} from "../../constants";

class InaccessibleGame extends Component {
  constructor(props) {
    super(props);
    this.state = { render: "", secondsElapsed: 0 };
    document.body.style = "background: black";
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  _renderSubComp(path) {
    if (this.state.render === "CatClickNavigate") {
      return <CatClickNavigate path={path} />;
    }
  }
  componentDidMount() {
    const { data, actions } = this.props;
    actions.updateState(GAME_PLAYING);
    this.interval = setInterval(
      () => this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleKeyDown(event) {
    if (event.keyCode === 27) {
      navigate(process.env.PUBLIC_URL + "/AccessibleInstructions");
    }
  }

  onFocusGain(event, className) {
    const element = document.getElementsByClassName(className);
    for (var i = 0; i < element.length; i++) {
      element[i].style = { borderColor: "red" };
    }
  }

  onFocusLoss(event, className) {
    console.log("focus lost");
    const element = document.getElementsByClassName(className);
    for (var i = 0; i < element.length; i++) {
      element[i].style = { borderColor: "black" };
    }
  }

  render() {
    const catClick = () => {
      const name = "InaccessibleGame";
      PageService.createPage(name, this.state.secondsElapsed);
      this.setState({ render: "CatClickNavigate" });
    };

    const imgStyle = {
      width: "128px",
      height: "128px",
      border: "1px solid black",
      opacity: "0.0",
      tabIndex: "0"
    };
    const tableStyle = {
      border: "1px solid black",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      tabIndex: "0"
    };
    const appBarStyle = { flexGrow: "1" };
    const textStyle = { color: "white", tabIndex: "0" };
    return (
      <div>
        <AppBar position="static" color={"primary"} style={appBarStyle}>
          <Toolbar>
            <Grid
              justify="center"
              container
              spacing={10}
              aria-label={"Page Title Grid"}
            >
              <Grid item>
                <Typography
                  variant={"h4"}
                  color={"white"}
                  aria-label={"Inaccessible Game"}
                  tabIndex={"0"}
                >
                  Inaccessible Game
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Typography variant={"h6"} style={textStyle} tabIndex={"0"}>
          Click on the image of a cat. You can use the keyboard to navigate by
          tabbing across the page. Press the enter key to select.
        </Typography>
        <table style={tableStyle} tabIndex={"0"}>
          <tbody>
            <tr>
              <td tabIndex={"0"}>
                <input
                  style={imgStyle}
                  type={"image"}
                  src={catImage}
                  onClick={() => catClick()}
                  alt={""}
                  tabIndex={"0"}
                  onKeyDown={this.handleKeyDown}
                  onFocus={this.onFocusGain}
                  onKeyPress={this.handleKeyDown.bind(this, "c1")}
                  onfocusout={this.onFocusLoss.bind(this, "c1")}
                  className={"c1"}
                  aria-label={"image1"}
                />
              </td>
              <td tabIndex={"0"}>
                <input
                  style={imgStyle}
                  type={"image"}
                  src={carImage}
                  onClick={() => carClick()}
                  alt={""}
                  tabIndex={"0"}
                  onKeyDown={this.handleKeyDown}
                  onFocus={this.onFocusGain}
                  onKeyPress={this.handleKeyDown.bind(this, "c2")}
                  onfocusout={this.onFocusLoss.bind(this, "c2")}
                  className={"c2"}
                  aria-label={"image2"}
                />
              </td>
            </tr>
            <tr>
              <td tabIndex={"0"}>
                <input
                  style={imgStyle}
                  type={"image"}
                  src={burgerImage}
                  onClick={() => burgerClick()}
                  alt={""}
                  tabIndex={"0"}
                  onKeyDown={this.handleKeyDown}
                  onFocus={this.onFocusGain}
                  onKeyPress={this.handleKeyDown.bind(this, "c3")}
                  onfocusout={this.onFocusLoss.bind(this, "c3")}
                  className={"c3"}
                  aria-label={"image3"}
                />
              </td>
              <td tabIndex={"0"}>
                <input
                  style={imgStyle}
                  type={"image"}
                  src={cowImage}
                  onClick={() => cowClick()}
                  alt={""}
                  tabIndex={"0"}
                  onKeyDown={this.handleKeyDown}
                  onKeyPress={this.handleKeyDown}
                  onFocus={this.onFocusGain.bind(this, "c4")}
                  onfocusout={this.onFocusLoss.bind(this, "c4")}
                  className={"c4"}
                  aria-label={"image4"}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {this._renderSubComp("/AccessibleInstructions")}
      </div>
    );
  }
}

export default InaccessibleGame;
