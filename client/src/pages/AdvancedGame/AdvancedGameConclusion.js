import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button"
import StickyFooter from "../../components/helpers/StickyFooter";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar/AppBar";

class AdvancedGameConclusion extends Component {
    render() {
        const appBarStyle = {flexGrow: "1"};
        return (
            <div>
                <AppBar position="static" color={"primary"} style={appBarStyle}>
                    <Toolbar>
                        <Grid
                            justify="center"
                            container
                            spacing={10}
                        >
                            <Grid item>
                                <Typography variant={"h4"}>
                                    Conclusion
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
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