import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button"
import StickyFooter from "../../components/helpers/StickyFooter";

class AdvancedGameConclusion extends Component {
    render() {
        return (
            <div>
                <Typography variant={"h4"}>
                    Conclusion
                </Typography>
                <br/>
                <Typography variant={"body1"}>
                    You have successfully completed the activity!
                    Click on the home button to return to the main page
                </Typography>
                <br/>
                <Button href={"/Lab3/"} variant={"contained"} color={"primary"}>
                    Home
                </Button>
                <StickyFooter/>
            </div>
        );
    }
}

export default AdvancedGameConclusion;