import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import Repair from "../../components/main/Repair";
import CodeUpdateForm from "../../components/main/CodeUpdateForm";

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
                <Button href={"/"} variant={"contained"} color={"primary"}>Next</Button>
            <CodeUpdateForm/>
            </div>
        );
    }
}

export default CodeChange;