import React, {Component} from 'react';

import WelcomeMessage from './WelcomeMessage';
import Button from "@material-ui/core/Button";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class Header extends Component {
    render() {
        const {user} = this.props;
        const buttonStyle = {marginTop: "5px"};
        const appBarStyle = {flexGrow: "1"};
        return (
            <AppBar position="static" color={"primary"} style={appBarStyle}>
                <Toolbar>
                    <Grid
                        justify="space-between"
                        container
                        spacing={10}
                    >
                        <Grid item>

                        <Button href={"/Lab3/HelloWorld"} variant={"contained"} style={buttonStyle}>Screenreader
                            Tutorial
                        </Button>
                        </Grid>
                        <Grid item>
                        <Typography variant={"h4"} color={"inherit"}>
                            Accessibility Learning Lab 3
                        </Typography>
                        </Grid>
                        <Grid item>
                        <WelcomeMessage user={user}/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
