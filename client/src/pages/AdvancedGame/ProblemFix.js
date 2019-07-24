import React,{Component} from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
class ProblemFix extends Component{
    render(){
        return(
            <div>
                <Typography variant={"h4"} aria-label={"Title"} gutterBottom>
                    Problem Fix
                </Typography><br/>
                <Typography variant={"subtitle1"} aria-label={"Subtitle Instructions"} gutterBottom>
                    Update the aria-tags to fix the accessibility issues.
                </Typography><br/>
                <Typography variant={"body1"} aria-label={"Body Instructions"} gutterBottom>
                    Make changes and then press update Code. //Placeholder. TODO.
                </Typography>
                <br/>
                <Button variant={"text"}>Ok</Button>
                <Button variant={"text"}>Cancel</Button>
                <br/>
                <Button href={"/Lab3"} variant={"contained"} color={"primary"}>
                    Home
                </Button>
            </div>
        );
    }
}
export default ProblemFix;