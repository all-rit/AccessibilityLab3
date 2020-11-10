import React, { Component } from "react";
// import catImage from "../../assets/images/c1.svg";
// import carImage from "../../assets/images/c2.svg";
// import cowImage from "../../assets/images/cow.jpg";
// import burgerImage from "../../assets/images/b.png";
import CatClickNavigate from "../../components/helpers/CatClickNavigate.js";
import { Typography } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import PageService from "../../services/PageService";
import "./../../vendor/bootstrap/css/bootstrap.min.css";
import "./../../css/agency.min.css";
import "./../../css/style.css";
import {GAME_PLAYING} from "../../constants";
class AccessibleUserUpdatedGame extends Component {
  constructor(props) {
    super(props);
    this.state = { render: "", secondsElapsed: 0 };
    document.body.style = "background: black";
  }

  _renderSubComp() {
    if (this.state.render === "CatClickNavigate") {
      return <CatClickNavigate path={"/CodeChange"} />;
    }
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.updateState(GAME_PLAYING);
    actions.enableEnd(true);
    this.interval = setInterval(
      () => this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { data } = this.props;
    const catClick = () => {
      const name = "AccessibleUserUpdatedGame";
      PageService.createPage(name, this.state.secondsElapsed);
      console.log("Cat image clicked!");
      this.setState({ render: "CatClickNavigate" });
      window.speechSynthesis.cancel();
      let utterance = new SpeechSynthesisUtterance("Cat image clicked. Please navigate to the next button on the bottom left of the page.");
      window.speechSynthesis.speak(utterance);
    };
    const burgerClick = () => {
      console.log("Burger image clicked!");
    };
    const carClick = () => {
      console.log("Car image clicked!");
    };
    const cowClick = () => {
      console.log("Cow image clicked!");
    };
    const textToSpeech = (e, text) => {
      let synth = window.speechSynthesis;
      synth.cancel();
      let utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
    };
    const imgStyle = {
      width: "128px",
      height: "128px",
      border: "1px solid black",
      backgroundColor: "black"
    };
    const tableStyle = {
      border: "1px solid black",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
    };
    const textStyle = { color: "white", tabIndex: "0" };
    return (
      <div>
        <AppBar position="static" className = "appBar">
          <Toolbar>
            <Typography
              variant={"h4"}
              aria-label={"Accessible Game"}
              style={textStyle}
              tabIndex={"0"}
              onFocus={(e) => textToSpeech(e,"Accessible Game")}
            >
              Accessible Game
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <Typography
          variant={"h6"}
          aria-label={
            "Click on the image of a cat. You can use the keyboard to navigate by tabbing across the page. Press the enter key to select."
          }
          style={textStyle}
          tabIndex={"0"}
          onFocus={(e) => textToSpeech(e,"Click on the image of a cat. You can use the keyboard to navigate by tabbing across the page. Press the enter key to select.")}
        >
          Click on the image of a cat. You can use the keyboard to navigate by
          tabbing across the page. Press the enter key to select.
        </Typography>
        <table style={tableStyle} tabIndex={"0"}>
          <tbody>
            <tr>
              <td tabIndex={"1"}>
                <button
                  style={imgStyle}
                  onClick={() => catClick()}
                  tabIndex={"0"}
                  onFocus={(e)=> textToSpeech(e, data.repair.catAltValue)}
                />
              </td>
              <td tabIndex={"1"}>
                <input
                  style={imgStyle}
                  onClick={() => carClick()}
                  tabIndex={"0"}
                  onFocus={(e)=> textToSpeech(e, data.repair.carAltValue)}
                />
              </td>
            </tr>
            <tr>
              <td tabIndex={"1"}>
                <input
                  style={imgStyle}
                  onClick={() => burgerClick()}
                  tabIndex={"0"}
                  onFocus={(e)=> textToSpeech(e, data.repair.burgerAltValue)}
                />
              </td>
              <td tabIndex={"1"}>
                <input
                  style={imgStyle}
                  onClick={() => cowClick()}
                  tabIndex={"0"}
                  onFocus={(e)=> textToSpeech(e, data.repair.cowAltValue)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        {this._renderSubComp("/CodeChange")}
      </div>
    );
  }
}

export default AccessibleUserUpdatedGame;
