import React,{Component} from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button"
class ProblemDiscovery extends Component{
    render() {


        return(
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
                <Button variant={"text"}>Ok</Button>
                <Button variant={"text"}>Cancel</Button>
                <br/>
                <Button href={"/Lab3/ProblemExplanation"} variant={"contained"} color={"primary"}>
                    I'm Done
                </Button>
            </div>
        );
    }
}
export default ProblemDiscovery;