import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography";

class AccessibleInstructions extends Component {

    render() {
        return (
            <div>
                <Typography variant={"h4"} aria-label={"Instructions"} tabIndex={"0"}>
                    Instructions
                </Typography>
                <ListItem component={ListItem}><ListItemText component={ListItemText}
                                                             primary={"You clicked on an image. However, without the ability to see, it may be difficult\n" +
                                                             "                to decipher what these images represent."}
                                                             tabIndex={"0"}/></ListItem>
                <div tabIndex={"0"}>
                    <Typography variant={"body1"} aria-label={"Game Instructions"}>
                        The previous page demonstrated how difficult it was to use a page that was inaccessible.

                        In order to make the pages readable by a screenreader we need to be add 'alt' attributes to
                        content which will help improve accessibility.
                    </Typography><br/>
                   <Typography variant={"body1"} aria-label={"Note for important instructions"}>
                       Note: In the actual project we will show instructions on how to make the page more accessible to
                       users. Participants will also be lead through the activity of repairing the code.
                   </Typography>
                    <br/>
                </div>
                <Button href={"/Lab3/AccessibleGame"} variant={"contained"} color={"primary"}>Next</Button>

            </div>
        );
    }
}

export default AccessibleInstructions;