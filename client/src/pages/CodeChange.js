import React,{Component} from 'react';
import {Link,Button} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
class CodeChange extends Component{

    render(){
        return(
            <div>
                <h1>Update Code</h1>
                <div>
                    <p>
                        Update code here:</p>
                <br/>
                </div>
                <Button href={"/"}>Next</Button>

            </div>
        );
    }
}
export default CodeChange;