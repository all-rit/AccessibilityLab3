import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";

class CodeUpdateHeader extends Component {
    render() {
        const buttonStyle ={marginTop:"20px", marginLeft:"20px"};
        return (
            <header className="header">
                <div className={"header_column text-left"}>
                    <Button href={"/Lab3/"} variant={"contained"} style={buttonStyle}
                            color={"secondary"}>Home</Button>
                </div>
                <div className={"header_column text-center"}>
                    <Typography variant={"h4"}>Update Code</Typography>
                </div>
            </header>
        );
    }
}

export default CodeUpdateHeader;
