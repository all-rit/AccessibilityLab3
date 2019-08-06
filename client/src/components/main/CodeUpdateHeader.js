import React, {Component} from 'react';
import {Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class CodeUpdateHeader extends Component {
    render() {
        const appBarStyle = {flexGrow: "1"};
        return (
            <AppBar position="static" color={"primary"} style={appBarStyle}>
                <Toolbar>
                    <Typography variant={"h4"} color={"inherit"}>Make Code Changes</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default CodeUpdateHeader;
