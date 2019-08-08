import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import StickyFooter from "../../components/helpers/StickyFooter";

class ProblemExplanation extends Component {
    render() {
        return (
            <div>
                <Typography variant={"h4"} aria-label={"Title"} gutterBottom>
                    Problem Explanation
                </Typography><br/>
                <Typography variant={"subtitle1"} aria-label={"Subtitle Instructions"} gutterBottom>
                    How do we make the page more accessible?
                </Typography><br/>
                <Typography variant={"body1"} aria-label={"Body Instructions"} gutterBottom>
                    The problem with the page is that we do not have the required ARIA attributes that
                    make the buttons accessible. They cannot be effectively described by the
                    screenreaders.
                </Typography>
                <br/>
                <Button variant={"text"}>Ok</Button>
                <Button variant={"text"}>Cancel</Button>
                <br/>
                <Button href={"/Lab3/ProblemFix"} variant={"contained"} color={"primary"}>
                    Next
                </Button>
                <StickyFooter/>
            </div>
        );
    }
}

export default ProblemExplanation;