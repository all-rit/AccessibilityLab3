import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import Repair from "../components/main/Repair";

class CodeChange extends Component {

    render() {
        return (
            <div>
                <h1>Update Code</h1>
                <div>
                    <p>
                        Update code here:</p>
                    <Repair/>
                    <br/>
                </div>
                <Button href={"/"}>Next</Button>

            </div>
        );
    }
}

export default CodeChange;