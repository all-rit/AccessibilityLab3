import React, {Component} from 'react';
import Repair from "../../components/main/Repair";
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