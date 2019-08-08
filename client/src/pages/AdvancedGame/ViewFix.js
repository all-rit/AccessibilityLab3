import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {navigate} from "@reach/router";
import StickyFooter from "../../components/helpers/StickyFooter";

class ViewFix extends Component {
    constructor(props) {
        super(props);
        ViewFix.navOnClick = ViewFix.navOnClick.bind(this);
    }

    static navOnClick() {
        navigate("/Lab3/ProblemFix");
    }

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
                <Button variant={"text"}
                        aria-label={(window.location.state.aria1).replace(/<[^>]*>?/gm, '')}>Ok</Button>
                <Button variant={"text"}
                        aria-label={(window.location.state.aria2).replace(/<[^>]*>?/gm, '')}>Cancel</Button>
                <br/>

                <Button type={"submit"} variant={"contained"} color={"primary"} onClick={ViewFix.navOnClick}>
                    Next
                </Button>
                <StickyFooter/>
            </div>
        );
    }
}

export default ViewFix;