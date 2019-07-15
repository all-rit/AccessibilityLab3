import React,{Component} from 'react';
import {Button} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
class AccessibleInstructions extends Component{

    render(){
        return(
            <div>
                <h1>Instructions</h1>
            <ListItem component={ListItem}><ListItemText  component={ListItemText} primary={"You clicked on an image. However, without the ability to see, it may be difficult\n" +
            "                to decipher what these images represent."}/></ListItem>
                <div>
                    <p>
                        The previous page demonstrated how difficult it was to use a page that was inaccessible.<br/>

                        In order to make the pages readable by a screenreader we need to be add 'alt' attributes to content which will help improve accessibility.<br/>

                        Note: In the actual project we will show instructions on how to make the page more accessible to users. Particpants will also be lead through the activty of repairing the code.</p>
                <br/>
                </div>
                <Button href={"/Lab3/AccessibleGame"}>Next</Button>

            </div>
        );
    }
}
export default AccessibleInstructions;