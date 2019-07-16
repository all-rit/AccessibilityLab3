import React,{Component} from 'react';
import {Button} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
class AccessibleInstructions extends Component{

    render(){
        return(
            <div>
                <h1 tabIndex={"0"}>Instructions</h1>
            <ListItem component={ListItem}><ListItemText  component={ListItemText} primary={"You clicked on an image. However, without the ability to see, it may be difficult\n" +
            "                to decipher what these images represent."} tabIndex={"0"}/></ListItem>
                <div tabIndex={"0"}>
                    <p>
                        The previous page demonstrated how difficult it was to use a page that was inaccessible.

                        In order to make the pages readable by a screenreader we need to be add 'alt' attributes to content which will help improve accessibility.

                    </p><br/>
                    Note: In the actual project we will show instructions on how to make the page more accessible to users. Participants will also be lead through the activity of repairing the code.
                <br/>
                </div>
                <Button href={"/Lab3/AccessibleGame"}>Next</Button>

            </div>
        );
    }
}
export default AccessibleInstructions;