import React, {Component} from 'react';
import {Typography} from "@material-ui/core";

class CodeUpdateHeader extends Component {
    render() {
        return (
            <header className="header">
                <div className={"header_column text-center"}>
                    <Typography variant={"h4"}>Update Code</Typography>
                </div>
            </header>
        );
    }
}

export default CodeUpdateHeader;
