import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import Repair from "../../components/main/Repair";
import CodeUpdateForm from "../../components/main/CodeUpdateForm";
import CodeUpdateHeader from "../../components/main/CodeUpdateHeader";

class CodeChange extends Component {

    render() {
        return (
            <div>
                <CodeUpdateHeader/>
                <Repair/>
            </div>
        );
    }
}

export default CodeChange;