import React, {Component} from "react";
import Button from "@material-ui/core/Button"
import StickyFooter from "../../components/helpers/StickyFooter";
import {AppBar, Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

class AdvancedInstructions extends Component {
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
                                <Typography aria-label={"Advanced Instructions"} variant={"h4"} gutterBottom>
                                    Instructions for Advanced Activity
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Typography aria-label={"Instructions for Advanced Activity"} variant={"h6"} gutterBottom>
                    Instructions for Advanced Activity.
                </Typography>
                <Button href={"/Lab3/ProblemDiscovery"} variant={"contained"} color={"primary"}>
                    Next
                </Button>
                <StickyFooter/>
            </div>
        );
    }
}

export default AdvancedInstructions;