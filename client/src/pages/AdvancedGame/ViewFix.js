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
                    Test Fix
                </Typography><br/>
                <Typography variant={"h6"} aria-label={"Subtitle Instructions"} gutterBottom>
                    Is your page now more accessible?
                </Typography><br/>
                <Typography variant={"body1"} aria-label={"Body Instructions"} gutterBottom>
                    If you have updated the buttons with the appropriate aria-labels then you have succeeded.
                    They can now be effectively described by screenreaders.
                </Typography>
                <br/>
                <Button variant={"text"}
                        aria-label={(window.location.state.aria1).replace(/<[^>]*>?/gm, '')}>Ok</Button>
                <Button variant={"text"}
                        aria-label={(window.location.state.aria2).replace(/<[^>]*>?/gm, '')}>Cancel</Button>
                <br/>

                <Button variant={"contained"} color={"primary"} onClick={ViewFix.navOnClick}>
                    Next
                </Button>
                <StickyFooter/>
            </div>
        );
    }
}

export default ViewFix;