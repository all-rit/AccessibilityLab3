import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button"
import catImage from "../../assets/images/c1.svg";
import carImage from "../../assets/images/c2.svg";
import burgerImage from "../../assets/images/b.png";
import StickyFooter from "../../components/helpers/StickyFooter";

class ProblemDiscovery extends Component {
    render() {
        const imgStyle = {width: "128px", height: "128px", border: "1px solid black", tabIndex: "0"};
        return (
            <div>
                <Typography variant={"h4"} aria-label={"Title"} gutterBottom>
                    Discover the Problem
                </Typography><br/>
                <Typography variant={"subtitle1"} aria-label={"Subtitle Instructions"} gutterBottom>
                    Can you find the accessibility issues with this page? Try using your screenreader.
                </Typography><br/>
                <Typography variant={"body1"} aria-label={"Body Instructions"} gutterBottom>
                    Write down the problems on a notepad or any other text editor.
                    Go ahead take a guess. Don't actually click on the Ok and Cancel buttons.
                    They are there for the example.
                </Typography>
                <br/>
                <input style={imgStyle} type={"image"} src={catImage}
                       alt={"image of cat"} tabIndex={"0"}/>
                <br/>
                <input style={imgStyle} type={"image"} src={carImage}
                       alt={"image of car"} tabIndex={"0"}/>
                <br/>
                <input style={imgStyle} type={"image"} src={burgerImage}
                       alt={"image of burger"} tabIndex={"0"}/>
                <br/>
                <Button variant={"text"}>Ok</Button>
                <Button variant={"text"}>Cancel</Button>
                <br/>
                <Button href={"/Lab3/ProblemExplanation"} variant={"contained"} color={"primary"}>
                    I'm Done
                </Button>
                <StickyFooter/>
            </div>
        );
    }
}

export default ProblemDiscovery;