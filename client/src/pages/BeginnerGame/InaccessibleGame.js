import React, { Component } from "react";
// import catImage from "../../assets/images/c1.svg";
// import carImage from "../../assets/images/c2.svg";
// import burgerImage from "../../assets/images/b.png";
import CatClickNavigate from "../../components/helpers/CatClickNavigate.js";
// import cowImage from "../../assets/images/cow.jpg";
import { navigate } from "@reach/router";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {PageService} from "../../services/PageService";
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
    this.randomButtons=[];
  }

  _renderSubComp(path) {
    if (this.state.render === "CatClickNavigate") {
      return <CatClickNavigate path={path} />;
    }
  }
  componentDidMount() {
    const { actions } = this.props;
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
    console.log("detected key code is: " + event.keyCode);
    if (event.keyCode === 27) {
      console.log("Enter key pressed!");
      navigate(process.env.PUBLIC_URL + "/AccessibleInstructions");
    }
  }

  onFocusGain(event, className) {
    console.log("focus gained");
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

  shuffleArray(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
  }
  setupButons(){
    const catClick = () => {
      console.log("Cat image clicked!");
      const name = "InaccessibleGame";
      PageService.createPage(name, this.state.secondsElapsed);
      this.setState({ render: "CatClickNavigate" });
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

    var buttons =[
      <button style={imgStyle} onClick={() => catClick()} tabIndex={"0"} onFocus={(e) => textToSpeech(e, "Image 1")} />,
      <input style={imgStyle} onClick={() => burgerClick()} tabIndex={"0"} onFocus={(e) => textToSpeech(e, "Image 2")} />,
      <input style={imgStyle} onClick={() => carClick()} tabIndex={"0"} onFocus={(e) => textToSpeech(e, "Image 3")} />,
      <input style={imgStyle} onClick={() => cowClick()} tabIndex={"0"} onFocus={(e) => textToSpeech(e, "Image 4")} />
    ]

    var renderedButtons= buttons.map(function(button,index){
      return <td key={index} tabIndex={"1"}>{button}</td>
    });
    this.randomButtons= this.shuffleArray(renderedButtons) 
    
  }

  render() {
    this.setupButons()
    const textToSpeech = (e, text) => {
      let synth = window.speechSynthesis;
      synth.cancel();
      let utterThis = new SpeechSynthesisUtterance(text);
      synth.speak(utterThis);
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
                  onFocus={(e) => textToSpeech(e,"Inaccessible Game")}
                >
                  Inaccessible Game
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Typography 
          variant={"h6"} 
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
              {this.randomButtons[0]}
              {this.randomButtons[1]}
            </tr>
            <tr>
              {this.randomButtons[2]}
              {this.randomButtons[3]}
            </tr>
          </tbody>
        </table>
        {this._renderSubComp("/AccessibleInstructions")}
      </div>
    );
  }
}

export default InaccessibleGame;
